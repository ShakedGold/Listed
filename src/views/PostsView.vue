<script setup>
import Post from "../components/Post/Post.vue";

let props = defineProps({
	posts: Object,
});
</script>

<template>
	<div
		class="flex flex-col gap-24 justify-center align-middle items-center mt-4"
		v-if="posts.length !== 0"
	>
		<Post v-for="post in posts" :postObj="post" :key="posts" />
	</div>
	<div v-else>
		<h1>So Empty...</h1>
	</div>
</template>
