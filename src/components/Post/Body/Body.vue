<script setup>
import { onMounted, ref } from 'vue';
import { storage } from '../../../services/storage';
import { ref as firebaseRef, getDownloadURL } from 'firebase/storage';
import router from '../../../router';
import { Post } from '../../../classes/Post';

const props = defineProps({
	post: {
		type: Post,
		required: true,
	},
});

const postImageUrl = ref('');
onMounted(() => {
	const storageRef = firebaseRef(
		storage,
		`/uploads/${props.post.ID}/${props.post.imageName}`
	);
	getDownloadURL(storageRef).then((url) => {
		postImageUrl.value = url;
	});
});

function goToImage() {
	router.push({
		name: 'Image',
		params: { id: props.post.ID, imageName: props.post.imageName },
	});
}
</script>

<template>
  <img
    class="object-cover w-[800px] h-[450px] rounded-[0.6rem]"
    :src="postImageUrl"
    :alt="post.title"
    @click="goToImage"
  >
</template>
