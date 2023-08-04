<script setup>
import { ref } from "vue";
import router from "../../router/index.js";

let searchInput = ref("");

async function search() {
	let searchText = searchInput.value;
  router.push({ name: 'List', params: { name: searchText} });
}
</script>

<template>
	<div class="w-[85%] flex flex-row m-auto align-middle ml-[15px] mr-[15]">
		<input type="text" name="searchQueryInput" placeholder="Search" v-model="searchInput"
			class="w-full h-interact bg-accent outline-none text-white border-none rounded-[1.625rem] px-[1.5rem] text-[1rem]" />
		<button type="submit" name="searchQuerySubmit" @click="search"
			class="w-14 h-6 ml-[-3.5rem] bg-none border-none outline-none m-auto">
			<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
				<path fill="#ffffff88"
					d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
			</svg>
		</button>
	</div>
</template>
