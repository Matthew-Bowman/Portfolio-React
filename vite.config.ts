import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { beasties } from "vite-plugin-beasties";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    beasties({
      // Plugin options
      options: {
        // Beasties library options
        preload: "swap",
        pruneSource: true, // Enable pruning CSS files
        inlineThreshold: 4000, // Inline stylesheets smaller than 4kb
      },
      // Filter to apply beasties only to specific HTML files
      filter: (path) => path.endsWith(".html"),
    }),
  ],
});
