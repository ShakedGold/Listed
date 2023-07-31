<script setup>
import { useRoute } from "vue-router";
import { User } from "../classes/User.js";
import MenuBar from "../components/MenuBar/MenuBar.vue";
import { SignOut } from "../scripts/auth";
import { getCurrentUser, getUserFromUsername } from "../scripts/auth.js";
import { query, where, orderBy, getDocs } from "firebase/firestore";
import { postsRef } from "../scripts/firebase";

import { ref, watch } from "vue";

import PostView from "./PostView.vue";

let route = useRoute();

let user = ref(new User("", "", [], {}));
getUserFromUsername(route.params.username).then((userFromDB) => {
	user.value = userFromDB;
});
/*
watch for params change, this is important for when a user clicks on a different, 
user's profile and then his own so we need to update the user object
*/
watch(route, (newRoute) => {
	getUserFromUsername(newRoute.params.username).then((userFromDB) => {
		user.value = userFromDB;
	});
});

let currentUser = await getCurrentUser();
let q = query(postsRef, where("currentUser", "==", currentUser.username), orderBy("votes", "desc"));
let querySnapshot = await getDocs(q);
let posts = ref([]);
querySnapshot.forEach((doc) => {
	posts.value.push(doc.data());
});
</script>

<template>
	<MenuBar />
	<PostView :posts="posts" />
	<div>
		<div>
			<h1 id="heading" class="text-4xl"><b>Profile</b></h1>
		</div>
		<div>
			<h4>Username: {{ user.username }}</h4>
			<h4>Email address: {{ user.email }}</h4>
			<h4>Following: {{ user.following }}</h4>
			<h4>friends:</h4>
		</div>
		<button class="button" v-if="user.username === currentUser.username" @click="SignOut()">
			SignOut
		</button>
	</div>
</template>
