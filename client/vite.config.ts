import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"
dotenv.config()

const SERVER_URL = `${process.env.SERVER_URL}`

export default defineConfig({
  server: {
    proxy: {
      '/api' : `${SERVER_URL}`,
      '/auth' : `${SERVER_URL}`
    }
  },
  plugins: [react()],
})
