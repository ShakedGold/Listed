<script setup>
import AddPost from './AddPost.vue'
import Notifications from './Notifications.vue'
</script>

<template>
  <div id="action-bar">
    <AddPost />
    <Notifications />
  </div>
</template>

<style>
  #action-bar {
    display: flex;
  }
</style>