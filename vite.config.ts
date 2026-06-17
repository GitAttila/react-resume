import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),
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
