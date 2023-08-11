<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { storage } from '../services/storage';
import { ref as firebaseRef, getDownloadURL } from 'firebase/storage';

const route = useRoute();

const storageRef = firebaseRef(
	storage,
	`/uploads/${route.params.id}/${route.params.imageName}`
);
const postImageUrl = ref(await getDownloadURL(storageRef));
</script>

<template>
  <img
    :src="postImageUrl"
    alt=""
  >
</template>
