<script setup>
import { postsRef } from "@/scripts/firebase";
import { getDocs, orderBy, query, where } from "firebase/firestore";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import MenuBar from "@/components/MenuBar/MenuBar.vue";
import PostsView from "./PostsView.vue";

let route = useRoute();

//array of all the posts
let posts = ref(await getPosts());

async function getPosts() {
	let q = query(postsRef, orderBy("votes", "desc"), where("list.name", "==", route.params.name));
	let querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => doc.data());
}

watch(route, async () => {
	posts.value = await getPosts();
});
</script>

<template>
	<MenuBar />
	<PostsView :posts="posts" />
</template>
