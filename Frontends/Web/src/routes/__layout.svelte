<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import NavBar from '$lib/components/NavBar/index.svelte';
	import { browser } from '$app/env';
    import { AUTH_TOKEN } from '../utils/stores/auth';

	if (browser) {
		$AUTH_TOKEN = localStorage.getItem('auth_token') || '';
	}

	const options = {
		pausable: true
	};
</script>

<svelte:head>
	<title>Chatrr</title>
</svelte:head>

<main>
	<SvelteToast {options} />
	<NavBar />
	<div class="slot">
		<slot />
	</div>
</main>

<style windi:preflights:global windi:safelist:global lang="postcss">
	main {
		@apply h-screen bg-color-app-background-1;
		@apply flex flex-col;
	}

	.slot {
		@apply flex-grow;
	}
</style>
