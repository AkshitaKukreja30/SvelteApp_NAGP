<script>
	import { store, getUserCredentials } from "../Authenticate";

	let userName = "";
	let password = "";
	let error = "";
	let isLoginSuccessful = false;

	async function login() {
		isLoginSuccessful = await getUserCredentials(userName, password);

		if (isLoginSuccessful) {
			console.log(userName);
			$store = isLoginSuccessful;
			if (error) error = "";
		} else {
			error = "Incorrect username and password.";
			console.log("Incorrect username and password.");
		}
	}
</script>

<div class="row justify-content-center align-items-center vh-100">
	<div class="col-md-6">
		<div class="card">
			<div class="card-body">
				<form on:submit|preventDefault={login} class="flex mx-auto">
					<div class="mb-3">
						<label for="username" class="form-label">Username</label
						>
						<input
							type="text"
							class="form-control"
							id="username"
							bind:value={userName}
						/>
					</div>

					<div class="mb-3">
						<label for="password" class="form-label">Password</label
						>
						<input
							type="password"
							class="form-control"
							id="password"
							bind:value={password}
						/>
					</div>

					<div class="text-center">
						<button type="submit" class="btn btn-primary"
							>Login</button
						>
					</div>
					<div id="error_message" class="text-danger">
						<small>{error}</small>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
