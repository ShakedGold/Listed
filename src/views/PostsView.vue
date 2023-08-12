<script setup>
import Post from '../components/Post/Post.vue';

defineProps({
	posts: {
		type: Array,
		required: true,
	},
});
</script>

<template>
  <div
    v-if="posts.length !== 0"
    class="flex flex-col gap-24 justify-center align-middle items-center mt-4"
  >
    <Post
      v-for="post in posts"
      :key="post"
      :post="post"
    />
  </div>
  <div
    v-else
    class="grid place-items-center"
  >
    <h1 class="text-4xl">
      So Empty...
    </h1>
  </div>
</template>
