<script setup>
import Dropover from "@/components/Post/Dropover.vue";
import ProgressModal from "@/components/Modal/ProgressModal.vue";

import {
	getDocs,
	setDoc,
	doc,
	query,
	where,
	serverTimestamp,
} from "firebase/firestore";
import { postsRef, listsRef } from "@/scripts/firebase";

import { ref } from "vue";
import router from "@/router";

import { Post, postConverter } from "@/classes/Post";
import { List, listConverter } from "@/classes/List";

import { getCurrentUserOrNew } from "@/scripts/auth.js";
import { storage } from "@/scripts/storage";
import {
	ref as firebaseRef,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";

let listOptions = ref(await getOptions());

let newPost = ref(new Post("", "", new List(), "", 0, serverTimestamp(), ""));
let file = ref({ name: "" });
let selectedList = ref("Select a list");
let newList = ref(new List(""));
let newListCreation = ref(false);
let uploadModal = ref(false);
let percent = ref(0);

async function getOptions() {
	let lists = [];
	lists.push(new List("Add new list"));
	const querySnapshot = await getDocs(listsRef);
	querySnapshot.forEach((doc) => {
		lists.push(new List(doc.data().name));
	});
	return lists;
}

async function post() {
	if (selectedList.value === "Select a list") {
		alert("Must select a list or create a new one");
		return;
	} else if (newPost.value.title === "") {
		alert("Must enter a title");
		return;
	}

	// query list, if not exist create one
	const q = query(listsRef, where("name", "==", selectedList.value));
	const querySnapshot = await getDocs(q);
	newPost.value.list = querySnapshot.docs[0].data();

	// get user
	getCurrentUserOrNew().then(async (user) => {
		newPost.value.username = user.username;

		// create post
		const ref = doc(postsRef).withConverter(postConverter);

		// set post ID to doc ID
		newPost.value.ID = ref.id;

		// show upload modal
		uploadModal.value = true;

		const storageRef = firebaseRef(
			storage,
			`/uploads/${newPost.value.ID}/${file.value.name}`
		);
		const uploadTask = uploadBytesResumable(storageRef, file.value);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				percent.value = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
			},
			(err) => console.log(err),
			() => {
				// download url
				getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
					await setDoc(ref, newPost.value);

					// move to HomeView
					router.push("/");
				});
			}
		);
	});
}

function onSelect(event) {
	newListCreation.value = event.target.value === "Add new list";
}

async function submitList() {
	newListCreation.value = false;

	const ref = doc(listsRef).withConverter(listConverter);
	await setDoc(ref, new List(newList.value.name));

	selectedList.value = newList.value.name;
	listOptions.value = await getOptions();
}

function uploadfiles(e) {
	if (e.dataTransfer) file.value = e.dataTransfer.files[0];
	else file.value = e.target.files[0];
	newPost.value.imageName = file.value.name;
}
</script>

<template>
	<ProgressModal :open="uploadModal" :progress="percent">
		<template #header>
			<h1>Uploading post</h1>
		</template>
		<template #body>
			<h1>{{ newPost.title }}</h1>
		</template>
		<template #footer>
			<p>{{ percent }}%</p>
		</template>
	</ProgressModal>

	<div v-if="!newListCreation">
		<select @change="onSelect($event)" v-model="selectedList">
			<option disabled>Select a list</option>
			<option v-for="option in listOptions">{{ option }}</option>
		</select>
		<input type="text" placeholder="Title" v-model="newPost.title" />
		<Dropover :post="newPost" @files-change="uploadfiles" />
		<div>
			<button @click="router.push('/')">Cancel</button>
			<button @click="post">Post</button>
		</div>
	</div>
	<div v-else>
		<p>New List</p>
		<input type="text" placeholder="List Name" v-model="newList.name" />
		<button @click="submitList">Done</button>
		<button
			@click="
				() => {
					newListCreation = false;
					selectedList = 'Select a list';
				}
			"
		>
			Cancel
		</button>
	</div>
</template>
