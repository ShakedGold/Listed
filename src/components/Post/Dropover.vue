<script setup>
import { ref } from 'vue'

const dragging = ref(false);
const files = ref([]);

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
    if(e.dataTransfer)
        files.value = e.dataTransfer.files;
    else
        files.value = e.target.files;
}
</script>

<template>
    <div class="dropzone">
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
            <input type="file" multiple name="file" id="fileInput" class="hidden-input" @change="onChange" ref="file"
                accept=".pdf,.jpg,.jpeg,.png" />

            <label for="fileInput" class="file-label">
                <div v-if="dragging">Release to drop files here.</div>
                <div v-else>Drop files here or <u>click here</u> to upload.</div>
            </label>

            <p>
                <span v-if="files.length === 0">No files selected.</span>
                <span v-else>
                    <span v-for="file in files">
                        {{ file.name }}<br>
                    </span>
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