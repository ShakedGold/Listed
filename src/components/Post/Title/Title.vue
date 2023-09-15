<script setup>
import { Post } from '../../../classes/Post';

defineProps({
	post: {
		type: Post,
		required: true,
	},
});

function convertTime(time) {
	const elapsedTime = Math.floor(Date.now() / 1000 - time);
	const minutes = Math.floor(elapsedTime / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const month = Math.floor(days / 30);
	const year = Math.floor(month / 12);

	if (minutes < 60)
		return minutes + 'm';
	else if (hours < 24)
		return hours + 'h';
	else if (days < 30)
		return days + 'd';
	else if (month < 12)
		return month + 'm';
	else
		return year + 'y';
}
</script>

<template>
  <div
    class="bg-transparent rounded-[0.6rem] transition-all duration-200 ease-in-out"
  >
    <div class="flex items-center gap-2">
      <router-link
        class="flex items-center gap-1 hover:underline"
        :to="{ name: 'User', params: { username: post.username } }"
      >
        <img
          class="w-10 h-10 rounded-full object-cover p-2"
          src="https://source.unsplash.com/random"
          alt="profile photo"
        > <!-- Profile Photo -->

        <div class="ml-[-0.5rem] hover:underline">
          {{ post.username }}
        </div>
      </router-link>
      <font-awesome-icon
        :icon="['fas', 'circle']"
        class="w-2 text-primary"
      />
      <div>
        {{ convertTime(post.created.seconds) }} ago
      </div>
      <font-awesome-icon
        :icon="['fas', 'circle']"
        class="w-2 text-primary"
      />
      <div class="flex">
        <h3
          v-for="(list, index) in post.lists"
          :key="list"
        >
          <div class="flex hover:underline">
            <router-link :to="{ name: 'List', params: { name: list } }">
              {{ list }}
            </router-link>
            <svg
              v-if="index < post.lists.length - 1"
              class="text-primary object-cover w-5 h-5 mt-1"
              width="8"
              height="17"
              viewBox="0 0 8 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                width="2.5"
                height="17"
                rx="1"
                transform="rotate(20 6 0)"
                fill="#162997"
              />
            </svg>
          </div>
        </h3>
      </div>
    </div>
    <div class="pl-2 text-2xl">
      {{ post.title }}
    </div>
  </div>
</template>