<script setup>
import { ref } from "vue";
import { getCurrentUser } from "../../scripts/auth";
import ActionBar from "./ActionBar/ActionBar.vue";
import Profile from "./Profile.vue";
import Search from "./Search.vue";
import router from "../../router";

let user = ref(await getCurrentUser());
</script>

<template>
	<div id="menubar" class="flex px-2 py-4 gap-2">
		<img src="../../assets/logo/png/only-logo-no-background.png" class="object-cover w-[60px] cursor-pointer"
			alt="listed icon" @click="router.push('/')">
		<Search />
		<ActionBar />
		<Profile :user="user" />
	</div>
</template>
