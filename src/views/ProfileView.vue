<script setup>
import { useRoute } from "vue-router";
import { User } from "../classes/User.js";
import MenuBar from "../components/MenuBar/MenuBar.vue";
import { SignOut } from "../scripts/auth";
import { getCurrentUser, getUserFromUsername } from "../scripts/auth.js";
import { query, where, orderBy, getDocs } from "firebase/firestore";
import { postsRef } from "../scripts/firebase";
import { Follow, unFollow, isFollowing } from "../classes/User.js";

import { ref, watch } from "vue";

import PostView from "./PostView.vue";

let route = useRoute();

let user = ref(await getUserFromUsername(route.params.username));
let currentUser = ref(await getCurrentUser());
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
	<div>
		<h1 id="heading" class="text-4xl"><b>Profile</b></h1>
		<hr style="width: 15%; text-align: left; margin-left: 0; color: gray" />
	</div>
	<!--Personal profile page-->
	<div v-if="user.username === currentUser.username">
		<div>
			<h4>Username: {{ user.username }}</h4>
			<h4>Email address: {{ user.email }}</h4>
			<h4>Following: {{ user.following.length }}</h4>
			<h4>Followers: {{ user.followers.length }}</h4>
			<button @click="SignOut()" class="button">
				SignOut
			</button>
		</div>
	</div>
	<!--Another user's profile page-->
	<div v-else>
		<h4>Username: {{ user.username }}</h4>
		<h4>Following: {{ user.following.length }}</h4>
		<h4>Followers: {{ user.followers.length }}</h4>
		<div v-if="isFollowing(user)">
			<button @click="unFollow(user)" class="button">
				Following
			</button>
		</div>
		<div v-else>
			<button @click="Follow(user)" class="button">
				Follow
			</button>
		</div>
	</div>
	<PostView :posts="posts" :key="posts" />
</template>
