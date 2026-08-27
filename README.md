# Adam&Co Accounting — Website

A clean, professional website for an accounting firm. Built with **React + Vite + Tailwind CSS** on the frontend and **Node.js + Express** on the backend.

---

## Running Locally (Dev Mode)

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### 1. Install all dependencies

Run this once from the project root:

```bash
npm run install:all
```

This installs dependencies for the root workspace, the `client/`, and the `server/`.

### 2. Start the dev servers

```bash
npm run dev
```

This runs two processes concurrently:

| Process | URL | What it does |
|---|---|---|
| Vite (React) | http://localhost:5173 | Hot-reloading frontend |
| Express (API) | http://localhost:3000 | Contact form endpoint |

Vite automatically proxies any `/api/*` request to the Express server, so you never deal with CORS in development.

---

## Building for Production

```bash
npm run build
```

This compiles the React app into `client/dist/`.

### Start in production mode

```bash
npm start
```

Express serves both the compiled React app **and** the API from a single process at http://localhost:3000.

---

## Where to Edit Placeholder Content

### Firm name & branding
Search the project for `Adam&Co Accounting` and replace it everywhere. The main spots:

| File | What to change |
|---|---|
| `client/index.html` | Page `<title>` and meta description |
| `client/src/components/Navbar.jsx` | Logo text |
| `client/src/components/Footer.jsx` | Footer name and tagline |
| `client/src/pages/Home.jsx` | Hero heading, tagline, intro copy, feature cards |

### Services
Edit the `services` array at the top of `client/src/pages/Services.jsx`.

### About page
Edit `client/src/pages/About.jsx` directly. The firm bio, founder name, credentials, and values are all clearly marked as placeholders with comments.

### Blog posts
Add `.md` files to `client/src/content/posts/`. Each file must start with a frontmatter block:

```markdown
---
title: Your Post Title
date: 2025-06-24
description: A one-sentence summary shown on the blog list page.
---

Your markdown content here...
```

The URL slug comes from the filename: `my-post.md` → `/blog/my-post`.

**Important:** Posts are loaded at build time by Vite. You must restart the Vite dev server (or rebuild) after adding or editing a post file.

---

## Where Contact Form Submissions Are Saved

Every successful contact form submission is appended to:

```
server/data/submissions.json
```

Each entry looks like:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I'd like to schedule a consultation.",
  "submittedAt": "2025-06-24T14:30:00.000Z"
}
```

To connect a real database later, replace the `fs.readFileSync` / `fs.writeFileSync` block in `server/index.js` (clearly commented) with your database insert logic.

---

## Project Structure

```
/
├── package.json              ← root scripts: dev, build, start, install:all
├── client/
│   ├── vite.config.js        ← Vite config + API proxy
│   ├── tailwind.config.js
│   └── src/
│       ├── App.jsx           ← React Router setup
│       ├── components/
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Services.jsx
│       │   ├── About.jsx
│       │   ├── Contact.jsx
│       │   ├── Blog.jsx
│       │   └── BlogPost.jsx
│       ├── utils/
│       │   └── parsePosts.js ← markdown loader (Vite import.meta.glob)
│       └── content/
│           └── posts/        ← add .md files here for blog posts
└── server/
    ├── index.js              ← Express app
    ├── .env                  ← PORT=3000
    └── data/
        └── submissions.json  ← contact form submissions
```

## Changing the Server Port

Edit `server/.env`:

```
PORT=4000
```

Then update the proxy in `client/vite.config.js` to match:

```js
proxy: {
  '/api': 'http://localhost:4000',
}
```
