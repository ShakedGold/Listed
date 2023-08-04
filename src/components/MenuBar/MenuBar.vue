<script setup>
import { ref } from "vue";
import { getCurrentUser } from "../../scripts/auth";
import ActionBar from "./ActionBar/ActionBar.vue";
import Profile from "./Profile.vue";
import Search from "./Search.vue";

let user = ref(await getCurrentUser());
</script>

<template>
	<div id="menubar" class="flex px-2 py-4 gap-2">
		<Profile :user="user" />
		<Search />
		<ActionBar />
		<Profile :user="user" />
	</div>
</template>
