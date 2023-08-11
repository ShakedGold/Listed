<script setup>
defineProps({
	text: {
		type: String,
		required: true,
	},
	iconUrl: {
		type: String,
		required: true,
	},
	clickFn: {
		type: Function,
		required: false,
		default: () => {},
	},
});
</script>

<template>
  <img
    :alt="text"
    :src="iconUrl"
    @click="clickFn"
  >
</template>