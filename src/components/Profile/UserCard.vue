<script setup>
import router from '../../router/index.js';
import { ref } from 'vue';
import { User } from '../../classes/User';
import { getCurrentUser } from '../../services/auth';

const props = defineProps({
	user: {
		type: User,
		required: true,
	},
});

const currentUser = ref(await getCurrentUser());

function goToProfile() {
	router.push({ name: 'User', params: { username: props.user.username } });
}
</script>
<template>
  <div /> <!--Picture-->
  <div>{{ user.username }}</div> <!--UserName-->
  <div /> <!--Follow/Unfollow-->
</template>