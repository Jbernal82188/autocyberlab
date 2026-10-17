import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tudominio.com', // Cambia esto por tu dominio final
  trailingSlash: 'always', 
  i18n: {
    defaultLocale: 'en', 
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true, 
    },
  },
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-419',
        },
      },
    }),
  ],
});