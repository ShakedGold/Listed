<script setup>
import { ref } from 'vue';

import { User } from '../../classes/User';
import { getCurrentUser } from '../../scripts/auth';

let props = defineProps({
  user: {
    type: User,
    required: true,
  },
});

let currentUser = ref(await getCurrentUser());
</script>

<template>
  <div>
    <h1 id="heading" class="text-4xl"><b>Profile</b></h1>
    <hr style="width: 15%; text-align: left; margin-left: 0; color: gray" />
  </div>
  <!--Personal profile page-->
  <div v-if="user.username === currentUser.username">
    <div>
      <h4>Username: {{ user.username }}</h4>
      <h4>Email address: {{ user.email }}</h4>
      <h4>Following: {{ user.following.length }}</h4>
      <h4>Followers: {{ user.followers.length }}</h4>
      <button @click="currentUser.SignOut()" class="button">
        SignOut
      </button>
    </div>
  </div>
  <!--Another user's profile page-->
  <div v-else>
    <h4>Username: {{ user.username }}</h4>
    <h4>Following: {{ user.following.length }}</h4>
    <h4>Followers: {{ user.followers.length }}</h4>
    <div v-if="currentUser.IsFollowing(user)">
      <button @click="currentUser.UnFollow(user)" class="button">
        Following
      </button>
    </div>
    <div v-else>
      <button @click="currentUser.Follow(user)" class="button">
        Follow
      </button>
    </div>
  </div>
</template>