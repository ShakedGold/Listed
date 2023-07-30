<script setup>
import { ref } from "vue";
import { getCurrentUserOrNew } from "../../scripts/auth";
import ActionBar from "./ActionBar/ActionBar.vue";
import Profile from "./Profile.vue";
import Search from "./Search.vue";

let user = ref(await getCurrentUserOrNew());
</script>

<template>
	<div id="menubar" class="flex justify-center align-middle px-2 py-4">
		<Profile :user="user" />
		<Search />
		<ActionBar />
	</div>
	<hr />
</template>

<style>
#menubar * {
	/* border radius */
	border-radius: 0.5rem;

	/* height variable for interactables */
	--interactable-height: 2.8rem;
}
</style>
