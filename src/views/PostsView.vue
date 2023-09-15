<script setup>
import Post from '../components/Post/Post.vue';
import SortBy from '../components/SortBy.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const props = defineProps({
	getPosts: {
		type: Function,
		required: true,
	},
});
const posts = ref(await props.getPosts({ By: 'Hot', Of: 'Week' }));
const sortBy = ref({ By: 'Hot', Of: 'Week' });
const sortChanged = async (sort) => {
	sortBy.value = sort;
	posts.value = await props.getPosts(sortBy.value);
};

watch(route, async () => {
	posts.value = await props.getPosts(sortBy.value);
});
</script>

<template>
  <SortBy @sort-changed="sortChanged" />
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
