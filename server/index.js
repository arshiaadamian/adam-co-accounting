require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────

app.use(express.json());

// Allow cross-origin requests so the Vite dev server (port 5173) can reach
// this API (port 3000). In production both are on the same origin, but this
// doesn't cause any harm there either.
app.use(cors());

// ── Static files (production only) ───────────────────────────────────────────

// After running `npm run build`, the compiled React app lands in client/dist.
// Express serves those files so a single `npm start` is enough in production.
// In development, Vite runs its own server on port 5173 — we skip this entirely.
const clientDist = path.join(__dirname, '..', 'client', 'dist');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(clientDist));
}

// ── API Routes ────────────────────────────────────────────────────────────────

// POST /api/contact
// Body: { name, email, message }
// Validates that all three fields are present, then appends the submission
// (plus a timestamp) to server/data/submissions.json.
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  const submission = {
    name,
    email,
    message,
    submittedAt: new Date().toISOString(),
  };

  const filePath = path.join(__dirname, 'data', 'submissions.json');

  try {
    // Read → parse → push → write back.
    // NOTE: This is a simple placeholder for a real database. It works fine for
    // low traffic but has a race condition if two requests arrive simultaneously.
    const raw = fs.readFileSync(filePath, 'utf8');
    const submissions = JSON.parse(raw);
    submissions.push(submission);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    return res.status(201).json({ message: 'Thank you! Your message has been received.' });
  } catch (err) {
    console.error('Failed to save submission:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// ── SPA fallback (production only) ───────────────────────────────────────────

// For any route that isn't an API call, send back index.html so React Router
// can handle client-side routes like /about, /services, etc.
// In development, Vite handles this — Express should not interfere.
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

// ── Start ─────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
