<script setup>
import ProgressModal from "@/components/Modal/ProgressModal.vue";
import Dropover from "@/components/Post/Dropover.vue";

import { listsRef, postsRef } from "@/scripts/firebase";
import {
	doc,
	getDocs,
	query,
	serverTimestamp,
	setDoc,
	where,
} from "firebase/firestore";

import router from "@/router";
import { ref } from "vue";

import { List, listConverter } from "@/classes/List";
import { Post, postConverter } from "@/classes/Post";

import { getCurrentUserOrNew } from "@/scripts/auth.js";
import { storage } from "@/scripts/storage";
import {
	ref as firebaseRef,
	getDownloadURL,
	uploadBytesResumable,
} from "firebase/storage";

let listOptions = ref(await getOptions());

let newPost = ref(new Post("", "", new List(), "", 0, serverTimestamp(), ""));
let file = ref({ name: "" });
let selectedList = ref("Select a list");
let newList = ref(new List(""));
let newListCreation = ref(false);
let uploadModal = ref(false);
let percent = ref(0);
let mode = ref("media");

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

	const q = query(listsRef, where("name", "==", selectedList.value));
	const querySnapshot = await getDocs(q);
	newPost.value.list = querySnapshot.docs[0].data();

	// get user
	getCurrentUserOrNew().then((user) => {
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
	mode.value = event.target.value === "Add new list" ? "list" : mode.value;
}

async function submitList() {
	mode.value = "media";

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
	<div class="grid h-full w-full gap-2">
		<div class="flex relative left-[25%]">
			<h1 class="text-2xl select-none">Create a post</h1>
		</div>
		<div class="grid h-full w-full place-items-center gap-2">
			<div class="w-[50%] flex flex-col gap-3">
				<hr class="w-full" />
				<div class="border-2 grid grid-flow-col rounded-md">
					<button
						@click="mode = 'media'"
						class="p-2 hover:bg-neutral-200"
						:class="mode === 'media' ? 'border-b-4 border-b-accent' : ''"
					>
						Media
					</button>
					<button
						@click="mode = 'text'"
						class="border-l-2 p-2 hover:bg-neutral-200"
						:class="mode === 'text' ? 'border-b-4 border-b-accent' : ''"
					>
						Text
					</button>
					<button
						@click="mode = 'files'"
						class="border-l-2 p-2 hover:bg-neutral-200"
						:class="mode === 'files' ? 'border-b-4 border-b-accent' : ''"
					>
						Files
					</button>
				</div>
				<div class="flex flex-col gap-2">
					<select
						@change="onSelect($event)"
						v-model="selectedList"
						class="w-[20%] bg-transparent border-2 outline-none rounded-md p-2 cursor-pointer"
					>
						<option disabled>Select a list</option>
						<option v-for="option in listOptions">{{ option }}</option>
					</select>
					<input
						type="text"
						placeholder="Title"
						v-model="newPost.title"
						class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
					/>
				</div>
				<div v-if="mode === 'media'" class="flex flex-col gap-2 w-full h-full">
					<Dropover :post="newPost" @files-change="uploadfiles" />
				</div>
				<div v-if="mode === 'text'" class="flex flex-col gap-2 w-full h-full">
					<textarea
						v-model="newPost.text"
						class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
						placeholder="Type your thoughts here..."
						rows="8"
					></textarea>
				</div>
				<div v-if="mode === 'files'" class="flex flex-col gap-2 w-full h-full">
					<Dropover :post="newPost" @files-change="uploadfiles" />
				</div>
				<div class="flex flex-col gap-3" v-if="mode !== 'list'">
					<hr class="w-full" />
					<div class="flex gap-2">
						<!-- For the future: Tags -->
						<input
							type="text"
							placeholder="Tags"
							v-model="newPost.tags"
							class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
						/>
					</div>
					<div class="flex gap-2 justify-end">
						<button @click="router.push('/')" class="button">Cancel</button>
						<button @click="post" class="button">Post</button>
					</div>
				</div>
				<div v-if="mode === 'list'">
					<p>New List</p>
					<input type="text" placeholder="List Name" v-model="newList.name" />
					<button @click="submitList">Done</button>
					<button
						@click="
							() => {
								mode = 'media';
								selectedList = 'Select a list';
							}
						"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
