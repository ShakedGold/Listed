<script setup>
import MenuBar from "../components/MenuBar/MenuBar.vue";
import PostsView from "./PostsView.vue";
import ProfileDetails from "../components/Profile/ProfileDetails.vue";

import { useRoute } from "vue-router";
import { ref, watch } from "vue";

import { query, where, orderBy, getDocs } from "firebase/firestore";

import { postsRef } from "../scripts/firebase";
import { getUserFromUsername } from "../scripts/auth.js";

let route = useRoute();
let user = ref(await getUserFromUsername(route.params.username));
let posts = ref(await getPosts());

async function getPosts() {
	let q = query(postsRef, where("username", "==", user.value.username), orderBy("votes", "desc"));
	let querySnapshot = await getDocs(q);
	return querySnapshot.docs.map(doc => doc.data());
}

/*
watch for params change, this is important for when a user clicks on a different, 
user's profile and then his own so we need to update the user object
*/
watch(route, async (newRoute) => {
	user.value = await getUserFromUsername(newRoute.params.username);
	posts.value = await getPosts();
});
</script>

<template>
	<MenuBar />
	<ProfileDetails :user="user" />
	<PostsView :posts="posts" :key="posts" />
</template>
