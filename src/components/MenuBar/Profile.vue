<script setup>
import router from "../../router/index.js";
let props = defineProps(["user"]);

function goToProfile() {
	router.push({ name: "User", params: { username: props.user.username } });
}
</script>

<template>
	<div class="flex">
		<router-link to="/"
			><img
				class="object-contain w-[50px] h-[50px] mr-3 mb-3 mt-[20%]"
				src="../../assets/logo/png/only-logo-no-background.png"
				alt=""
		/></router-link>
		<p
			class="m-auto select-none cursor-pointer hover:text-blue-900"
			@click="goToProfile"
		>
			{{ user.username }}
		</p>
	</div>
</template>
