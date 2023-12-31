<script setup>
import ProgressModal from '@/components/Modal/ProgressModal.vue';
import Dropover from '@/components/Post/Dropover.vue';
import ConfirmModal from '@/components/Modal/ConfirmModal.vue';
import ListSearch from './ListSearch.vue';
import Markdown from '../Render/Markdown.vue';
import VueResizable from 'vue-resizable'

import { listsRef, } from '@/services/firebase';
import {
  doc,
  setDoc,
} from 'firebase/firestore';

import router from '@/router';
import { ref } from 'vue';

import { List, listConverter } from '@/classes/List';
import { Post } from '@/classes/Post';

import { getCurrentUserOrNew } from '@/services/auth.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const newPost = ref(new Post());
const file = ref({ name: '' });
const selectedLists = ref(new Set());
const newList = ref(new List(''));
const uploadModal = ref(false);
const percent = ref(0);
const mode = ref('media');
const open = ref(false);
const textMode = ref('edit');

async function post() {
  if (selectedLists.value.has('Select a list')) {
    alert('Must select a list or create a new one');
    return;
  } else if (newPost.value.title === '') {
    alert('Must enter a title');
    return;
  }
  // show upload modal
  uploadModal.value = true;
  const user = await getCurrentUserOrNew();

  const post = new Post(
    {
      title: newPost.value.title,
      username: user.username,
      lists: [...selectedLists.value],
      type: mode.value === 'media' ? 'image' : 'text',
      imageName: file.value.name,
      text: newPost.value.text,
    }
  );
  await post.post(file.value, percent);
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
</script>

<template>
  <ConfirmModal v-model:open="open" :show-icons="false">
    <template #header>
      <h1>Create a new list</h1>
    </template>
    <template #body>
      <input v-model="newList.name" type="text" placeholder="List name"
        class="border-2 border-neutral-300 rounded-md p-2 w-full">
    </template>
    <template #confirm>
      <button class="bg-accent text-white rounded-md p-2 hover:bg-accent-hover" @click="submitList">
        Submit
      </button>
    </template>
    <template #cancel>
      <button class="bg-accent text-white rounded-md p-2 hover:bg-accent-hover" @click="mode = 'media'">
        Cancel
      </button>
    </template>
  </ConfirmModal>

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
  <div class="grid h-full w-full gap-2 overflow-hidden">
    <div class="flex relative left-[25%]">
      <h1 class="text-2xl select-none">
        Create a post
      </h1>
    </div>
    <div class="grid h-full w-full place-items-center gap-2">
      <div class="w-[50%] flex flex-col gap-3">
        <hr class="w-full">
        <div class="border-2 grid grid-flow-col rounded-md">
          <button class="p-2 hover:bg-neutral-200 rounded-bl-[0.2rem]"
            :class="mode === 'media' ? 'border-b-4 border-b-accent' : ''" @click="mode = 'media'">
            Media
          </button>
          <button class="border-l-2 p-2 hover:bg-neutral-200" :class="mode === 'text' ? 'border-b-4 border-b-accent' : ''"
            @click="mode = 'text'">
            Text
          </button>
        </div>
        <div class="flex flex-col gap-2">
          <ListSearch :key="mode" v-model="selectedLists" @add-new-list="AddNewListModal" />
          <div class="flex gap-2">
            <div v-for="list in selectedLists" :key="list">
              <button
                class="border-2 border-gray-300 rounded-md p-2 flex gap-2 items-center bg-gray-100 hover:bg-gray-200"
                @click="() => selectedLists.delete(list)">
                <FontAwesomeIcon icon="times" class="text-red-500" />
                {{ list }}
              </button>
            </div>
          </div>
          <input v-model="newPost.title" type="text" placeholder="Title"
            class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent">
        </div>
        <div v-if="mode === 'media'" class="flex flex-col gap-2 w-full h-full">
          <Dropover :post="newPost" @files-change="uploadfiles" />
        </div>
        <div v-if="mode === 'text'" class="rounded-md border-2 border-neutral-300 flex flex-col w-full h-full">
          <div class="grid grid-flow-col rounded-md">
            <button class="p-2 hover:bg-neutral-200 border-r-2 border-b-2 border-neutral-300 rounded-bl-[0.2rem]"
              :class="textMode === 'edit' ? 'border-b-4 border-b-accent' : ''" @click="textMode = 'edit'">
              Edit
            </button>
            <button class="p-2 hover:bg-neutral-200 border-b-2"
              :class="textMode === 'preview' ? 'border-b-4 border-b-accent' : ''" @click="textMode = 'preview'">
              Preview
            </button>
          </div>
          <div>
            <textarea v-if="textMode === 'edit'" class="rounded-md w-full outline-none p-2 focus:border-accent"
              v-model="newPost.text" placeholder="Type your thoughts here..." rows="8" />
            <vue-resizable v-else class="min-h-[15rem]">
              <Markdown class="w-[950px] h-full overflow-scroll border-accent rounded-sm p-2" :src="newPost.text" />
            </vue-resizable>
          </div>
        </div>
        <div v-if="mode !== 'list'" class="flex flex-col gap-3">
          <hr class="w-full">
          <div class="flex gap-2">
            <!-- For the future: Tags -->
            <input v-model="newPost.tags" type="text" placeholder="Tags"
              class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent">
          </div>
          <div class="flex gap-2 justify-end">
            <button class="button" @click="router.push('/')">
              Cancel
            </button>
            <button class="button" @click="post">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
