<script lang="ts">
	import GoogleLogo from '$lib/icons/GoogleLogo.svelte';
	import { validateSignUp } from '../../../utils/validation';
	import Button from '../Reusables/Button.svelte';
	import Input from '../Reusables/Input.svelte';
	import type { RegisterResponse, SignUpData } from '../../../utils/types';
	import { registerUser } from '../../../utils/api/auth';
	import { goto } from '$app/navigation';

	let username = '';
	let email = '';
	let password = '';
	let confirmPassword = '';

	let data: {
		data: SignUpData | string;
		isValid: boolean;
	} = {
		data: '',
		isValid: false
	};

	const handleSignUp = async () => {
		data = validateSignUp({
			username,
			password,
			email,
			confirmPassword
		});
		if (!data.isValid) {
			return;
		}
		const response: RegisterResponse = await registerUser(data.data);
		localStorage.setItem('auth_token', response.auth_token);
	};
</script>

<div class="sign-up">
	<div class="inputs">
		<div class="input-wrapper">
			<div class="label">Username</div>
			<Input bind:value={username} />
		</div>
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
		<div class="input-wrapper">
			<div class="label">Confirm Password</div>
			<Input
				bind:value={confirmPassword}
				password
				placeholder="Password length must be atleast 8 characters"
			/>
		</div>
	</div>
	<div class="gap" />
	<div class="buttons">
		<Button on:click={handleSignUp}>Sign Up</Button>
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
			goto('login');
		}}
	>
		Already a user? Log in
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
