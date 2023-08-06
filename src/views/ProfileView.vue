<script setup>
import { getDocs, orderBy, query, where } from "firebase/firestore";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { postConverter } from "../classes/Post";
import MenuBar from "../components/MenuBar/MenuBar.vue";
import ProfileDetails from "../components/Profile/ProfileDetails.vue";
import { getUserFromUsername } from "../scripts/auth";
import { postsRef } from "../scripts/firebase";


import PostsView from "./PostsView.vue";

let route = useRoute();
let user = ref(await getUserFromUsername(route.params.username));
let posts = ref(await getPosts());

async function getPosts() {
	let q = query(
		postsRef,
		where("username", "==", user.value.username),
		orderBy("time", "desc")
	).withConverter(postConverter);
	let querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => doc.data());
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
let searchTerm = ref("");
function searchUser(){
	searchTerm=document.getElementById("userSearchBox").value;
	console.log(searchTerm);
}

</script>

<template>
	<MenuBar />
	<div class="relative">
		<ProfileDetails class="mr-4" :user="user" />
		<PostsView :posts="posts" :key="posts" />
	</div>
</template>
