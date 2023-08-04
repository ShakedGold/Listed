<script setup>
import Post from '../components/Post/Post.vue'
import { ref } from 'vue'

let props = defineProps({
  posts: Object
});

let sortMode = ref('top');
</script>

<template>
  <div>
    <p>Sort By:</p>
    <select name="sort-selection" id="sort-selection" v-model="sortMode">
      <option value="new">New</option>
      <option value="top">Top</option>
    </select>
  </div>
  <div class="flex flex-col gap-24 justify-center align-middle items-center" v-if="posts.length !== 0">
    <Post v-for="post in posts" :postObj="post" />
  </div>
  <div v-else>
    <h1>So Empty...</h1>
  </div>
</template>