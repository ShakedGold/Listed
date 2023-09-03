<script setup>
import { postsRef } from '@/services/firebase';
import { getDocs, orderBy, query, where } from 'firebase/firestore';

import { ref, toRaw } from 'vue';

import MenuBar from '@/components/MenuBar/MenuBar.vue';
import { postConverter } from '../classes/Post';
import PostsView from './PostsView.vue';

//array of all the posts
const posts = ref(await getPosts({ By: 'Hot', Of: 'Week' }));
async function getPosts(sortBy) {
	const sort = toRaw(sortBy);
	const translation = {
		Hot: 'votes',
		New: 'created',
		Top: 'votes',
	};
	let q = undefined;
	if(sort.By === 'Top'){
		const MILLISECOND = 1;
		const SECOND = 1000 * MILLISECOND;
		const MINUTE = 60 * SECOND;
		const HOUR = 60 * MINUTE;
		const DAY = 24 * HOUR;
		const WEEK = 7 * DAY;
		const MONTH = 30 * DAY;
		const YEAR = 365 * DAY;
		const timeRangeDate = {
			Hour: new Date(Date.now() - HOUR),
			Day: new Date(Date.now() - DAY),
			Week: new Date(Date.now() - WEEK),
			Month: new Date(Date.now() - MONTH),
			Year: new Date(Date.now() - YEAR),
			'All Time': new Date(0),
		};
		q = query(postsRef, where('created', '>', timeRangeDate[sort.Of])).withConverter(postConverter);
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.sort((a, b) => b.data().votes - a.data().votes).map((doc) => doc.data());
	}
	q = query(postsRef, orderBy(translation[sort.By], 'desc')).withConverter(postConverter);
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => doc.data());
}

async function sortChanged(sortBy) {
	posts.value = await getPosts(sortBy);
}
</script>

<template>
  <MenuBar />
  <PostsView
    :posts="posts"
    @sort-changed="sortChanged"
  />
</template>
