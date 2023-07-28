<script setup>
import { ref, watch } from 'vue'
import { storage } from '../../scripts/storage';
import { ref as firebaseRef, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { Post } from '../../classes/Post';

let props = defineProps({
    post: {
        type: Post,
        required: true
    }
})
const dragging = ref(false);
const file = ref(undefined);

// wait for when the postID is set (the post button has been clicked) and then upload the files.
watch(() => props.post.ID, (postID, oldVal) => {
    let percent = ref(0);

    const storageRef = firebaseRef(storage, `/uploads/${postID}/${file.value.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file.value);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            percent.value = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(percent.value);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
            });
        }
    );

});

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
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
            <input type="file" name="file" id="fileInput" class="hidden-input" @change="onChange" ref="fileRef"
                accept=".pdf,.jpg,.jpeg,.png" />

            <label for="fileInput" class="file-label">
                <div v-if="dragging">Release to drop files here.</div>
                <div v-else>Drop files here or <u>click here</u> to upload.</div>
            </label>

            <p>
                <span v-if="!file">No files selected.</span>
                <span v-else>
                    {{ file.name }}
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