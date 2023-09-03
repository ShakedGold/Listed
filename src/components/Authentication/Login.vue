<script setup>
import { ref } from 'vue';
import { Login } from '../../services/auth';
import ConfirmModal from '../Modal/ConfirmModal.vue';

const username = ref('');
const password = ref('');

const errorModalText = ref('');
const open = ref(false);

const login = () => {
	Login(username.value, password.value).catch(error => {
		errorModalText.value = error;
		open.value = true;
	});
};
</script>

<template>
  <ConfirmModal
    :open="open"
    :show-confirm-icon="false"
    :on-cancel="() => open = false"
  >
    <template #header>
      Error
    </template>
    <template #body>
      {{ errorModalText }}
    </template>
  </ConfirmModal>
  <div class="flex-col gap-2 grid place-items-center w-full">
    <div class="flex flex-col gap-3 w-[20%]">
      <h2 class="text-5xl w-full text-center select-none">
        <b>Login</b>
      </h2>
      <hr>
    </div>
    <form class="flex flex-col gap-2 w-[25%]">
      <label
        class="select-none"
        for="email"
      >Username</label>
      <input
        id="username"
        v-model="username"
        class="input"
        type="text"
        name="username"
      >
      <label
        class="select-none"
        for="password"
      >Password</label>
      <input
        id="password"
        v-model="password"
        class="input"
        type="password"
        name="password"
      >

      <div class="grid place-items-center grid-flow-col gap-3">
        <button
          type="submit"
          class="button mt-2 w-full"
          @click.prevent="login"
        >
          Login
        </button>
        <button
          type="submit"
          class="button mt-2 w-full"
          @click.prevent="$router.push('/signup')"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</template>