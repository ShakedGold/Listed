<script setup>
import Title from './Title/Title.vue';
import Interactions from './Interactions/Interactions.vue';
import Body from './Body/Body.vue';

import { Post } from '../../classes/Post';
import { ref, computed } from 'vue';
import router from '../../router';
import * as Algorithm from '../../services/Algorithm';
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

function goToPost() {
  router.push({
    name: 'Post',
    params: {
      id: props.post.ID,
    },
  });
}
</script>

<template>
  <div class="flex flex-col transition-all duration-150 ease-in-out rounded-xl gap-3 text-lg cursor-pointer" :style="{
    'background-color': isHovering ? hex : '#E2E2E2',
    'color': isHovering && post.color.isDark ? '#fff' : '#000',
  }" @mouseenter="isHovering = true" @mousemove="isHovering = true" @mouseleave="stopHovering">
    <Title :post="post" />
    <div class="relative z-0">

      <Body :post="post" :is-hovering="isHovering" :hex="hex" @click="goToPost" />
      <Interactions :is-hovering="isHovering" :post="post" :user="user" />
    </div>
  </div>
</template>