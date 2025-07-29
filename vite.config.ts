import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ['ct-react-task-1-wsjr.onrender.com']
  }
})
