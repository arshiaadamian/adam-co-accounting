import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // In development, forward /api requests to the Express server.
    // This means the browser sees one origin and we avoid CORS issues.
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
