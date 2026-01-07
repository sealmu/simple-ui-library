import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "SimpleUiLibrary",
      formats: ["es", "umd"],
      fileName: (format) =>
        `simple-ui-library.${format === "es" ? "es" : "umd"}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
