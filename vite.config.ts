import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgrPlugin({
      svgrOptions: {
        icon: true
        // ...svgr options (https://react-svgr.com/docs/options/)
      }
    })
  ],
  base: '/resume',
  build: {
    cssCodeSplit: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_debugger: true
      }
    }
  }
})
