import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import glsl from "vite-plugin-glsl";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  resolve: {
    alias: {
      "@": "/src",
      "&": "/static",
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
