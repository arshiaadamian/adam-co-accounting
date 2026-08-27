import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // Provides prose-* utility classes used to style rendered markdown HTML in BlogPost.jsx
    typography,
  ],
};
