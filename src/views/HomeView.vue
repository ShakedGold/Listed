<script setup>
import { getDocs, orderBy, query } from "firebase/firestore";
import { postsRef } from "@/scripts/firebase";

import { ref } from "vue";

import MenuBar from "@/components/MenuBar/MenuBar.vue";
import PostsView from "./PostsView.vue";

//array of all the posts
let posts = ref(await getPosts());

async function getPosts() {
	let q = query(postsRef, orderBy("votes", "desc"));
	let querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => doc.data());
}
</script>

<template>
	<MenuBar />
	<PostsView :posts="posts" />
</template>
