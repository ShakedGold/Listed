<script setup>
let props = defineProps({
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
  },
});
</script>

<template>
  <img @click="clickFn" :alt="text" :src="iconUrl" />
</template>