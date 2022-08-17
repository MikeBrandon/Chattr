<script>
	import SettingsIcon from '$lib/icons/SettingsIcon.svelte';
	import { createEventDispatcher } from 'svelte';
	import Button from '../Reusables/Button.svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="footer">
	<div class="friend-button">
		<div class="image" />
		<div class="name">MrScorpioXX</div>
	</div>

	<div class="about">In Code We Trust and In God I Believe</div>

	<div class="others">
		<Button
			on:click={() => {
				dispatch('stories');
			}}>Stories</Button
		>
		<div
			class="settings-icon"
			on:click={() => {
				dispatch('settings');
			}}
		>
			<SettingsIcon />
		</div>
	</div>
</div>

<style lang="postcss">
	.footer {
		@apply h-[6vh] md:h-[6vw] z-20;
		@apply p-[1.5vh] md:p-[1.1vw];
		@apply bg-gradient-to-t from-color-app-background-2 to-color-app-background-3;
		@apply flex justify-between items-center;
		@apply text-color-app-color;
		@apply relative;
        @apply text-[1.25vh] md:text-[1.1vw];
	}

	.friend-button {
		@apply flex gap-[clamp(8px,1.07vw,1.07vw)] items-center;
		@apply p-[clamp(8px,1.07vw,1.07vw)];
		@apply rounded-[1vw];
	}

	.image {
		@apply h-[3vh] w-[3vh] md:h-[3vw] md:w-[3vw];
		@apply bg-white;
		@apply rounded-full;
	}

	.about {
		@apply absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%];
		@apply md:max-w-[10vw] text-center;
        @apply opacity-0 md:opacity-100;
	}

	.settings-icon {
		@apply h-[3vh] w-[3vh] md:h-[3vw] md:w-[3vw];
		@apply cursor-pointer;
	}

	.others {
		@apply flex gap-[clamp(8px,1.07vw,1.07vw)] items-center;
	}
</style>
