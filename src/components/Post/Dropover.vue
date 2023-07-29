<script setup>
import { ref } from 'vue'
import { Post } from '../../classes/Post';

let props = defineProps({
    post: {
        type: Post,
        required: true
    }
})
const dragging = ref(false);
const file = ref(undefined);

let emits = defineEmits(["filesChange"]);

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
    props.post.imageName = file.value.name;
}
</script>

<template>
    <div class="dropzone">
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave"
            @drop="(e) => { drop(e); $emit('filesChange', e) }">
            <input type="file" name="file" id="fileInput" class="hidden-input" @change="(e) => $emit('filesChange', e)"
                ref="fileRef" accept=".pdf,.jpg,.jpeg,.png" />

            <label for="fileInput" class="file-label">
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

<style>
.dropzone {
    display: flex;
    text-align: center;
}
</style>