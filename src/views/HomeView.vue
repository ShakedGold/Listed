<script setup>
import Post from "@/components/Post/Post.vue"
import MenuBar from "@/components/MenuBar/MenuBar.vue"
import { ref } from "vue";

//array of all the posts
var posts = ref([
  {
    title: "test",
    author: "shaked",
    votes: 90,
    time: 25200,
  },
  {
    title: "shaked",
    author: "shaked2",
    votes: -1,
    time: 63115200,
  }
]);
</script>

<template>
  <MenuBar />
  <Post v-for="post in posts" v-bind:postObj="post"/>
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