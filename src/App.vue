<script setup>
import MenuBar from "@/components/MenuBar/MenuBar.vue"
</script>

<template>
  <MenuBar />
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style>
  * {
    /* colors */
    --primary: #061A86;
    --secondary: #0080FF;
    --accent: #061A86;
    --faded-accent: #162997;

    /* fonts */
    font-family: "Fira Sans Condensed Medium";
  }
</style>