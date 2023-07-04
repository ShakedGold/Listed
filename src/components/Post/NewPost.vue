<script setup>
import Dropover from "@/components/Post/Dropover.vue"

import { getDocs, addDoc, setDoc, doc, query, where } from "firebase/firestore";
import { postRef, listsRef } from "@/scripts/firebase";

import { ref } from "vue"
import router from '@/router'

import { Post, postConverter } from "@/classes/Post"
import { List, listConverter } from "@/classes/List"

let options = ref([])
getOptions();

async function getOptions() {
    options.value = []
    options.value.push(new List("Select list"))
    options.value.push(new List("Add new list"))
    const querySnapshot = await getDocs(listsRef);
    querySnapshot.forEach((doc) => {
        options.value.push(new List(doc.data().name))
    })
}

let title = ref("")
let selectedList = ref("Select list")
let is_new_list = ref(false)
let new_list = ref({})

async function post() {
    const docRef = await addDoc(postRef, {});

    // query list, if not exist create one
    const q = query(listsRef, where("name", "==", selectedList.value));
    const querySnapshot = await getDocs(q);

    let list = undefined;
    if (!querySnapshot.empty) {
        list = querySnapshot.docs[0].data();
    } else {
        const ref = doc(listsRef, docRef.id).withConverter(listConverter);
        list = new List(selectedList.value);
        await setDoc(ref, list);
    }

    const ref = doc(postRef, docRef.id).withConverter(postConverter);
    await setDoc(ref, new Post(title.value, "shaked", list, docRef.id));
    // move to HomeView
    router.push('/')
}

function onSelect(event) {
    if (event.target.value === "Add new list") {
        is_new_list.value = true;
    }
}

async function submit_list() {
    is_new_list.value = false;

    const docRef = await addDoc(listsRef, {});
    const ref = doc(listsRef, docRef.id).withConverter(listConverter);
    await setDoc(ref, new List(new_list.value.name));

    selectedList.value = new_list.value.name;
    getOptions();
}
</script>

<template>
    <div v-if="!is_new_list">
        <div id="new-post">
            <select selected="Choose a list" @change="onSelect($event)" v-model="selectedList">
                <option v-for="option in options">{{ option }}</option>
            </select>
            <input type="text" placeholder="Title" v-model="title">
            <Dropover />
            <div>
                <button @click="router.push('/')">Cancel</button>
                <button @click="post">Post</button>
            </div>
        </div>
    </div>
    <div v-else>
        <p>New List</p>
        <input type="text" placeholder="List Name" v-model="new_list.name">
        <button @click="submit_list">Done</button>
        <button @click="is_new_list=false">Cancel</button>
    </div>
</template>

<style>
#new-post {
    border-style: solid;
}
</style>