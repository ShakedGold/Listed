<script setup>
import router from '../../router/index.js';
const props = defineProps({
	user: {
		type: Object,
		required: false,
		default: null,
	},
});

function goToProfile() {
	router.push({ name: 'User', params: { username: props.user.username } });
}
</script>

<template>
  <div
    v-if="user"
    class="flex"
  >
    <b
      class="m-auto select-none cursor-pointer hover:text-blue-900"
      @click="goToProfile"
    >
      {{ user.username }}
    </b>
  </div>
  <div
    v-else
    class="flex"
  >
    <button
      class="button m-auto rounded-3xl"
      @click="router.push({ name: 'Login' })"
    >
      Login
    </button>
  </div>
</template>
