<script setup>
import Dropover from "@/components/Post/Dropover.vue"

import { getDocs, setDoc, doc, query, where } from "firebase/firestore";
import { postsRef, listsRef } from "@/scripts/firebase";

import { ref } from "vue"
import router from '@/router'

import { Post, postConverter } from "@/classes/Post"
import { List, listConverter } from "@/classes/List"

import { getCurrentUser } from "@/scripts/auth.js";

let listOptions = ref([]);
getOptions().then((lists) => {
    listOptions.value = lists;
})

let newPost = ref(new Post("", "", new List()), "");
let selectedList = ref("Select a list");
let newList = ref(new List(""));
let newListCreation = ref(false);

async function getOptions() {
    let lists = [];
    lists.push(new List("Add new list"))
    const querySnapshot = await getDocs(listsRef);
    querySnapshot.forEach((doc) => {
        lists.push(new List(doc.data().name))
    });
    return lists;
}

async function post() {
    if (selectedList.value === "Select a list") {
        alert("Must select a list or create a new one");
        return;
    }
    else if (newPost.value.title === "") {
        alert("Must enter a title");
        return;
    }


    // query list, if not exist create one
    const q = query(listsRef, where("name", "==", selectedList.value));
    const querySnapshot = await getDocs(q);

    // get the selected list or create it
    if (querySnapshot.empty) {
        const ref = doc(listsRef).withConverter(listConverter);
        newPost.value.list = new List(selectedList.value);
        await setDoc(ref, newPost.value.list);
    } else {
        newPost.value.list = querySnapshot.docs[0].data();
    }

    // get user
    newPost.value.username = getCurrentUser().username;

    // create post
    const ref = doc(postsRef).withConverter(postConverter);

    // set post ID to doc ID
    newPost.value.ID = ref.id;

    await setDoc(ref, newPost.value);

    // move to HomeView
    router.push('/')
}

function onSelect(event) {
    newListCreation.value = event.target.value === "Add new list";
}

async function submitList() {
    newListCreation.value = false;

    const ref = doc(listsRef).withConverter(listConverter);
    await setDoc(ref, new List(newList.value.name));

    selectedList.value = newList.value.name;
    getOptions().then((lists) => {
        listOptions.value = lists;
    });
}
</script>

<template>
    <div v-if="!newListCreation">
        <div id="new-post">
            <select @change="onSelect($event)" v-model="selectedList">
                <option disabled>Select a list</option>
                <option v-for=" option  in  listOptions ">{{ option }}</option>
            </select>
            <input type="text" placeholder="Title" v-model="newPost.title">
            <Dropover />
            <div>
                <button @click="router.push('/')">Cancel</button>
                <button @click="post">Post</button>
            </div>
        </div>
    </div>
    <div v-else>
        <p>New List</p>
        <input type="text" placeholder="List Name" v-model="newList.name">
        <button @click="submitList">Done</button>
        <button @click="() => {
            newListCreation = false;
            selectedList = 'Select a list';
        }">Cancel</button>
    </div>
</template>

<style>
#new-post {
    border-style: solid;
}
</style>