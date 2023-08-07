<script setup>
import { ref, computed, nextTick } from "vue";
import { getDocs } from "firebase/firestore";
import { listsRef } from "@/services/firebase";
import { Search } from "../../services/Algorithm";

let props = defineProps(["modelValue"]);
defineEmits(["update:modelValue", "addNewList"]);

let expandList = ref(false);

const querySnapshot = await getDocs(listsRef);
let lists = ref(
	querySnapshot.docs
		.filter(
			(doc) =>
				doc.data().name.includes(props.modelValue) || props.modelValue === ""
		)
		.map((doc) => doc.data().name)
);

let options = computed(() => Search(props.modelValue, lists.value));

// Add a method to handle the unfocus event
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
	<div class="relative">
		<input
			type="text"
			placeholder="Search a list"
			:value="modelValue"
			class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
			@input="$emit('update:modelValue', $event.target.value)"
			@focus="expandList = true"
			@blur="handleBlur"
		/>
		<div
			v-if="expandList"
			class="bg-white absolute top-11 left-0 border-2 p-2 rounded-md grid place-items-start"
		>
			<button
				class="hover:bg-neutral-200 rounded-md p-2 w-full text-left"
				@click="
					($event) => {
						$emit('update:modelValue', $event.target.textContent);
						expandList = false;
					}
				"
				v-for="option in options"
			>
				{{ option }}
			</button>
			<button
				class="hover:bg-neutral-200 rounded-md p-2 w-full text-left"
				@click="
					() => {
						$emit('addNewList');
						expandList = false;
					}
				"
			>
				Add new list
			</button>
		</div>
	</div>
</template>
