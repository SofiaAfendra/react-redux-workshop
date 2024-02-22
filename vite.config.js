import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      libraries: '/src/libraries',
      models: '/src/models',
      store: '/src/store',
      utils: '/src/utils',
      config: '/src/config',
    },
  },
});
