import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(), // Automatically select the adapter
	},
	preprocess: sveltePreprocess(),
};

export default config;
