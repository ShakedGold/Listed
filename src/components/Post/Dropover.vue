<script setup>
import { ref } from 'vue';
import { Post } from '../../classes/Post';

const props = defineProps({
	post: {
		type: Post,
		required: true,
	},
});
const dragging = ref(false);
const file = ref(undefined);

defineEmits(['filesChange']);

function drop(e) {
	e.preventDefault();
	dragging.value = false;
	onChange(e);
}

function dragover(e) {
	e.preventDefault();
	dragging.value = true;
}

function dragleave(e) {
	e.preventDefault();
	dragging.value = false;
}

function onChange(e) {
	if (e.dataTransfer)
		file.value = e.dataTransfer.files[0];
	else
		file.value = e.target.files[0];
	props.post.UpdatePost({ imageName: file.value });
}
</script>

<template>
  <div class="flex text-center w-full">
    <div
      class="p-16 bg-[#f7fafc] w-full rounded-md b-1 border-solid border-2 border-[#e2e8f0]"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="
        (e) => {
          drop(e);
          $emit('filesChange', e);
        }
      "
    >
      <input
        id="fileInput"
        ref="fileRef"
        type="file"
        name="file"
        class="opacity-0 overflow-hidden position-absolute w-1 h-1"
        accept=".jpg,.jpeg,.png,.webp,.gif"
        @change="(e) => $emit('filesChange', e)"
      >

      <label
        for="fileInput"
        class="text-xl block cursor-pointer"
      >
        <div v-if="dragging">Release to drop files here.</div>
        <div v-else>Drop files here or <u>click here</u> to upload.</div>
      </label>

      <p>
        <span v-if="!post.imageName">No files selected.</span>
        <span v-else>
          {{ post.imageName }}
        </span>
      </p>
    </div>
  </div>
</template>
