import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://www.deutschstart.com',
    integrations: [
        sitemap({
            lastmod: new Date().toISOString(),
            filter: (page) => page !== '/404/',
            customPages: [
                'https://www.deutschstart.com/',
                'https://www.deutschstart.com/about/',
                'https://www.deutschstart.com/faq/'
            ],
            changefreq: 'weekly',
            priority: 1
        })
    ]
});
