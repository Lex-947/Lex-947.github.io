import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub user-site repository: served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
});