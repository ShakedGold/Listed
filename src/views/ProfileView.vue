<script setup>
import { useRoute } from "vue-router";
import MenuBar from "../components/MenuBar/MenuBar.vue";
import { SignOut } from "../scripts/auth";
import { getCurrentUser, getUserFromUsername } from "../scripts/auth.js";
import { query, where, orderBy, getDocs } from "firebase/firestore";
import { postsRef } from "../scripts/firebase";
import ConfirmModal from '../components/Modal/ConfirmModal.vue';

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

let open = ref(false);
let selection = ref("");
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
			<h4>Following: <div @click="() => {open = true; selection='following'}">{{ user.following.length }}</div></h4>
			<h4>Followers: <div @click="() => {open = true; selection='followers'}">{{ user.followers.length }}</div></h4>
			<button @click="SignOut()" class="button">
				SignOut
			</button>
		</div>
	</div>
	<!--Another user's profile page-->
	<div v-else>
		<h4>Username: {{ user.username }}</h4>
		<h4>Following: <div @click="() => {open = true; selection='following'}">{{ user.following.length }}</div></h4>
		<h4>Followers: <div @click="() => {open = true; selection='followers'}">{{ user.followers.length }}</div></h4>
		<div v-if="currentUser.IsFollowing(user)">
			<button @click="currentUser.UnFollow(user)" class="button">
				Following
			</button>
		</div>
		<div v-else>
			<button @click="currentUser.Follow(user)" class="button">
				Follow
			</button>
		</div>
	</div>
	<PostView :posts="posts" :key="posts" />

	<ConfirmModal :open="open" :on-cancel="() => open=false" :show-icons="false">
	<template #header>
	      <h1 class="text-2xl" v-if="selection=='following'">Following</h1>
		  <h1 class="text-2xl" v-else>Followers</h1>
		  <input type="text" class="border-2 border-black shadow-lg">
		  <button class="button">search</button>
	</template>
	<template #body>
	<div class="flex flex-col" v-if="selection=='following'">
        <span class="flex gap-1" v-for="follow in user.following">
          <label>{{ follow }}</label>
        </span>
    </div>
	<div class="flex flex-col" v-else>
        <span class="flex gap-1" v-for="follower in user.followers">
          <label>{{ follower }}</label>
        </span>
    </div>
	</template>
	<template #cancel>
	      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Close</button>
	</template>
	</ConfirmModal>
</template>
