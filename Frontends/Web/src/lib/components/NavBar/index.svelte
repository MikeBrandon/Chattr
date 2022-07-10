<script lang='ts'>
    import ChatrrLogo from "$lib/icons/ChatrrLogo.svelte";
    import type { NavLink } from "src/utils/types";
    import Button from "../Reusables/Button.svelte";
    import MenuDropdown from "./MenuDropdown.svelte";
    import { page } from '$app/stores';

    let links: NavLink[] = [
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
</script>

<div class="nav-bar">
    <a href="/" class='logo-wrapper'>
        <div class="logo">
            <ChatrrLogo />
        </div>
    </a>
    <div class="link-menu">
        <MenuDropdown {links}/>
    </div>
    <div class="links">
        {#each links as link}
            <a href={link.href} class="link" class:selected={$page.url.pathname === link.href}>
                {link.text}
            </a>
        {/each}
        <a href="/app">
            <Button>
                App
            </Button>
        </a>
    </div>
</div>

<style lang='postcss'>
    .nav-bar {
        @apply h-[6vh] md:h-[6vw];
        @apply p-[1.5vh] md:p-[1.1vw];
        @apply bg-gradient-to-t from-[#191A1E] to-[#262930];
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