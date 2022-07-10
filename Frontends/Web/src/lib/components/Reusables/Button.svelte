<div class="button" on:click>
    <slot/>
</div>

<style lang='postcss'>
    .button {
        @apply bg-color-app-color;
        @apply py-[0.6vh] px-[1.2vh] md:py-[0.6vw] md:px-[1.2vw];
        @apply rounded-[0.9vh] md:rounded-[0.9vw] cursor-pointer;
        @apply text-black;
        @apply hover:bg-color-hover-app-color;
    }
</style>