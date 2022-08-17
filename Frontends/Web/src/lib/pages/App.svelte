<script>
	import AppFooter from '$lib/components/App/AppFooter.svelte';
	import { AUTH_TOKEN } from '../../utils/stores/auth';
	import '../../styles/custom.css';
	import Button from '$lib/components/Reusables/Button.svelte';
	import { scale, fly } from 'svelte/transition';

	let friends = [
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		},
		{
			name: 'John'
		}
	];

	let showSettings = false;
	let showChats = true;
</script>

<div class="body">
	{#if !showChats}
		<div class="chats-button" transition:fly={{ x: -200, duration: 200 }}>
			<Button
				on:click={() => {
					showChats = true;
                    showSettings = false;
				}}
			>
				Chats
			</Button>
		</div>
	{/if}
	{#if showChats}
		<div class="chats-bg" transition:fly={{ x: -200, duration: 200 }}>
			<div class="chats">
				{#each friends as friend}
					<div
						class="friend-button"
						on:click={() => {
							showChats = false;
						}}
					>
						<div class="image" />
						<div class="name">
							{friend.name}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
	<div class="main">
		{#if showSettings}
			<div class="settings" transition:scale>
				<div class="close">
					<Button
						on:click={() => {
							showSettings = false;
						}}
					>
						X
					</Button>
				</div>
				Settings
			</div>
		{/if}
		<div class="chat-messages">main</div>
	</div>
</div>
<AppFooter
	on:settings={() => {
		showSettings = true;
        showChats = false;
	}}
	on:stories
/>

<style lang="postcss">
	.body {
		@apply flex-grow;
		@apply flex;
		@apply text-[1.25vh] md:text-[1.1vw];
		@apply relative;
	}

	.chats {
		@apply w-[20vh] md:w-[20vw] max-h-[82vh] md:max-h-[75vh];
		@apply overflow-y-scroll;
	}

	.chats-bg {
		@apply bg-color-app-background-2;
		@apply pt-[1.5vh] md:pt-[1.1vw];
		@apply px-[1.5vh] md:px-[1.1vw];
		@apply bottom-0;
		@apply overflow-hidden;
	}

	.main {
		@apply p-[1.5vh] md:p-[1.1vw];
		@apply flex-grow;
		@apply relative;
	}

	.friend-button {
		@apply flex gap-[clamp(8px,1.07vw,1.07vw)] items-center;
		@apply p-[clamp(8px,1.07vw,1.07vw)];
		@apply rounded-[1vw];
		@apply text-color-app-color;
		@apply w-[95%];
		@apply hover:bg-color-app-background-3 cursor-pointer;
	}

	.image {
		@apply h-[4vh] w-[4vh] md:h-[4vw] md:w-[4vw];
		@apply bg-white;
		@apply rounded-full;
	}

	.settings {
		@apply h-[95%] w-[95%] z-10;
		@apply absolute;
		@apply bg-color-app-background-2;
		@apply p-[1.5vh] md:p-[1.1vw];
	}

	.close {
		@apply absolute right-[1.5vh] top-[1.1vw];
	}

	.chats-button {
		@apply absolute bottom-[2vw] left-[2vw] z-30;
	}

	/* width */
	::-webkit-scrollbar {
		@apply w-2;
	}

	/* Track */
	::-webkit-scrollbar-track {
		@apply rounded-[39px];
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		@apply bg-color-app-color bg-opacity-20 rounded-[39px];
	}
</style>
