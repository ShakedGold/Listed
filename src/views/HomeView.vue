<script setup>
import Post from "@/components/Post/Post.vue"
import MenuBar from "@/components/MenuBar/MenuBar.vue"
import { ref } from "vue"
import { query, orderBy, limit } from "firebase/firestore";  
import { getDocs } from "firebase/firestore";

import { dbRef } from "@/scripts/firebase";

//array of all the posts
var posts = ref([]);

const q = query(dbRef, orderBy("votes", "desc"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  posts.value.push(doc.data());
});
</script>

<template>
  <MenuBar />
  <Post v-for="post in posts" v-bind:postObj="post" />
</template>

<style>
body {
  background-color: #e7ecef;
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  color: black;
}
</style> 