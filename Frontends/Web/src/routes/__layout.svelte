<script>
    import { SvelteToast } from '@zerodevx/svelte-toast';

    const options = {
        pausable: true
    }
</script>

<main>
    <SvelteToast {options} />
    <slot />
</main>

<style windi:preflights:global windi:safelist:global>
</style>
