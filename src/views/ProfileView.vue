<script setup>
import { useRoute } from "vue-router";
import { User } from "../classes/User.js";
import MenuBar from "../components/MenuBar/MenuBar.vue";
import { SignOut } from "../scripts/auth";
import { getCurrentUser, getUserFromUsername } from "../scripts/auth.js";

import { ref, watch } from "vue";

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
</script>

<template>
	<MenuBar />
	<div>
		<h1 id="heading" class="text-accent"><b>Profile</b></h1>
		<hr style="width: 15%; text-align: left; margin-left: 0; color: gray" />
	</div>
	<div>
		<h4>Username: {{ user.username }}</h4>
		<h4>Email address: {{ user.email }}</h4>
		<h4>Following: {{ user.following }}</h4>
		<h4>friends:</h4>
	</div>
	<button v-if="user.username === currentUser.username" @click="SignOut()">
		SignOut
	</button>
</template>
