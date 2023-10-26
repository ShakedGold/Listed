<script setup>
import { ref } from 'vue';
import router from '../../router/index.js';

const searchInput = ref('');

/**
 
 */
async function search() {
  const searchText = searchInput.value;
  router.push({ name: 'List', params: { name: searchText } });
}
</script>

<template>
  <div class="gap-0 flex w-[85%] h-[2rem] bg-gray-700 bg-opacity-20 hover:bg-opacity-10 rounded-[1.625rem]">
    <button type="submit" name="searchQuerySubmit" class="cursor-default bg-none border-none outline-none m-auto ml-5"
      @click="search">
      <svg class="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#9ca3af"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
    </button>
    <input v-model="searchInput" type="text" name="searchQueryInput" placeholder="Search"
      class="text-[1rem] bg-gray-700 bg-opacity-0 ml-2 w-full outline-none border-none">
  </div>
</template>
