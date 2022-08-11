<script lang='ts'>
    export let value = '';
    export let placeholder = '';

    export let email = false;
    export let password = false;
</script>

{#if email}
    <input type="email" bind:value {placeholder}>
{:else if password}
    <input type="password" bind:value {placeholder}>
{:else}
    <input type="text" bind:value {placeholder}>
{/if}

<style lang='postcss'>
    input {
        @apply bg-color-app-background-3;
        @apply w-full;
        @apply px-[clamp(8px,1vw,1vw)] py-[clamp(8px,0.5vw,0.5vw)];
        @apply appearance-none outline-none;
        @apply text-[1.25vh] md:text-[1.1vw] text-color-app-color;
        @apply rounded-[1.1vh] md:rounded-[1.1vw];
    }
</style>