<script setup>
import { useRoute } from "vue-router";
import { User } from "../classes/User.js";
import MenuBar from "../components/MenuBar/MenuBar.vue";
import { SignOut } from "../scripts/auth";
import { getCurrentUser, getUserFromUsername } from "../scripts/auth.js";
import { Follow } from "../classes/User.js";

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
		<h1 id="heading" class="text-4xl"><b>Profile</b></h1>
		<hr style="width: 15%; text-align: left; margin-left: 0; color: gray" />
	</div>
  <!--Personal profile page-->
  <div v-if="user.username === currentUser.username">
    <div>
      <h4>Username: {{ user.username }}</h4>
      <h4>Email address: {{ user.email }}</h4>
      <h4>Following: {{ user.following }}</h4>
      <h4>Followers: {{ user.followers}}</h4>
      <button @click="SignOut()">
        SignOut
      </button>
    </div>
  </div>
  <!--Another user's profile page-->
  <div v-else>
    <h4>Username: {{ user.username }}</h4>
      <h4>Following: {{ user.following }}</h4>
      <h4>Followers: {{ user.followers}}</h4>
      <button @click="Follow(user)">
        Follow
      </button>
  </div>
</template>
