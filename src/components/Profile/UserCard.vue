<script setup>
import router from '../../router/index.js';
import { ref } from 'vue';
import { User } from '../../classes/User';
import { getCurrentUser, getUserFromUsername } from '../../services/auth';

const props = defineProps({
	username: {
		type: String,
		required: true,
	},
	selction: {
		type: String,
		required: true,
	},
});

const user = ref(await getUserFromUsername(props.username));
const currentUser = ref(await getCurrentUser());

function goToProfile() {
	router.push({ name: 'User', params: { username: props.user.username } });
}
</script>
<template>
  <div v-if="currentUser===user">
    <div /> <!--Picture-->
    <div>{{ user.username }}</div> <!--UserName-->
  </div>
  <div v-else>
    <div /> <!--Picture-->
    <div>{{ user.username }}</div> <!--UserName-->
    <!--Follow/Unfollow-->
    <div v-if="currentUser.IsFollowing(user)">
      <button
        class="button w-full"
        @click="currentUser.UnFollow(user)"
      >
        Unfollow
      </button>
    </div>
    <div v-else>
      <button
        class="button w-full"
        @click="currentUser.Follow(user)"
      >
        Follow
      </button>
    </div>
  </div>
</template>