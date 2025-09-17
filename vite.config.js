import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping/",
  plugins: [react()],

  '/api': {
    target: 'http://localhost:8888',
    changeOrigin: true,
    secure: false,
  },
},
)
