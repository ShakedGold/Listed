<script setup>
import { ref } from "vue";
import { doc, getDocs, setDoc } from "firebase/firestore";
import { listsRef } from "@/scripts/firebase";

let props = defineProps(["modelValue", "mode"]);
defineEmits(["update:modelValue", "addNewList"]);

let expandList = ref(false);
let lists = ref(await getOptions());
let options = ref(lists.value);

async function getOptions() {
	let lists = [];
	const querySnapshot = await getDocs(listsRef);
	querySnapshot.forEach((doc) => {
		if (doc.data().name.includes(props.modelValue) || props.modelValue === "")
			lists.push(doc.data().name);
	});
	return lists;
}

function Search(value = "") {
	return lists.value.filter(
		(option) =>
			option.toLowerCase().includes(value.toLowerCase()) || value === ""
	);
}
</script>

<template>
	<div v-if="mode === 'regular'" class="relative">
		<input
			type="text"
			placeholder="Search a list"
			:value="modelValue"
			class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
			@input="
				($event) => {
					$emit('update:modelValue', $event.target.value);
					options = Search($event.target.value);
				}
			"
			@click="
				() => {
					expandList = !expandList;
					options = Search();
				}
			"
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
				v-if="options.length === 0"
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
	<div v-if="mode === 'compact'">
		<select
			@change="$emit('update:modelValue', $event.target.value)"
			:value="modelValue"
			class="w-[20%] bg-transparent border-2 outline-none rounded-md p-2 cursor-pointer"
		>
			<option disabled>Select a list</option>
			<option v-for="option in listOptions">{{ option }}</option>
		</select>
	</div>
</template>
