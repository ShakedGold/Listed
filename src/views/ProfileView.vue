<script setup>
import { getDocs, orderBy, query, where } from 'firebase/firestore';
import { ref, watch, toRaw } from 'vue';
import { useRoute } from 'vue-router';
import { postConverter } from '../classes/Post';
import MenuBar from '../components/MenuBar/MenuBar.vue';
import ProfileDetails from '../components/Profile/ProfileDetails.vue';
import { getUserFromUsername } from '../services/auth';
import { postsRef } from '../services/firebase';

import PostsView from './PostsView.vue';

const route = useRoute();
const user = ref(await getUserFromUsername(route.params.username));

async function getPosts(sortBy) {
	const sort = toRaw(sortBy);
	const translation = {
		Hot: 'votes',
		New: 'created',
		Top: 'votes',
	};
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
		const q = query(
			postsRef,
			where('username', '==', user.value.username),
			where('created', '>', timeRangeDate[sort.Of]),
		).withConverter(postConverter);
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.sort((a, b) => b.data().votes - a.data().votes).map((doc) => doc.data());
	}
	const q = query(
		postsRef,
		where('username', '==', user.value.username),
		orderBy(translation[sort.By], 'desc')
	).withConverter(postConverter);
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => doc.data());
}

/*
watch for params change, this is important for when a user clicks on a different,
user's profile and then his own so we need to update the user object
*/
watch(route, async (newRoute) => {
	user.value = await getUserFromUsername(newRoute.params.username);
});

</script>

<template>
  <MenuBar />
  <div class="relative">
    <ProfileDetails
      class="mr-4"
      :user="user"
    />
    <PostsView
      :key="getPosts({By: 'Hot', Of: 'Week'})"
      :get-posts="getPosts"
    />
  </div>
</template>
