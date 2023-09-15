<script setup>
import { onMounted, ref } from 'vue';
import { storage } from '../../../services/storage';
import { ref as firebaseRef, getDownloadURL } from 'firebase/storage';
import { Post } from '../../../classes/Post';

const props = defineProps({
	post: {
		type: Post,
		required: true,
	},
	isHovering: {
		type: Boolean,
		default: false,
	},
	hex: {
		type: String,
		default: '#E2E2E2',
	},
	chunks: {
		type: Array,
		default: () => [],
	},
});

const postImageUrl = ref('');
const text = ref(props.post.text);
onMounted(() => {
	if(props.post.type === 'image') {
		const storageRef = firebaseRef(storage, `/uploads/${props.post.ID}/${props.post.imageName}`);
		getDownloadURL(storageRef).then((url) => {
			postImageUrl.value = url;
		});
	}
});
</script>

<template>
  <div v-if="post.type === 'image'">
    <img
      class="object-cover w-[800px] h-[450px] rounded-[0.6rem]"
      :src="postImageUrl"
      :alt="post.title"
    >
  </div>
  <textarea
    v-else-if="post.type === 'text'"
    v-model="text"
    :rows="chunks.length"
    readonly
    style="overflow:hidden;resize:none;"
    class="rounded-[0.6rem] cursor-pointer bg-gray-200 w-[800px] select-none resize-none p-2 min-h-[150px] mb-[-0.2rem] max-h-[450px] transition-all duration-150 ease-in-out outline-none"
    :style="{
      'background-color': isHovering ? hex : '#E2E2E2',
      'color': isHovering && post.color.isDark ? '#fff' : '#000',
    }"
  />
</template>
