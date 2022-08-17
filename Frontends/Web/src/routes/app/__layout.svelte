<script>
	import { AUTH_TOKEN } from '../../utils/stores/auth';
</script>

{#if $AUTH_TOKEN !== ''}
	<div class="app login">Please Log In to use the App</div>
{:else}
	<div class="app">
		<slot />
	</div>
{/if}

<style lang="postcss">
	.app {
		@apply text-white flex flex-col;
		@apply h-full;
	}

	.login {
		@apply flex-row items-center justify-center;
	}
</style>
