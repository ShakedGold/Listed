<script setup>
import { onMounted, ref } from 'vue';
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
const postImageUrl = ref('');
onMounted(() => {
	if (props.post.type === 'image') {
		const storageRef = firebaseRef(storage, `/uploads/${props.post.ID}/${props.post.imageName}`);
		getDownloadURL(storageRef).then((url) => {
			postImageUrl.value = url;
		});
	}
});
</script>

<template>
	<div v-if="post.type === 'image'">
		<img class="object-cover w-[800px] h-[450px] rounded-[0.6rem]" :src="postImageUrl" :alt="post.title">
	</div>
	<div v-else-if="post.type === 'text'">
		<Markdown
			class="rounded-[0.6rem] overflow-hidden cursor-pointer w-[800px] select-none resize-none p-2 min-h-[150px] mb-[-0.2rem] max-h-[350px] transition-all duration-150 ease-in-out outline-none"
			:src="post.text" />
	</div>
</template>
