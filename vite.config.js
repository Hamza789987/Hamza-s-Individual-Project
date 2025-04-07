import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Hamza-s-Individual-Project/", // Matches your repository name
  plugins: [react()],
});
