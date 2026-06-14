import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // auto-open in browser on npm run dev
  },
  build: {
    emptyOutDir: true, // always wipe dist before building
  },
});
