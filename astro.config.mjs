// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel/serverless'; // Importe o adaptador serverless
import sitemap from '@astrojs/sitemap';

dotenv.config();
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  site: 'https://lucre.com',
  output: 'server', // Essencial para SSR e API Routes
  adapter: vercel({
    // Opcional: configure seu build para o Vercel
    // edge: true, // Se quiser usar Vercel Edge Functions
  }),
  integrations: [sitemap()],
});