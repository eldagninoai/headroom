import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://headroomsound.netlify.app", // Tu URL real

  integrations: [mdx(), sitemap(), icon()],

  // ESTA ES LA PARTE PARA QUE CARGUE EN TU CELULAR
  server: {
    host: true, // Esto abre el servidor a tu Wi-Fi
    port: 4321, 
  },

  vite: {
    plugins: [tailwindcss()],
  },
});