import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vasov.vercel.app',
  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sr'],
    routing: {
      prefixDefaultLocale: false, // EN at "/", SR at "/sr"
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          sr: 'sr-Latn-RS',
        },
      },
    }),
  ],
});