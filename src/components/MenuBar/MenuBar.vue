<script setup>
import { ref } from 'vue';
import router from '../../router';
import { getCurrentUser } from '../../services/auth';
import ActionBar from './ActionBar/ActionBar.vue';
import Profile from './Profile.vue';
import Search from './Search.vue';

const user = ref(await getCurrentUser());
</script>

<template>
  <div
    id="menubar"
    class="flex px-2 py-4 gap-10 bg-white border-b-2 border-black sticky top-0 z-[200] shadow-md mb-4"
  >
    <img
      src="../../assets/logo/png/logo-no-background.png"
      class="object-cover w-[190px] cursor-pointer"
      alt="listed icon"
      @click="router.push('/')"
    >
    <Search />
    <div class="flex gap-3">
      <ActionBar />
      <Profile :user="user" />
    </div>
  </div>
</template>
