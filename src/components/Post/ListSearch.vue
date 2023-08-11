<script setup>
import { ref, computed, nextTick } from "vue";
import { getDocs } from "firebase/firestore";
import { listsRef } from "@/services/firebase";
import { Search } from "../../services/Algorithm";

let props = defineProps(["modelValue"]);
let emit = defineEmits(["update:modelValue", "addNewList"]);

let expandList = ref(false);
let selected = ref(0);
let isHovering = ref(false);

const querySnapshot = await getDocs(listsRef);

let lists = ref(
	querySnapshot.docs
		.filter(
			(doc) =>
				doc.data().name.includes(props.modelValue) || props.modelValue === ""
		)
		.map((doc) => doc.data().name)
);
let options = computed(() =>
	Search(props.modelValue, lists.value, props.modelValue === "").concat(
		"Add new list"
	)
);

const handleBlur = () => {
	// Use a timeout to check if a button was clicked before hiding the list
	setTimeout(() => {
		// wait for the next tick to ensure the button click event is handled
		nextTick(() => {
			expandList.value = false;
		});
	}, 100);
};

const handleKeyDown = (event) => {
	const index = selected.value || 0;
	isHovering.value = false;
	switch (event.key) {
		case "ArrowDown":
			event.preventDefault();
			// if the current selected item is the last item in the list, select the first item
			if (index + 1 >= options.value.length) {
				//emit("update:modelValue", options.value[0]);
				selected.value = 0;
			} else {
				// select the next item in the list
				//emit("update:modelValue", options.value[index + 1]);
				selected.value = index + 1;
			}
			break;
		case "ArrowUp":
			event.preventDefault();
			// if the current selected item is the last item in the list, select the first item
			if (index - 1 < 0) {
				// select the next item in the list
				//emit("update:modelValue", options.value[index + 1]);
				selected.value = options.value.length - 1;
			} else {
				// select the next item in the list
				//emit("update:modelValue", options.value[index + 1]);
				selected.value = index - 1;
			}
			break;
		case "Enter":
			event.preventDefault();
			if (options.value[index] === "Add new list") {
				emit("addNewList");
			} else {
				emit("update:modelValue", options.value[index]);
			}
			expandList.value = false;
			selected.value = 0;
			break;
	}
};
</script>

<template>
	<div class="relative" @keydown="handleKeyDown">
		<input
			type="text"
			placeholder="Search a list"
			:value="modelValue"
			class="border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent"
			@input="
				($event) => {
					$emit('update:modelValue', $event.target.value);
					expandList = true;
				}
			"
			@focus="expandList = true"
			@blur="handleBlur"
		/>
		<div
			v-if="expandList"
			class="bg-white absolute top-11 left-0 border-2 p-2 rounded-md grid place-items-start"
		>
			<button
				class="rounded-md p-2 w-full text-left"
				@mouseenter="
					() => {
						isHovering = true;
						selected = options.indexOf(option);
					}
				"
				@mouseleave="isHovering = false"
				:class="{
					'bg-neutral-200': option === options[selected] && !isHovering,
					'hover:bg-neutral-200': isHovering,
				}"
				@mousemove="
					() => {
						if (!isHovering) {
							selected = options.indexOf(option);
						}
					}
				"
				@click="
					($event) => {
						$emit(
							'update:modelValue',
							$event.target.textContent === 'Add new list'
								? $emit('addNewList')
								: option
						);
						expandList = false;
					}
				"
				v-for="option in options"
			>
				{{ option }}
			</button>
		</div>
	</div>
</template>
