<script lang='ts'>
    import MenuIcon from "$icons/MenuIcon.svelte";
    import type { NavLink } from "src/utils/types";
    import { slide } from 'svelte/transition';
    import { page } from '$app/stores';

    let droppedDown: boolean = false;
    export let links: NavLink[] = [];
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
                {#each links as link}
                    <a href={link.href} class:selected={$page.url.pathname === link.href} on:click={() => {
                        droppedDown = false;
                    }}>{link.text}</a>
                {/each}
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
        @apply flex flex-col items-center;
    }

    .dropdown > a:hover {
        @apply text-color-app-color;
    }

    .dropdown > a {
        @apply text-white cursor-pointer mb-1;
    }

    .icon {
        @apply mx-auto mb-1;
    }

    a.selected {
        @apply text-color-app-color;
    }
</style>