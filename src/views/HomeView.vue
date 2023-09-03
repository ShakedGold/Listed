<script setup>
import { postsRef } from '@/services/firebase';
import { getDocs, orderBy, query } from 'firebase/firestore';

import { ref } from 'vue';

import MenuBar from '@/components/MenuBar/MenuBar.vue';
import { postConverter } from '../classes/Post';
import PostsView from './PostsView.vue';

//array of all the posts
const posts = ref(await getPosts());
async function getPosts() {
	const q = query(postsRef, orderBy('votes', 'desc')).withConverter(
		postConverter
	);
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => doc.data());
}
</script>

<template>
  <MenuBar />
  <PostsView :posts="posts" />
</template>
