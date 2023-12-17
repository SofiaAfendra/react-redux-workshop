import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // absoluteImports
  resolve: {
    alias: {
      components: '/src/components',
      utils: '/src/utils',
    },
  },
});
