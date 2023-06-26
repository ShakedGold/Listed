<script setup>
import AddPost from './AddPost.vue'
import Notifications from './Notifications.vue'
</script>

<template>
  <div id="container">
    <div id="action-bar">
      <AddPost />
      <Notifications />
    </div>
  </div>
</template>

<style>
  #action-bar {
    display: flex;
    gap: 1rem;
  }
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>