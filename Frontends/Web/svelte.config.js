import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$stores: path.resolve('./src/stores'),
					$styles: path.resolve('./src/styles'),
					$utils: path.resolve('./src/utils'),
					$components: path.resolve('./src/lib/components'),
					$pages: path.resolve('./src/lib/pages'),
					$icons: path.resolve('./src/lib/icons')
				}
			}
		}
	}
};

export default config;
