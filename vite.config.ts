import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub user-site repository: served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: 'https://lex-947.github.io/',
  build: {
    rollupOptions: {
      output: {
        // Force chunk files to use .js instead of .mjs
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
});