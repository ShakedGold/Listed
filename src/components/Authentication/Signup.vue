<script setup>
import { SignUp } from '../../services/auth';
import { ref, computed } from 'vue';
import ConfirmModal from '../Modal/ConfirmModal.vue';

const email = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');

const open = ref(false);
const error = ref('');

const confirmation = computed(() => {
	const doesPasswordMatch = password.value === confirmPassword.value && password.value !== '';
	const isPasswordLongEnough = password.value.length >= 8;
	const isPasswordContainingNumber = /\d/.test(password.value);
	const isPasswordContainingSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password.value);
	const isPasswordContainingUppercaseLetter = /[A-Z]/.test(password.value);
	return [
		{
			flag: doesPasswordMatch,
			errorText: doesPasswordMatch ? 'Passwords match' : 'Passwords do not match',
			icon: ['fas', 'lock']
		},
		{
			flag: isPasswordLongEnough,
			errorText: 'Password must have at least 8 letters',
			icon: ['fas', 'book']
		},
		{
			flag: isPasswordContainingNumber,
			errorText: 'Password must have at least 1 number',
			icon: ['fas', 'hashtag']
		},
		{
			flag: isPasswordContainingSpecialCharacter,
			errorText: 'Password must have at least 1 special character',
			icon: ['fas', 'exclamation']
		},
		{
			flag: isPasswordContainingUppercaseLetter,
			errorText: 'Password must have at least 1 uppercase letter',
			icon: ['fas', 'a']
		}
	];
});
const allChecksConfirmed = computed(() => {
	return confirmation.value.every(confirmationText => confirmationText.flag) ? 'border-green-500 focus:border-green-500' : 'border-red-500 focus:border-red-500';
});

const signup = () => {
	SignUp(email.value, username.value, password.value).catch(errorMessage => {
		error.value = errorMessage;
		open.value = true;
	});
};
</script>

<template>
  <ConfirmModal
    :show-confirm-icon="false"
    :on-cancel="() => open = false"
    :open="open"
  >
    <template #header>
      <h2>Error while signing up</h2>
    </template>
    <template #body>
      <p><b>{{ error }}</b></p>
    </template>
  </ConfirmModal>
  <div class="flex-col gap-2 grid place-items-center w-full">
    <div class="flex flex-col gap-3 w-[20%]">
      <h2 class="text-5xl w-full text-center select-none">
        <b>SignUp</b>
      </h2>
      <hr>
    </div>
    <form class="flex flex-col gap-2 w-[25%]">
      <label
        class="select-none"
        for="email"
      >Email</label>
      <input
        id="email"
        v-model="email"
        class="input"
        type="email"
        name="email"
      >
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
        :class="password !== '' || confirmPassword !== '' ? allChecksConfirmed : ''"
        type="password"
        name="password"
      >
      <label
        class="select-none"
        for="confirmPassword"
      >Confirm Password</label>
      <input
        id="confirmPassword"
        v-model="confirmPassword"
        class="input"
        :class="password !== '' || confirmPassword !== '' ? allChecksConfirmed : ''"
        type="password"
        name="confirmPassword"
      >
      <ul
        class="fa-ul"
        :class="password !== '' || confirmPassword !== '' ? '' : 'hidden'"
      >
        <!--eslint-disable-next-line vue/require-v-for-key-->
        <li
          v-for="confirmationText in confirmation"
          class="select-none"
          :class="confirmationText.flag ? 'text-green-500' : 'text-red-500'"
        >
          <span class="fa-li"><font-awesome-icon :icon="confirmationText.icon" /></span>
          <p
            class="inline-block"
          >
            {{ confirmationText.errorText }}
          </p>
        </li>
      </ul>
      
      <div class="grid place-items-center grid-flow-col gap-3">
        <button
          type="submit"
          class="button mt-2 w-full"
          @click.prevent="$router.push('/login')"
        >
          Login
        </button>
        <button
          type="submit"
          class="button mt-2 w-full"
          :disabled="!confirmation.every(confirmationText => confirmationText.flag)"
          :class="confirmation.every(confirmationText => confirmationText.flag) ? '' : 'opacity-50 cursor-not-allowed'"
          @click.prevent="signup"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</template>