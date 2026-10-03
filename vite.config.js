import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the production build works under any GitHub Pages path
// (https://<user>.github.io/<repo>/) without needing to hard-code the repo name.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
