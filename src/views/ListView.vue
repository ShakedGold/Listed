<script setup>
import Post from "@/components/Post/Post.vue";
import { postsRef } from "@/scripts/firebase";
import { getDocs, orderBy, query, where } from "firebase/firestore";
import { ref } from "vue";
import { useRoute } from "vue-router";

///import { List } from '../classes/List.js'

import MenuBar from "@/components/MenuBar/MenuBar.vue";

let sortMode = ref("top");

let route = useRoute();

//array of all the posts
let posts = ref([]);

const q = query(
	postsRef,
	orderBy("votes", "desc"),
	where("list.name", "==", route.params.name)
);
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
	posts.value.push(doc.data());
});
</script>

<template>
	<MenuBar />
	<div id="sorting-container">
		<p>Sort By:</p>
		<select name="sort-selection" id="sort-selection" v-model="sortMode">
			<option value="new">New</option>
			<option value="top">Top</option>
		</select>
	</div>
	<div class="flex items-center justify-center">
		<b>{{ route.params.name }}</b>
	</div>
	<div
		class="flex flex-col gap-24 justify-center align-middle items-center"
		v-if="posts.length !== 0"
	>
		<Post v-for="post in posts" v-bind:postObj="post" />
	</div>
	<div v-else>
		<h1>So Empty...</h1>
	</div>
</template>
