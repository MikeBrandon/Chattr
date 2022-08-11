<script lang="ts">
	import GoogleLogo from '$lib/icons/GoogleLogo.svelte';
	import Button from '../Reusables/Button.svelte';
	import Input from '../Reusables/Input.svelte';
	import type { LogInData, LogInResponse } from '../../../utils/types';
	import { logInUser } from '../../../utils/api/auth';
	import { goto } from '$app/navigation';
	import { failureToast } from '../../../utils/toastManager';

	let email = '';
	let password = '';

	const handleLogIn = async () => {
		if (email.length === 0 || password.length === 0) {
			failureToast('Email and Password are Required');
			return;
		}
		const data: LogInData = {
			email,
			password
		};
		const response: LogInResponse = await logInUser(data);
		response && response.auth_token && localStorage.setItem('auth_token', response.auth_token);
		goto('/app');
	};
</script>

<div class="sign-up">
	<div class="inputs">
		<div class="input-wrapper">
			<div class="label">Email</div>
			<Input bind:value={email} email />
		</div>
		<div class="input-wrapper">
			<div class="label">Password</div>
			<Input
				bind:value={password}
				password
				placeholder="Password length must be atleast 8 characters"
			/>
		</div>
	</div>
	<div class="gap" />
	<div class="buttons">
		<Button on:click={handleLogIn}>Log In</Button>
		<Button dark>
			<div class="google">
				<div class="text">Sign In with</div>
				<div class="logo">
					<GoogleLogo />
				</div>
			</div>
		</Button>
	</div>
	<div class="gap" />
	<div
		class="extra"
		on:click={() => {
			goto('/signup');
		}}
	>
		New here? Create an account
	</div>
	<div class="gap" />
	<div
		class="extra"
		on:click={() => {
			goto('/password-reset');
		}}
	>
		Forgot Password?
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

	.logo {
		@apply w-[1.11vh] h-[1.11vh] md:w-[1.11vw] md:h-[1.11vw];
	}

	.google {
		@apply flex items-center justify-center gap-[0.56vh] md:gap-[0.56vw];
	}

	.extra {
		@apply w-full text-center text-[1.25vh] md:text-[1.1vw] text-color-app-color cursor-pointer hover:text-white;
	}
</style>
