<script lang="ts">
	import Button from '../Reusables/Button.svelte';
	import Input from '../Reusables/Input.svelte';
	import { goto } from '$app/navigation';
	import { AUTH_TOKEN } from '../../../utils/stores/auth';
	import { resetPassword } from '../../../utils/api/auth';

	$AUTH_TOKEN.length > 0 && goto('/app');

	const goHome = async () => {
		goto('/')
	};
</script>

<div class="sign-up">
	<div class="inputs">
		<div class="input-wrapper">
			<div class="label">Please Check Your Email for a further Password Reset Instructions.</div>
		</div>
	</div>
	<div class="gap" />
	<div class="buttons">
		<Button on:click={goHome}>Go to HomePage</Button>
	</div>
</div>

<style lang="postcss">
	.sign-up {
		@apply bg-color-app-background-2;
		@apply p-[16px] md:p-[1.67vw];
		@apply rounded-[1.1vh] md:rounded-[1.1vw];
		@apply m-auto;
	}

	.input-wrapper {
		@apply text-white text-[1.25vh] md:text-[1.1vw];
		@apply flex flex-col gap-[clamp(12px,0.83vw,0.83vw)];
		@apply w-[31.59vh] md:w-[31.59vw];
	}

	.inputs {
		@apply flex flex-col gap-[clamp(12px,1.11vw,1.11vw)];
	}

	.gap {
		@apply my-[2vh] md:my-[1.67vw];
	}

	.buttons {
		@apply flex items-center gap-[16px] md:gap-[3.61vw];
		@apply min-h-max;
	}
</style>
