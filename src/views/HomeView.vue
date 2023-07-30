<script setup>
import Post from "@/components/Post/Post.vue";
import { getDocs, orderBy, query } from "firebase/firestore";
import { ref } from "vue";

import { postsRef } from "@/scripts/firebase";

import MenuBar from "@/components/MenuBar/MenuBar.vue";

let sortMode = ref("top");
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
	<div>
		<p>Sort By:</p>
		<select name="sort-selection" id="sort-selection" v-model="sortMode">
			<option value="new">New</option>
			<option value="top">Top</option>
		</select>
	</div>
	<div
		class="flex flex-col gap-24 justify-center align-middle"
		v-if="posts.length !== 0"
	>
		<Post v-for="post in posts" :postObj="post" />
	</div>
	<div v-else>
		<h1>So Empty...</h1>
	</div>
</template>
