<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import NavBar from '$lib/components/NavBar/index.svelte';
	import { browser } from '$app/env';
	import { AUTH_TOKEN, updateAuth } from '../utils/stores/auth';
	import type { LogInResponse } from '../utils/types';
	import { validateToken } from '../utils/api/auth';
	import { goto } from '$app/navigation';

	let token = '';
	if (browser) {
		token = localStorage.getItem('auth_token') || '';
	}

	export const autoLogin = async () => {
		if (token.length > 0) {
			const response: LogInResponse = await validateToken(token);
			response && response.auth_token && updateAuth(response.auth_token);
			$AUTH_TOKEN && goto('/app');
		}
	};

	autoLogin();

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
