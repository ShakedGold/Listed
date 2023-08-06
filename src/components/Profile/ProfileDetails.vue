<script setup>
import { ref } from "vue";
import { User } from "../../classes/User";
import { getCurrentUser } from "../../scripts/auth";

let props = defineProps({
	user: {
		type: User,
		required: true,
	},
});

let currentUser = ref(await getCurrentUser());
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
			<h4>{{ user.email }}</h4>
			<div class="grid grid-flow-col gap-5">
				<h4>Following: {{ user.following.length }}</h4>
				<h4>Followers: {{ user.followers.length }}</h4>
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
</template>
