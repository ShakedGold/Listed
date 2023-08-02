<template>
	<MenuBar />
	<div class="flex flex-col gap-4 p-4 items-center">
		<div class="flex flex-col gap-2">
			<h2 class="text-4xl"><b>Login</b></h2>
			<hr />
		</div>
		<div>
			<input
				class="rounded-lg bg-white border border-gray-400 outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
				v-model="username" type="text" placeholder="Username" />
			<br />
			<input
				class="rounded-lg bg-white border border-gray-400 outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
				v-model="password" type="password" placeholder="Password" />
		</div>
		<div class="flex gap-2">
			<button class="button" @click="() => {
				Login(username, password).then(() => {
					router.push(requestedPath || '/');
				});
			}
				">
				Login
			</button>
			<button class="button" @click="() => {
				router.push('/signup');
			}
				">
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

let username = ref("");
let password = ref("");
</script>
