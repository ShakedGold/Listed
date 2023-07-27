<script setup>
import Post from "@/components/Post/Post.vue"
import { ref } from "vue"
import { query, orderBy } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

import { postsRef } from "@/scripts/firebase";

//array of all the posts
var posts = ref([]);

const q = query(postsRef, orderBy("votes", "desc"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  posts.value.push(doc.data());
});
</script>

<template>
  <div id="post-container" v-if="posts.length !== 0">
    <Post v-for="post in posts" v-bind:postObj="post" />
  </div>
  <div v-else>
    <h1>So Empty...</h1>
  </div>
</template>

<style>
body {
  background-color: #e7ecef;
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  color: black;
}

#post-container {
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;
}
</style>