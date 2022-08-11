<script context="module">
	export function load({ url }) {
		const token = url.searchParams.get('token') || '';
		return {
			props: {
				token
			}
		};
	}
</script>

<script lang="ts">
	import { redirectResetPassword } from '../utils/api/auth';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let token: string;

	onMount(async () => {
		((await redirectResetPassword(token)) && goto('/password-reset/check-email')) || goto('/');
	});
</script>
