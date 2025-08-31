import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: {
        '/wallet': {
        target: 'https://64.227.189.27', 
        changeOrigin: true,
        secure: false,  
        },
      },
    },
  };
});
