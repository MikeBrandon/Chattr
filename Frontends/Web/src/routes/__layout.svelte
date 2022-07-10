<script>
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import NavBar from '$lib/components/NavBar/index.svelte';

    const options = {
        pausable: true
    }
</script>

<main>
    <SvelteToast {options} />
    <NavBar />
    <slot />
</main>

<style windi:preflights:global windi:safelist:global lang='postcss'>
    main {
        @apply h-screen bg-color-app-background;
    }
</style>
