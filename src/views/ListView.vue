<script setup>
import Post from "@/components/Post/Post.vue"
import { ref } from "vue"
import { query, orderBy, where, getDocs } from "firebase/firestore";
import { useRoute } from "vue-router";
import { postsRef } from "@/scripts/firebase";

///import { List } from '../classes/List.js'

import MenuBar from "@/components/MenuBar/MenuBar.vue";

let sortMode = ref("top");

let route = useRoute();

//array of all the posts
let posts = ref([]);

const q = query(postsRef, orderBy('votes', "desc"), where("list.name", "==", route.params.name));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  posts.value.push(doc.data());
});
</script>

<template>
  <MenuBar />
  <div id="sorting-container">
    <p>Sort By: </p>
    <select name="sort-selection" id="sort-selection" v-model="sortMode">
      <option value="new">New</option>
      <option value="top">Top</option>
    </select>
  </div>
  <div id="list-header">
    <h1><b>{{route.params.name}}</b></h1>
  </div>
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

#list-header{
  text-align: center;
}

#post-container {
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;
}
</style>