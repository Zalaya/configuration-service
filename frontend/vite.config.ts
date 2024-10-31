import { defineConfig, UserConfig } from "vite"
import react from "@vitejs/plugin-react"

const configuration: UserConfig = {
    plugins: [react()],
}

export default defineConfig(configuration)
