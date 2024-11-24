import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom"
          ],
        },
      },
    },
  },
  server: {
    port: 80
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
