import { fileURLToPath, URL } from 'node:url'

// -------------------- Original config (commented) --------------------
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueDevTools(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//   },
// })
// ----------------------------------------------------------------------

// -------------------- Active config with proxy + ngrok support --------------------
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true, // allow external access (needed for ngrok)
    allowedHosts: ['.ngrok-free.dev'], // allow all ngrok free domains
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // your Node backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
