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
  <div class="grid grid-flow-col gap-4">
    <div
      v-if="currentUser.username===user.username"
      class="flex items-center"
    >
      <div /> <!--Picture-->
      <div class="w-full">
        {{ user.username }}
      </div> <!--UserName-->
      <div>
        <button
          class="button float-right"
          :disabled="true"
        >
          You
        </button>
      </div>
    </div>
    <div
      v-else
      class="flex items-center"
    >
      <div /> <!--Picture-->
      <div class="w-full">
        {{ user.username }}
      </div> <!--UserName-->
      <!--Follow/Unfollow-->
      <div v-if="currentUser.IsFollowing(user)">
        <button
          class="button float-right"
          @click="currentUser.UnFollow(user)"
        >
          Unfollow
        </button>
      </div>
      <div v-else>
        <button
          class="button"
          @click="currentUser.Follow(user)"
        >
          Follow
        </button>
      </div>
    </div>
  </div>
</template>