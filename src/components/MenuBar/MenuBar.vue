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
#menubar * {
  /* border radius */
  border-radius: 0.5rem;

  /* height variable for interactables */
  --interactable-height: 2.8rem;
}

#menubar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}
</style>