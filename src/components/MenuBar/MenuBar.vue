<script setup>
import { ref } from "vue";
import { getCurrentUser } from "../../scripts/auth";
import ActionBar from "./ActionBar/ActionBar.vue";
import Profile from "./Profile.vue";
import Search from "./Search.vue";

let user = ref(await getCurrentUser());
</script>

<template>
	<div id="menubar" class="flex px-2 py-4 gap-4">
		<router-link to="/"><img class="object-contain w-[50px] h-[50px] mr-3 mb-3 mt-[20%]"
				src="../../assets/logo/png/only-logo-no-background.png" alt="" /></router-link>
		<Search />
		<ActionBar />
		<Profile :user="user" />
	</div>
</template>
