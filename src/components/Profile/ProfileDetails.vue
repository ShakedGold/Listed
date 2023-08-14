<script setup>
import { ref, computed } from 'vue';
import { User } from '../../classes/User';
import { getCurrentUser } from '../../services/auth';
import ConfirmModal from '../Modal/ConfirmModal.vue';
import { Search } from '../../services/Algorithm';

const props = defineProps({
	user: {
		type: User,
		required: true,
	},
});

const currentUser = ref(await getCurrentUser());

const open = ref(false);
const selection = ref('');
const userSearchBox = ref('');

const options = computed(() => {
	if(selection.value=='following')
		return Search(userSearchBox.value, props.user.following, userSearchBox.value==='');
  
	return Search(userSearchBox.value, props.user.followers, userSearchBox.value==='');
});

</script>

<template>
  <div
    class="sticky top-[5.6rem] border-2 inline-block p-5 float-left rounded-md shadow-xl border-black bg-white w-[400px] ml-5 overflow-y-auto"
  >
    <div class="grid place-items-center">
      <h1 class="text-4xl select-none">
        <b>Profile</b>
      </h1>
      <hr class="w-full text-gray-500 m-1">
    </div>
    <!--Personal profile page-->
    <div class="grid place-items-center gap-2 mb-4">
      <h4>{{ user.username }}</h4>
      <h4 v-if="user.username === currentUser.username">
        {{ user.email }}
      </h4>
      <div class="grid grid-flow-col gap-5">
        <h4 @click="() => {open = true; selection='following'}">
          Following: {{ user.following.length }}
        </h4>
        <h4 @click="() => {open = true; selection='followers'}">
          Followers: {{ user.followers.length }}
        </h4>
      </div>
    </div>
    <div v-if="user.username === currentUser.username">
      <button
        class="button w-full"
        @click="currentUser.SignOut()"
      >
        Signout
      </button>
    </div>
    <!--Another user's profile page-->
    <div v-else>
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
  </div>
  <ConfirmModal
    :open="open"
    :on-cancel="() => open=false"
    :show-icons="false"
  >
    <template #header>
      <h1
        v-if="selection=='following'"
        class="text-2xl"
      >
        Following
      </h1>
      <h1
        v-else
        class="text-2xl"
      >
        Followers
      </h1>
      <input
        id="userSearchBox"
        v-model="userSearchBox"
        type="text"
        class="border-2 border-black shadow-lg"
      >
    </template>
    <template #body>
      <div>
        <p
          v-for="option in options"
          :key="option"
        >
          {{ option }}
        </p>
      </div>
    </template>
    <template #cancel>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
        Close
      </button>
    </template>
  </ConfirmModal>
</template>
