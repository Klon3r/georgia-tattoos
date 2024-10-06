import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Ensure source maps are disabled
  },
  server: {
    // Optional: Disable source maps on dev server if needed
    sourcemap: false,
  },
});
