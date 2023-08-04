<script setup>
import { getCurrentUserOrNew } from "@/scripts/auth.js"

import Sidebar from './Sidebar/Sidebar.vue';
import Body from './Body/Body.vue';

import { ref } from 'vue';

const props = defineProps({
    postObj: {},
});

let user = ref(await getCurrentUserOrNew());
</script>

<template>
    <div class="flex border-2 border-black">
        <Sidebar :user="user" :post="postObj" />

        <Body :post="postObj" />
    </div>
</template>