<script setup>
import { getDocs, orderBy, query } from "firebase/firestore";
import { ref } from "vue";

import { postsRef } from "@/scripts/firebase";

import MenuBar from "@/components/MenuBar/MenuBar.vue";
import PostView from "./PostView.vue";

//array of all the posts
let posts = ref([]);

const q = query(postsRef, orderBy("votes", "desc"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
	posts.value.push(doc.data());
});
</script>

<template>
	<MenuBar />
	<PostView :posts="posts" />
</template>
