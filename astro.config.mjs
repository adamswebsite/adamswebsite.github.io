// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://adamswebsite.github.io',
  integrations: [tailwind(), react(), vue(), svelte()]
});