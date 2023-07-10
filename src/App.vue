<script setup>
import MenuBar from "@/components/MenuBar/MenuBar.vue"
import "@/scripts/firebase.js"
import { IsLoggedIn } from "@/scripts/auth.js"
import router from "./router"

/* Only when IsLoggedIn() is working make the change
if(!IsLoggedIn()) {
  router.push("/login");
}
*/
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