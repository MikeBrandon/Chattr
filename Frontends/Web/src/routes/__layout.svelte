<script>
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import NavBar from '$lib/components/NavBar/index.svelte';

    const options = {
        pausable: true
    }
</script>

<svelte:head>
    <title>
        Chatrr
    </title>
</svelte:head>

<main>
    <SvelteToast {options} />
    <NavBar />
    <div class="slot">
        <slot />
    </div>
</main>

<style windi:preflights:global windi:safelist:global lang='postcss'>
    main {
        @apply h-screen bg-color-app-background-1;
        @apply flex flex-col;
    }

    .slot {
        @apply flex-grow;
    }
</style>
