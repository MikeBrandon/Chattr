<script>
	import { AUTH_TOKEN } from '../../utils/stores/auth';
</script>

{#if $AUTH_TOKEN === ''}
	Please Log In to use the App
{/if}
