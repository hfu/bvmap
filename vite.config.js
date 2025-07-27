import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Ensure all paths in the generated HTML are relative
  build: {
    outDir: 'docs', // dist を docs に設定
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'index.css'; // CSS ファイルをルートに出力
          }
          return '[name][extname]';
        }
      }
    }
  },
  server: {
    fs: {
      allow: [resolve('./')]
    }
  },
  publicDir: 'public', // Ensure public directory is copied to docs
});
