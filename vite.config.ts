import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": "./components",
      "@": "./src",
    },
    extensions: [".ts", ".tsx", ".json", ".css", "svg", "js"],
  },
  plugins: [react()],
});
