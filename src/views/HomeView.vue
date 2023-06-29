<script setup>
import Post from "@/components/Post/Post.vue"
function arrange() {
    alert("Refreshing all posts!");
}
</script>

<template>  
    <button @click="arrange()">Refresh</button>
    <Post />
    <Post />
    <Post />

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