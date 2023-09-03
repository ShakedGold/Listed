<script setup>
import Post from '../components/Post/Post.vue';
import SortBy from '../components/SortBy.vue';

defineEmits(['sortChanged']);

defineProps({
	posts: {
		type: Array,
		required: true,
	},
});
</script>

<template>
  <SortBy @sort-changed="(sortBy) => $emit('sortChanged', sortBy)" />
  <div
    v-if="posts.length !== 0"
    :key="posts"
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
