import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "f-box",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [
    dts({
      outDir: "dist",
    }),
  ],
});
