# Adam&Co Accounting — Website

A clean, professional marketing site for an accounting firm. **Static single-page
app** built with **React + Vite + Tailwind CSS**. No backend — the contact form
uses **Netlify Forms**, and the whole site deploys to Netlify as plain files.

---

## Running Locally

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### 1. Install dependencies

```bash
npm run install:all
```

(Runs `npm install` inside `client/`. You can also just `cd client && npm install`.)

### 2. Start the dev server

```bash
npm run dev
```

Vite serves the site at **http://localhost:5173** with hot reloading.

> The contact form only records submissions once deployed to Netlify — locally the
> POST to `/` has nowhere to go, so you'll see the error banner. Everything else
> works offline.

---

## Building for Production

```bash
npm run build
```

Compiles the site into **`client/dist/`** — static HTML, CSS and JS ready to upload
anywhere. Preview the production build with `npm run preview --prefix client`.

---

## Deploying to Netlify

The repo is already set up for it.

In the Netlify UI (or a `netlify.toml`), set:

| Setting | Value |
|---|---|
| Base directory | `client` |
| Build command | `npm run build` |
| Publish directory | `client/dist` (`dist` if base is `client`) |

Set `NODE_VERSION` to `18` or newer in the Netlify environment variables.

**SPA routing** — `client/public/_redirects` contains:

```
/*    /index.html   200
```

so `/about`, `/services`, `/contact` resolve on direct load and refresh.

---

## Contact Form (Netlify Forms)

Because the form is rendered by React, Netlify can't see it in the built HTML, so
detection is handled in two places:

1. **`client/index.html`** has a hidden static `<form name="contact" data-netlify="true"
   netlify-honeypot="bot-field">` with the same fields. Netlify scans this at build
   time and registers the form.
2. **`client/src/pages/Contact.jsx`** renders the real form and submits it with
   `fetch('/', …)` as `application/x-www-form-urlencoded`, including `form-name=contact`.

Keep the field names (`name`, `email`, `message`, `bot-field`) identical in both files.

- Submissions appear under **Forms** in the Netlify dashboard. Add notification
  emails there (Site configuration → Forms → Form notifications).
- `bot-field` is a honeypot — hidden from people, filled by bots, filtered by Netlify.
- The form shows a note asking people not to send SIN, bank/account numbers, or tax
  documents.
- Loading / success / error states and the green/red banners are handled in
  `Contact.jsx`.

---

## Where to Edit Placeholder Content

### Firm name & branding
Search the project for `Adam&Co Accounting` and replace it. Main spots:

| File | What to change |
|---|---|
| `client/index.html` | Page `<title>` and meta description |
| `client/src/components/Navbar.jsx` | Logo text |
| `client/src/components/Footer.jsx` | Footer name and tagline |
| `client/src/pages/Home.jsx` | Hero heading, tagline, intro copy, feature cards |

### Services
Edit the `services` array at the top of `client/src/pages/Services.jsx`.

### About page
Edit `client/src/pages/About.jsx` directly. Firm bio, founder name, and values are
marked as placeholders with comments.

### Contact details & office map
Phone, email, address and hours live in the `CONTACT` object at the top of
`client/src/components/ContactInfo.jsx`. The map is `client/src/components/OfficeMap.jsx`
(a city-level Google Maps embed of Port Moody — swap `MAP_QUERY` for a street
address when available).

### Colours & fonts
The brand palette is defined once in `client/tailwind.config.js`. Headings use
Fraunces (loaded from Google Fonts in `client/index.html`); body uses the system sans.

### Images
Photo slots use `<ImagePlaceholder>`. Drop files into `client/public/images/` and
pass `src="/images/<file>"` — see `client/public/images/README.txt`. Files present:
`hero.png`, `team.png`, `office.png`, plus `favicon.svg`.

---

## Project Structure

```
/
├── package.json              ← thin wrapper: dev / build / install → client
├── client/
│   ├── vite.config.js
│   ├── tailwind.config.js    ← brand colour palette
│   ├── index.html            ← <title>, meta, fonts, favicon, hidden Netlify form
│   ├── public/
│   │   ├── _redirects        ← Netlify SPA fallback
│   │   └── images/           ← site photos + favicon.svg
│   └── src/
│       ├── App.jsx           ← React Router setup
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── Logo.jsx
│       │   ├── Icon.jsx            ← lucide-react icon wrapper
│       │   ├── ImagePlaceholder.jsx
│       │   ├── ContactInfo.jsx     ← firm phone / email / address
│       │   ├── OfficeMap.jsx       ← Google Maps embed
│       │   └── ScrollToTop.jsx
│       └── pages/
│           ├── Home.jsx
│           ├── Services.jsx
│           ├── About.jsx
│           └── Contact.jsx    ← Netlify Forms submission
└── (no server — the site is fully static)
```
