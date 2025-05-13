import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://www.deutschstart.com', // 🔥 لازم الدومين الصحيح هنا

  integrations: [sitemap()],
});