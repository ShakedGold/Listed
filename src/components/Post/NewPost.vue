<script setup>
import Dropover from "@/components/Post/Dropover.vue"

import { addDoc } from "firebase/firestore";
import { serverTimestamp } from 'firebase/firestore'
import { dbRef } from "@/scripts/firebase";

import { ref } from "vue"
import router from '@/router'

let options = ref(["Choose a list", "Python", "Cooking", "Math"])
let title = ref("")

async function post() {
    let postObj = {
        title: title.value,
        author: "shaked",
        time: serverTimestamp(),
        votes: 0
    }

    try {
        const docRef = await addDoc(dbRef, postObj);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    // move to HomeView
    router.push('/')
}
</script>

<template>
    <div id="new-post">
        <select selected="Choose a list">
            <option v-for="option in options">{{ option }}</option>
        </select>
        <input type="text" placeholder="Title" v-model="title">
        <Dropover />
        <div>
            <button>Cancel</button>
            <button @click="post">Post</button>
        </div>
    </div>
</template>

<style>
#new-post {
    border-style: solid;
}
</style>