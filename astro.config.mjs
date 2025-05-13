import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.deutschstart.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404'),
      customPages: [
        'https://www.deutschstart.com/',
        'https://www.deutschstart.com/about/',
        'https://www.deutschstart.com/faq/'
      ]
    })
  ]
});