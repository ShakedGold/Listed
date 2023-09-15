<script setup>
import { ref, computed } from 'vue';
import { User } from '../../classes/User';
import { getCurrentUser } from '../../services/auth';
import ConfirmModal from '../Modal/ConfirmModal.vue';
import { Search } from '../../services/Algorithm';
import UserCard from './UserCard.vue';

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
		return Search(userSearchBox.value, props.user.following, userSearchBox.value!=='');
  
	return Search(userSearchBox.value, props.user.followers, userSearchBox.value!=='');
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
      <div class="grid grid-flow-col gap-5 cursor-pointer">
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
    v-model:open="open"
    :on-cancel="() => open=false"
    :show-icons="false"
  >
    <template #header>
      <div
        class="flex gap-2 items-center cursor-pointer hover:bg-gray-200 rounded-md p-2 w-36"
        @click="() => open=false"
      >
        <div>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.29169 8.3003L8.35855 0.289671C8.74747 -0.096557 9.37838 -0.096557 9.7673 0.289671L10.7083 1.22412C11.0968 1.60994 11.0972 2.23483 10.7099 2.62147L4.31661 8.99979L10.7095 15.3785C11.0972 15.7652 11.0963 16.3901 10.7078 16.7759L9.76688 17.7103C9.37796 18.0966 8.74706 18.0966 8.35814 17.7103L0.29169 9.69929C-0.0972299 9.31306 -0.0972299 8.68652 0.29169 8.3003Z"
              fill="black"
            />
          </svg>
        </div>
        <h1
          v-if="selection=='following'"
          class="text-2xl cursor-pointer"
        >
          Following
        </h1>
        <h1
          v-else
          class="text-2xl cursor-pointer"
        >
          Followers
        </h1>
      </div>
      <input
        id="userSearchBox"
        v-model="userSearchBox"
        type="text"
        class="input"
      >
    </template>
    <template #body>
      <UserCard
        v-for="username in options"
        :key="username"
        :username="username"
        :selction="selection"
        @close-modal="() => open=false"
      />
    </template>
  </ConfirmModal>
</template>
