<template>
  <MenuBar />

  <div class="flex flex-col gap-4 p-4 items-center">
    <div class="flex flex-col gap-2">
      <h2 class="text-4xl select-none">
        <b>SignUp</b>
      </h2>
      <hr>
    </div>
    <div>
      <input
        id="email"
        v-model="email"
        autofocus
        class="input-field"
        type="email"
        placeholder="Email"
      >
      <br>
      <input
        id="username"
        v-model="username"
        class="input-field"
        type="text"
        placeholder="Username"
      >
      <br>
      <p
        v-if="password.length != 0"
        class="text-sm text-center"
      >
        Minimum eight characters, at least one uppercase letter,<br>
        one lowercase letter, one number and one special character
      </p>
      <input
        id="password"
        v-model="password"
        class="input-field"
        type="password"
        placeholder="Password"
      >
    </div>
    <div class="flex gap-2">
      <button
        class="button"
        @click="() => router.push('/login')"
      >
        Login
      </button>
      <button
        class="button"
        @click="
          () => {
            SignUp(email, password, username).then(() => {
              router.push('/');
            });
          }
        "
      >
        Signup
      </button>
    </div>
  </div>
</template>

<script setup>
import MenuBar from '@/components/MenuBar/MenuBar.vue';
import { SignUp } from '@/services/auth.js';
import { ref } from 'vue';
import router from '../router';

const username = ref('');
const password = ref('');
const email = ref('');
</script>
