<script lang='ts'>
    import GoogleLogo from "$lib/icons/GoogleLogo.svelte";
    import Button from "../Reusables/Button.svelte";
    import Input from "../Reusables/Input.svelte";

    let username = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
</script>

<div class="sign-up">
    <div class="inputs">
        <div class="input-wrapper">
            <div class="label">
                Username
            </div>
            <Input bind:value={username}/>
        </div>
        <div class="input-wrapper">
            <div class="label">
                Email
            </div>
            <Input bind:value={email}/>
        </div>
        <div class="input-wrapper">
            <div class="label">
                Password
            </div>
            <Input bind:value={password}/>
        </div>
        <div class="input-wrapper">
            <div class="label">
                Confirm Password
            </div>
            <Input bind:value={confirmPassword}/>
        </div>
    </div>
    <div class="buttons">
        <Button>
            Sign Up
        </Button>
        <Button dark>
            <div class="google">
                <div class="text">
                    Sign In with
                </div>
                <div class="logo">
                    <GoogleLogo />
                </div>
            </div>
        </Button>
    </div>
</div>

<style lang='postcss'>
    .sign-up {
        @apply bg-color-app-background-2;
        @apply p-[16px] md:p-[1.67vw];
        @apply rounded-[1.1vh] md:rounded-[1.1vw];
        @apply m-auto;
        @apply transform -translate-y-[8vw] md:-translate-y-[8vh];
    }

    .input-wrapper {
        @apply text-white text-[1.25vh] md:text-[1.1vw];
        @apply flex flex-col gap-[clamp(12px,0.83vw,0.83vw)];
        @apply w-[31.59vh] md:w-[31.59vw];
    }

    .inputs {
        @apply flex flex-col gap-[clamp(12px,1.11vw,1.11vw)];
    }

    .hcaptcha {
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
</style>