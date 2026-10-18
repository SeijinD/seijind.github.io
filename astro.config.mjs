import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://seijind.github.io",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      provider: fontProviders.fontsource(),
      weights: ["100 900"],
      styles: ["normal", "italic"],
      fallbacks: ["serif"],
    },
    {
      name: "Instrument Sans",
      cssVariable: "--font-instrument",
      provider: fontProviders.fontsource(),
      weights: ["400 700"],
      styles: ["normal"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains",
      provider: fontProviders.fontsource(),
      weights: ["400 600"],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
});
