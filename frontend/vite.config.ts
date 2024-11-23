import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    outDir: "dist",
    minify: "esbuild",
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
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 8085
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  base: "/"
});
