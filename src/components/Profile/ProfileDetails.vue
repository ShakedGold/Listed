<script setup>
import { ref } from "vue";
import { User } from "../../classes/User";
import { getCurrentUser } from "../../scripts/auth";
import ConfirmModal from "../Modal/ConfirmModal.vue";

let props = defineProps({
	user: {
		type: User,
		required: true,
	},
});

let currentUser = ref(await getCurrentUser());

let open = ref(false);
let selection = ref("");

let searchTerm = ref("");
function searchUser(){
	searchTerm.value=document.getElementById("userSearchBox").value.toLowerCase();
}
</script>

<template>
	<div
		class="sticky top-[5.6rem] border-2 inline-block p-5 float-left rounded-md shadow-xl border-black bg-white w-[400px] ml-5 overflow-y-auto"
	>
		<div class="grid place-items-center">
			<h1 class="text-4xl select-none"><b>Profile</b></h1>
			<hr class="w-full text-gray-500 m-1" />
		</div>
		<!--Personal profile page-->
		<div class="grid place-items-center gap-2 mb-4">
			<h4>{{ user.username }}</h4>
			<h4 v-if="user.username === currentUser.username">{{ user.email }}</h4>
			<div class="grid grid-flow-col gap-5">
				<h4 @click="() => {open = true; selection='following'}">Following: {{ user.following.length }}</h4>
				<h4 @click="() => {open = true; selection='followers'}">Followers: {{ user.followers.length }}</h4>
			</div>
		</div>
		<div v-if="user.username === currentUser.username">
			<button @click="currentUser.SignOut()" class="button w-full">
				Signout
			</button>
		</div>
		<!--Another user's profile page-->
		<div v-else>
			<div v-if="currentUser.IsFollowing(user)">
				<button @click="currentUser.UnFollow(user)" class="button w-full">
					Unfollow
				</button>
			</div>
			<div v-else>
				<button @click="currentUser.Follow(user)" class="button w-full">
					Follow
				</button>
			</div>
		</div>
	</div>
	<ConfirmModal :open="open" :on-cancel="() => open=false" :show-icons="false">
	<template #header>
	      <h1 class="text-2xl" v-if="selection=='following'">Following</h1>
		  <h1 class="text-2xl" v-else>Followers</h1>
		  <input type="text" class="border-2 border-black shadow-lg" id="userSearchBox">
		  <button class="button" @click="searchUser()">search</button>
	</template>
	<template #body>
	<div class="flex flex-col" v-if="selection=='following'">
        <span class="flex gap-1" v-for="follow in user.following" :key="follow">
          <label v-if="follow.toLowerCase().includes(searchTerm)">{{ follow }}</label>
        </span>
    </div>
	<div class="flex flex-col" v-else>
        <span class="flex gap-1" v-for="follower in user.followers" :key="follower">
          <label v-if="follower.toLowerCase().includes(searchTerm)">{{ follower }}</label>
        </span>
    </div>
	</template>
	<template #cancel>
	      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Close</button>
	</template>
	</ConfirmModal>
</template>
