
<script>
	import LoginComponent from '../Components/Login.svelte';
	import SuccessfulLoginComponent from '../Components/successfulLogin.svelte';

	import { store } from '../Authenticate';
</script>

<body>
<div class="container">

{#if $store != null }
<SuccessfulLoginComponent></SuccessfulLoginComponent>
{:else }
	<LoginComponent />
{/if}

</div>
</body>