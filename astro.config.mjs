// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gabul99.github.io",
  markdown: {
    shikiConfig: {
      themes: {
        light: "snazzy-light",
      },
    },
  },
});
