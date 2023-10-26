<script setup>
import Title from './Title/Title.vue';
import Interactions from './Interactions/Interactions.vue';
import Body from './Body/Body.vue';

import { Post } from '../../classes/Post';
import { ref, computed } from 'vue';
import router from '../../router';
import { getCurrentUserOrNew } from '../../services/auth';

const props = defineProps({
  post: {
    type: Post,
    required: true,
  },
});

const hex = computed(() => {
  return props.post.color.hex + (props.post.type === 'image' ? '9a' : 'ff');
});
const isHovering = ref(false);

const user = ref(await getCurrentUserOrNew());
const stopHovering = () => {
  isHovering.value = false;
};

function goToPost() {
  if (props.post.type === 'image') {
    router.push({
      name: 'PostImage',
      params: {
        id: props.post.ID,
        imageName: props.post.imageName,
      },
    });
  }
}
</script>

<template>
  <div
    class="flex w-[700px] flex-col rounded-lg max-h-[600px] min-h-[200px] cursor-pointer select-none transition-all ease-in-out duration-75"
    :style="{
      'background-color': isHovering ? hex : '#E2E2E2',
      'color': isHovering && post.color.isDark ? '#fff' : '#000',
    }" @mouseenter="isHovering = true" @mousemove="isHovering = true" @mouseleave="stopHovering">
    <Title :post="post" class="pb-2 transition-all ease-in-out bg-neutral-300 duration-[50ms]" :style="{
      backgroundColor: isHovering ? hex : '#d4d4d4'
    }" />
    <div class="flex-grow relative z-0 overflow-hidden">

      <Body :post="post" :is-hovering="isHovering" :hex="hex" @click="goToPost" />
      <div class="absolute bottom-0 left-0 w-full h-[5rem] flex gap-4">
        <Interactions :is-hovering="isHovering" :post="post" :user="user" />
      </div>
    </div>
  </div>
</template>