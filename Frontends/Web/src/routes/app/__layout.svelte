<script>
	import { goto } from '$app/navigation';
	import { AUTH_TOKEN } from '../../utils/stores/auth';

	if ($AUTH_TOKEN === '') {
		goto('signup');
	}
</script>
