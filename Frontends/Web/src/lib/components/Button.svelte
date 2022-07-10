<script>
    export let text = "";
</script>

<div class="button" on:click>
    {text}
</div>

<style lang="postcss">
    .button {
        @apply bg-[#FF914D] text-black text-center;
        @apply py-2 px-8 mx-auto rounded-[16px];
        @apply transition-all duration-300 cursor-pointer;
    }
    .button:hover {
        @apply bg-[#FFAC78] text-white;
    }
</style>