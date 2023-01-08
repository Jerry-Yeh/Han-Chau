import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      // '@': path.resolve(__dirname, 'src')
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: `https://gw.openapi.org.tw`,
  //       changeOrigin: true,
  //       ws: true,
  //       rewrite: (path) => path.replace('/api', ''),
  //       secure: false,
  //     },
  //   },
  // },
});
