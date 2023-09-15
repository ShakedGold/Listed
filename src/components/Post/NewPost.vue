<script setup>
import ProgressModal from '@/components/Modal/ProgressModal.vue';
import Dropover from '@/components/Post/Dropover.vue';
import ConfirmModal from '@/components/Modal/ConfirmModal.vue';
import ListSearch from './ListSearch.vue';
import { FastAverageColor } from 'fast-average-color';

import { listsRef, postsRef } from '@/services/firebase';
import {
	doc,
	setDoc,
	serverTimestamp,
	updateDoc,
} from 'firebase/firestore';

import router from '@/router';
import { ref } from 'vue';

import { List, listConverter } from '@/classes/List';
import { Post, postConverter } from '@/classes/Post';

import { getCurrentUserOrNew } from '@/services/auth.js';
import { storage } from '@/services/storage';
import {
	ref as firebaseRef,
	getDownloadURL,
	uploadBytesResumable,
} from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const newPost = ref(new Post());
const file = ref({ name: '' });
const selectedLists = ref(new Set());
const newList = ref(new List(''));
const uploadModal = ref(false);
const percent = ref(0);
const mode = ref('media');
const open = ref(false);

async function post() {
	if (selectedLists.value.has('Select a list')) {
		alert('Must select a list or create a new one');
		return;
	} else if (newPost.value.title === '') {
		alert('Must enter a title');
		return;
	}
	
	newPost.value.lists = [...selectedLists.value];

	// get user
	getCurrentUserOrNew().then((user) => {
		newPost.value.username = user.username;

		// create post
		const ref = doc(postsRef).withConverter(postConverter);

		// set post ID to doc ID
		newPost.value.ID = ref.id;

		// show upload modal
		uploadModal.value = true;

		// set average color
		getAverageColor(file.value).then((color) => {
			newPost.value.color = color;
		});

		const storageRef = firebaseRef(
			storage,
			`/uploads/${newPost.value.ID}/${file.value.name}`
		);
		const uploadTask = uploadBytesResumable(storageRef, file.value);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				percent.value = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
			},
			(err) => console.log(err),
			() => {
				// download url
				getDownloadURL(uploadTask.snapshot.ref).then(async (/* url */) => {
					await setDoc(ref, newPost.value);
					await updateDoc(ref, {
						created: serverTimestamp()
					});

					// move to HomeView
					router.push('/');
				});
			}
		);
	});
}
/**
 * @param {DragEvent} e the event
 */
function uploadfiles(e) {
	if (e.dataTransfer)
		file.value = e.dataTransfer.files[0];
	else
		file.value = e.target.files[0];
	newPost.value.imageName = file.value.name;
}

function AddNewListModal(searchTerm) {
	mode.value = 'list';
	open.value = true;
	newList.value = new List(searchTerm);
}

function submitList() {
	if (newList.value.name === '') {
		alert('Must enter a name');
		return;
	}

	const ref = doc(listsRef).withConverter(listConverter);
	newList.value.ID = ref.id;
	setDoc(ref, newList.value);

	selectedLists.value.add(newList.value.name);
	mode.value = 'media';
}
function getAverageColor(file) {
	const path = URL.createObjectURL(file);
	const fac = new FastAverageColor();
	return new Promise((resolve) => {
		fac.getColorAsync(path, { algorithm: 'sqrt' }).then((color) => {
			resolve(color);
		});
	});
}
</script>

<template>
  <ConfirmModal
    v-model:open="open"
    :show-icons="false"
  >
    <template #header>
      <h1>Create a new list</h1>
    </template>
    <template #body>
      <input
        v-model="newList.name"
        type="text"
        placeholder="List name"
        class="border-2 border-neutral-300 rounded-md p-2 w-full"
      >
    </template>
    <template #confirm>
      <button
        class="bg-accent text-white rounded-md p-2 hover:bg-accent-hover"
        @click="submitList"
      >
        Submit
      </button>
    </template>
    <template #cancel>
      <button
        class="bg-accent text-white rounded-md p-2 hover:bg-accent-hover"
        @click="mode = 'media'"
      >
        Cancel
      </button>
    </template>
  </ConfirmModal>

  <ProgressModal
    :open="uploadModal"
    :progress="percent"
  >
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
      <h1 class="text-2xl select-none">
        Create a post
      </h1>
    </div>
    <div class="grid h-full w-full place-items-center gap-2">
      <div class="w-[50%] flex flex-col gap-3">
        <hr class="w-full">
        <div class="border-2 grid grid-flow-col rounded-md">
          <button
            class="p-2 hover:bg-neutral-200 rounded-bl-[0.2rem]"
            :class="mode === 'media' ? 'border-b-4 border-b-accent' : ''"
            @click="mode = 'media'"
          >
            Media
          </button>
          <button
            class="border-l-2 p-2 hover:bg-neutral-200"
            :class="mode === 'text' ? 'border-b-4 border-b-accent' : ''"
            @click="mode = 'text'"
          >
            Text
          </button>
        </div>
        <div class="flex flex-col gap-2">
          <ListSearch
            :key="mode"
            v-model="selectedLists"
            @add-new-list="AddNewListModal"
          />
          <div class="flex gap-2">
            <div
              v-for="list in selectedLists"
              :key="list"
            >
              <button
                class="border-2 border-gray-300 rounded-md p-2 flex gap-2 items-center bg-gray-100 hover:bg-gray-200"
                @click="() => selectedLists.delete(list)"
              >
                <FontAwesomeIcon
                  icon="times"
                  class="text-red-500"
                />
                {{ list }}
              </button>
            </div>
          </div>
          <input
            v-model="newPost.title"
            type="text"
            placeholder="Title"
            class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
          >
        </div>
        <div
          v-if="mode === 'media'"
          class="flex flex-col gap-2 w-full h-full"
        >
          <Dropover
            :post="newPost"
            @files-change="uploadfiles"
          />
        </div>
        <div
          v-if="mode === 'text'"
          class="flex flex-col gap-2 w-full h-full"
        >
          <textarea
            v-model="newPost.text"
            class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
            placeholder="Type your thoughts here..."
            rows="8"
          />
        </div>
        <div
          v-if="mode === 'files'"
          class="flex flex-col gap-2 w-full h-full"
        >
          <Dropover
            :post="newPost"
            @files-change="uploadfiles"
          />
        </div>
        <div
          v-if="mode !== 'list'"
          class="flex flex-col gap-3"
        >
          <hr class="w-full">
          <div class="flex gap-2">
            <!-- For the future: Tags -->
            <input
              v-model="newPost.tags"
              type="text"
              placeholder="Tags"
              class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
            >
          </div>
          <div class="flex gap-2 justify-end">
            <button
              class="button"
              @click="router.push('/')"
            >
              Cancel
            </button>
            <button
              class="button"
              @click="post"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
