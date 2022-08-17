<script lang="ts">
	import ChatrrLogo from '$lib/icons/ChatrrLogo.svelte';
	import type { NavLink } from 'src/utils/types';
	import Button from '../Reusables/Button.svelte';
	import MenuDropdown from './MenuDropdown.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { AUTH_TOKEN, updateAuth } from '../../../utils/stores/auth';
	import { successToast } from '../../../utils/toastManager';

	let links: NavLink[];

	$: if ($AUTH_TOKEN === '') {
		links = [
			{
				text: 'Home',
				href: '/'
			},
			{
				text: 'SignUp',
				href: '/signup'
			},
			{
				text: 'LogIn',
				href: '/login'
			},
			{
				text: 'Docs',
				href: '/docs'
			}
		];
	} else {
		links = [
			{
				text: 'Home',
				href: '/'
			},
			{
				text: 'SignOut',
				href: ''
			},
			{
				text: 'Docs',
				href: '/docs'
			}
		];
	}
</script>

<div class="nav-bar">
	<a href="/" class="logo-wrapper">
		<div class="logo">
			<ChatrrLogo />
		</div>
	</a>
	<div class="link-menu">
		<MenuDropdown {links} />
	</div>
	<div class="links">
		{#each links as link}
			{#if link.text !== 'SignOut'}
				<a href={link.href} class="link" class:selected={$page.url.pathname === link.href}>
					{link.text}
				</a>
			{:else}
				<span
					class="link"
					on:click={() => {
						updateAuth();
						successToast('Signed Out');
						goto('/');
					}}
				>
					{link.text}
				</span>
			{/if}
		{/each}
		<a href="/app">
			<Button>App</Button>
		</a>
	</div>
</div>

<style lang="postcss">
	.nav-bar {
		@apply h-[6vh] md:h-[6vw];
		@apply p-[1.5vh] md:p-[1.1vw];
		@apply bg-gradient-to-t from-color-app-background-2 to-color-app-background-3;
		@apply flex justify-between items-center;
	}

	.links {
		@apply flex items-center gap-[2vw];
		@apply text-white text-[1.1vh] md:text-[1.1vw];
	}

	.link {
		@apply cursor-pointer;
		@apply hover:text-color-app-color;
	}

	.logo {
		@apply w-full h-full;
	}

	.logo-wrapper {
		@apply h-full;
	}

	.link {
		@apply hidden md:block;
	}

	.link-menu {
		@apply md:hidden;
	}

	.selected {
		@apply text-color-app-color;
	}
</style>
