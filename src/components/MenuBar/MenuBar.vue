<script setup>
import Profile from "./Profile.vue"
import Search from "./Search.vue"
import ActionBar from "./ActionBar/ActionBar.vue"
</script>

<template>
  <div id="menubar">
    <Profile />
    <Search />
    <ActionBar />
  </div>
  <hr>
</template>

<style>
  #menubar {
    display: flex;
    justify-content: space-between;
  }
</style>