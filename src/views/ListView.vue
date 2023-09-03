<script setup>
import { postConverter } from '@/classes/Post';

import { postsRef } from '@/services/firebase';
import { getDocs, orderBy, query, where } from 'firebase/firestore';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import MenuBar from '@/components/MenuBar/MenuBar.vue';
import PostsView from './PostsView.vue';

const route = useRoute();

//array of all the posts
const posts = ref(await getPosts());

async function getPosts() {
	const q = query(
		postsRef,
		orderBy('votes', 'desc'),
		where('lists', 'array-contains', route.params.name)
	).withConverter(postConverter);
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => doc.data());
}

watch(route, async () => {
	posts.value = await getPosts();
});
</script>

<template>
  <MenuBar />
  <PostsView :posts="posts" />
</template>
