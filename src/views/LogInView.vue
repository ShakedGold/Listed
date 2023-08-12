<template>
  <MenuBar />
  <div class="flex flex-col gap-4 p-4 items-center">
    <div class="flex flex-col gap-2">
      <h2 class="text-4xl select-none">
        <b>Login</b>
      </h2>
      <hr>
    </div>
    <div>
      <input
        v-model="username"
        autofocus
        class="input-field"
        type="text"
        placeholder="Username"
      >
      <br>
      <input
        v-model="password"
        class="input-field"
        type="password"
        placeholder="Password"
      >
    </div>
    <div class="flex gap-2">
      <button
        class="button"
        @click="Login(username, password)"
      >
        Login
      </button>
      <button
        class="button"
        @click="() => router.push('/signup')"
      >
        Signup
      </button>
    </div>
  </div>
</template>

<script setup>
import MenuBar from '@/components/MenuBar/MenuBar.vue';
import { Login } from '@/services/auth.js';
import { ref } from 'vue';
import router from '../router';

const username = ref('');
const password = ref('');
</script>
