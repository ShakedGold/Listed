<script setup>
import { ref } from 'vue'

const dragging = ref(false);

function drop(e) {
    e.preventDefault();
    dragging.value = false;
}

function dragover(e) {
    e.preventDefault();
    dragging.value = true;
}

function dragleave(e) {
    e.preventDefault();
    dragging.value = false;
}

function isDragging() {
    return dragging.value;
}
</script>

<template>
    <div class="main">
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
            <input type="file" multiple name="file" id="fileInput" class="hidden-input" @change="onChange" ref="file"
                accept=".pdf,.jpg,.jpeg,.png" />

            <label for="fileInput" class="file-label">
                <div v-if="dragging">Release to drop files here.</div>
                <div v-else>Drop files here or <u>click here</u> to upload.</div>
            </label>
        </div>
    </div>
</template>