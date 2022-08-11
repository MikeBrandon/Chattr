<script>
    export let dark = false;
</script>

<div class="button" class:dark on:click>
    <slot/>
</div>

<style lang='postcss'>
    .button {
        @apply bg-color-app-color;
        @apply w-full h-full;
        @apply py-[1vh] px-[1.2vh] md:py-[0.75vw] md:px-[1.2vw];
        @apply rounded-[1.2vh] md:rounded-[0.9vw] cursor-pointer;
        @apply text-black text-center text-[1.25vh] md:text-[1.1vw];
        @apply hover:bg-color-hover-app-color;
    }

    .dark {
        @apply bg-color-app-background-3;
        @apply hover:bg-color-app-background-4;
        @apply text-white;
    }
</style>