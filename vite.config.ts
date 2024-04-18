import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This alias will tell Vite to use main.tsx as the entry point
      "@": require("path").resolve(__dirname, "src/main.tsx"),
    },
  },
});
