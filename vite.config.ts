import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'FTC',
          dest: '.',
        },
      ],
    }),
  ],
  server: {
    open: true, // auto-open in browser on npm run dev
  },
  build: {
    emptyOutDir: true, // always wipe dist before building
  },
});
