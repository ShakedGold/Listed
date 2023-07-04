<script setup>
const props = defineProps({
    list: {},
})
</script>

<template>
    <p>{{ list.name }}</p>
</template>