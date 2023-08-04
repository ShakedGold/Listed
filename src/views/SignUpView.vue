<template>
	<MenuBar />

	<div class="flex flex-col gap-4 p-4 items-center">
		<div class="flex flex-col gap-2">
			<h2 class="text-4xl"><b>SignUp</b></h2>
			<hr />
		</div>
		<div>
			<input
				class="rounded-lg bg-white border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
				v-model="email"
				type="email"
				id="email"
				placeholder="Email"
			/>
			<br />
			<input
				class="rounded-lg bg-white border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
				v-model="username"
				type="text"
				id="username"
				placeholder="Username"
			/>
			<br />
			<p v-if="password.length != 0" class="text-sm text-center">
				Minimum eight characters, at least one uppercase letter,<br />
				one lowercase letter, one number and one special character
			</p>
			<input
				class="rounded-lg bg-white border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
				v-model="password"
				type="password"
				id="password"
				placeholder="Password"
			/>
		</div>
		<div class="flex gap-2">
			<button
				class="button"
				@click="
					() => {
						SignUp(email, password, username).then(() => {
							router.push('/');
						});
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
import { SignUp } from "@/scripts/auth.js";
import { ref } from "vue";
import router from "../router";

let username = ref("");
let password = ref("");
let email = ref("");
</script>
