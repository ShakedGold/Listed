<script setup>
import { onMounted, ref, computed } from 'vue';
import { storage } from '../../../services/storage';
import { ref as firebaseRef, getDownloadURL } from 'firebase/storage';
import { Post } from '../../../classes/Post';
import Markdown from '../../Render/Markdown.vue';

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
});
const postImageUrlPromise = computed(() => {
	if (props.post.type === 'image') {
		const storageRef = firebaseRef(storage, `/uploads/${props.post.ID}/${props.post.imageName}`);
		return getDownloadURL(storageRef);
	}
});
const getMeta = (url) =>
	new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = (err) => reject(err);
		img.src = url;
	});
const postImageUrl = ref(await postImageUrlPromise.value);
const postImageSizePromise = computed(async () => {
	if (props.post.type === 'image') {
		const img = await getMeta(postImageUrl.value);
		return {
			width: img.width,
			height: img.height,
		};
	} else {
		return {
			width: 0,
			height: 0,
		};
	}
});
const postImageSize = ref(await postImageSizePromise.value);
</script>

<template>
	<div v-if="post.type === 'image'" class="overflow-hidden"
		:class="postImageSize.height <= 450 ? 'justify-center items-center flex' : ''">
		<img class="w-full" :src="postImageUrl" :alt="post.title">
	</div>
	<div v-else-if="post.type === 'text'">
		<Markdown
			class="text-base overflow-hidden cursor-pointer select-none resize-none p-2 transition-all duration-150 ease-in-out outline-none"
			:src="post.text" />
	</div>
</template>
