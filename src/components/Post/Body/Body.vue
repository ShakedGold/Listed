<script setup>
import { onMounted, ref } from 'vue'
import { storage } from '../../../scripts/storage';
import { ref as firebaseRef, getDownloadURL } from "firebase/storage"

let props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

function convertTime(time) {
  let elapsedTime = Math.floor(Date.now() / 1000 - time.seconds);
  let minutes = Math.floor(elapsedTime / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let month = Math.floor(days / 30);
  let year = Math.floor(month / 12);

  if (minutes < 60) return minutes + "m";
  else if (hours < 24) return hours + "h";
  else if (days < 30) return days + "d";
  else if (month < 12) return month + "m";
  else return year + "y";
}

let postImageUrl = ref("");
onMounted(() => {
  const storageRef = firebaseRef(storage, `/uploads/${props.post.ID}/${props.post.imageName}`)
  getDownloadURL(storageRef).then(function (url) {
    postImageUrl.value = url;
  });
});
</script>

<template>
  <div class="flex flex-col">
    <div class="pl-2">
      <div class="flex gap-2 text-gray-500 text-sm">
        <router-link class="text-slate-950" :to="{ name: 'List', params: { name: post.list.name } }">
          {{ post.list.name }}
        </router-link>
        <p>Uploaded by <router-link class="text-slate-950" :to="{ name: 'User', params: { username: post.username } }">{{
          post.username }}</router-link>
          -
          {{
            convertTime(post.time) }} ago</p>

      </div>
      <p>{{ post.title }}</p>
    </div>
    <img class="object-cover w-[800px]" :src="postImageUrl" :alt="post.title" />
  </div>
</template>