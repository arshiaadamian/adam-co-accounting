/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ── Brand palette ─────────────────────────────────────────────────────
      // Warm, minimal, restrained. Flat surfaces with hairline borders.
      // Clay is the only interactive colour.
      colors: {
        ink: '#1A1817',        // dark surfaces: nav, footer, hero
        graphite: '#24221F',   // elevated surfaces on dark
        stone: '#55504A',      // body text on light
        clay: {
          DEFAULT: '#A34A2E',  // accent: buttons, links, active states
          light: '#C4735A',    // small accent text, dark backgrounds only
        },
        mist: '#C9C2B6',       // secondary text on dark
        sand: '#F2EEE7',       // page background
        paper: '#FBF9F6',      // cards
        hairline: {
          DEFAULT: '#DDD6CA',  // borders on light
          dark: '#2E2A26',     // borders on dark
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto',
          'Helvetica Neue', 'Arial', 'sans-serif',
        ],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
