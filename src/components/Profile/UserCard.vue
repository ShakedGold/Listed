<script setup>
import router from '../../router/index.js';
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
    <div> <!--user card-->
        <div></div> <!--profile picture-->
        <div>{{ user.username }}</div> <!--User name-->
        <div>
            <div v-if="currentUser.IsFollowing(user)">
            <button
              class="button w-full"
              @click="currentUser.UnFollow(user)"
            >
              UnFollow
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
        </div> <!--Follow button-->
    </div>
</template>