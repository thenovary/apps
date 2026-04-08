import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thenovary.github.io',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/': '/ko/',
  },
});
