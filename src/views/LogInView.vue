<template>
	<MenuBar />
	<div>
		<div>
			<h2 class="text-4xl"><b>Login</b></h2>
		</div>
		<div>
			<button @click="GoogleLogin()">Google Sign In</button>
		</div>
		<div>
			<input
				v-model="username"
				type="text"
				id="username"
				placeholder="Username"
			/>
			<br />
			<input
				v-model="password"
				type="password"
				id="password"
				placeholder="Password"
			/>
		</div>
		<div>
			<button
				@click="
					() => {
						Login(username, password).then(() => {
							router.push(requestedPath || '/');
						});
					}
				"
			>
				Login
			</button>
			<button
				@click="
					() => {
						router.push('/signup');
					}
				"
			>
				Signup
			</button>
		</div>
	</div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import { Login } from "@/scripts/auth.js";
import { ref } from "vue";
import router, { requestedPath } from "../router";
import { GoogleLogin } from "../scripts/googleauth";

let username = ref("");
let password = ref("");
</script>
