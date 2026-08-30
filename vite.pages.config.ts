import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "/Projet-V/",
  root: fileURLToPath(new URL("./github-pages", import.meta.url)),
  publicDir: fileURLToPath(new URL("./public", import.meta.url)),
  plugins: [react()],
  resolve: {
    alias: {
      "@": projectRoot,
      "next/image": fileURLToPath(
        new URL("./github-pages/next-image.tsx", import.meta.url),
      ),
    },
  },
  css: {
    postcss: fileURLToPath(new URL("./postcss.config.mjs", import.meta.url)),
  },
  build: {
    outDir: fileURLToPath(new URL("./github-pages-dist", import.meta.url)),
    emptyOutDir: true,
  },
});
