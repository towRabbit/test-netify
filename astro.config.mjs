import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';
import lit from '@astrojs/lit';
// import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  integrations: [ svelte(), tailwind()],
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
  })
});