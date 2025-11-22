// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
//   base: '/',
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync(
          join(__dirname, 'dist', 'index.html'),
          join(__dirname, 'dist', '404.html')
        );
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/',
});