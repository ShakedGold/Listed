<script setup>
import { getCurrentUserOrNew } from "@/services/auth.js";

import Body from "./Body/Body.vue";
import Sidebar from "./Sidebar/Sidebar.vue";

import { ref } from "vue";
import { Post } from "../../classes/Post";

const props = defineProps({
	post: {
		type: Post,
		required: true,
	},
});

let user = ref(await getCurrentUserOrNew());
</script>

<template>
	<div class="flex border-2 border-black rounded-md shadow-2xl mb-10">
		<Sidebar :user="user" :post="post" />

		<Body :post="post" />
	</div>
</template>
