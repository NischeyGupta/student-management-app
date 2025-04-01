import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/student-management-app/",
  plugins: [react()],
  server: {
    port: 3000
  }
});