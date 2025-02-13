import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-auto';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			out: 'build',
		}),
	},
	preprocess: sveltePreprocess(),
};
export default config;