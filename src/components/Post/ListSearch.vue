<script setup>
import { ref, computed, nextTick } from 'vue';
import { getDocs } from 'firebase/firestore';
import { listsRef } from '@/services/firebase';
import { Search } from '../../services/Algorithm';

defineProps({
  modelValue: {
    type: Set,
    required: true,
  },
});
defineEmits(['update:modelValue', 'addNewList']);

const expandList = ref(false);
const searchTerm = ref('');
const selectedLists = ref(new Set());

const querySnapshot = await getDocs(listsRef);

const lists = ref(querySnapshot.docs.map((doc) => doc.data().name));
const options = computed(() => Search(searchTerm.value, lists.value, searchTerm.value !== '').concat('Add new list'));

const handleBlur = () => {
  // Use a timeout to check if a button was clicked before hiding the list
  setTimeout(() => {
    // wait for the next tick to ensure the button click event is handled
    nextTick(() => {
      expandList.value = false;
    });
  }, 100);
};
</script>

<template>
  <div class="relative z-50">
    <input v-model="searchTerm" type="text" placeholder="Search a list"
      class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent" @focus="expandList = true"
      @blur="handleBlur">
    <div v-if="expandList" class="bg-white absolute top-11 left-0 border-2 p-2 rounded-md grid place-items-start">
      <div v-for="option in options" :key="option" class="rounded-md w-full text-left flex gap-2">
        <button class="rounded-md p-2 w-full text-left hover:bg-gray-200" @click="() => {
          if (option === 'Add new list') {
            $emit('addNewList', searchTerm);
          } else {
            selectedLists = new Set([...modelValue]);
            selectedLists.add(option);
            $emit('update:modelValue', selectedLists);
          }
        }">
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>
