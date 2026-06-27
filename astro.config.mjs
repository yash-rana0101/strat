// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.stratai.live',
  integrations: [mdx(), sitemap()],
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});