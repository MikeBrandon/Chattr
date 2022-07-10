<script lang='ts'>
    import MenuIcon from "$icons/MenuIcon.svelte";
    import { slide } from 'svelte/transition';

    let droppedDown: boolean=false;

</script>

<div class="menu-dropdown">
    <div class="icon" on:click={()=> {
            droppedDown = !droppedDown;
    }}>
        <MenuIcon />
    </div>
    {#if droppedDown}
        <div class="dropdown-holder">
            <div class="dropdown" transition:slide>
                <div>Home</div>
                <div>SignUp</div>
                <div>LogIn</div>
                <div>Docs</div>
            </div>
        </div>
    {/if}
    
</div>

<style lang="postcss">
    .menu-dropdown {
        @apply flex flex-col mx-auto cursor-pointer;
    }

    .dropdown-holder {
        @apply relative flex flex-col items-center;
    }

    .dropdown {
        @apply bg-[#262930] rounded-[16px] p-1 w-[30vw] text-center z-10 absolute;
    }
    .dropdown>div:hover {
        @apply text-[#FF914D];
    }
    .dropdown>div {
        @apply text-white cursor-pointer mb-1;
    }

    .icon {
        @apply mx-auto mb-1;
    }
</style>