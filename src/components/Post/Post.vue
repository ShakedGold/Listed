<script setup>
import Title from './Title/Title.vue';
import Interactions from './Interactions/Interactions.vue';
import Body from './Body/Body.vue';

import { Post } from '../../classes/Post';
import { ref } from 'vue';

import { getCurrentUserOrNew } from '../../services/auth';

const props = defineProps({
	post: {
		type: Post,
		required: true,
	},
});

const hex = ref(props.post.color.hex);
const isHovering = ref(false);

const user = ref(await getCurrentUserOrNew());
const stopHovering = () => {
	isHovering.value = false;
};
</script>

<template>
  <div
    class="font-roboto-md flex flex-col transition-all duration-150 ease-in-out rounded-xl gap-1 text-lg mb-10"
    :style="{
      'background-color': isHovering ? hex : '#E2E2E2',
      'color': isHovering && post.color.isDark ? '#fff' : '#000',
    }"
    @mouseenter="isHovering = true"
    @mousemove="isHovering = true"
    @mouseleave="stopHovering"
  >
    <Title :post="post" />
    <div class="relative z-0">
      <Body :post="post" />
      <Interactions
        :is-hovering="isHovering"
        :post="post"
        :user="user"
      />
    </div>
  </div>
</template>