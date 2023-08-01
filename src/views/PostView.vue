<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { storage } from '../scripts/storage';
import { ref as firebaseRef, getDownloadURL } from "firebase/storage"

let route = useRoute();

const storageRef = firebaseRef(storage, `/uploads/${route.params.id}/${route.params.imageName}`)
let postImageUrl = ref(await getDownloadURL(storageRef));
</script>

<template>
  <img :src="postImageUrl" alt="">
</template>