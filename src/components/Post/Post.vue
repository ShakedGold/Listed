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
<<<<<<< HEAD

</template>

<style>
#post {
    display: flex;
    padding: 0%;
    width: 40%;
    border: solid 1px black;
}
#post-info {
    display: flex;
    flex-direction: row;
    gap: 10px;
    
    color: gray;
    font-size: small;
    margin-top: 0;
    margin-bottom: 0;
}

#post-actions {
    border-right: solid 1px black;
    width: 2em;
    text-align: center;
    font-weight: bold;
}

#post-body-info {
    padding-left: 10px;
    border-bottom: solid 1px black;
}

#post-body {
    width: 100%;
}

#post-title {
    margin-top: 0;
    margin-bottom: 0;
    background-color: transparent;
}

#post-img {
    object-fit: cover;
    width: 100%;
}

.vbutton {
    width: 100%;
    height: 10%;
    border: none;
    border-radius: 20%;
    margin: 50% 0% 50% 0%;
    background-color: transparent;
    align-items: top;
    font-size: 1.5em;
    font-weight: bold;
    color: black;

}

.vbutton:hover {
    cursor: pointer;
    background-color: #bfdbf7;
    color: black;
}

#post-votes {
    margin: 0%;
    padding: 0%;
    font-size: 1.2em;
    font-weight: bold;
    color: black;
}
</style>


=======
</template>
>>>>>>> 1b0a00d9506a652a31492331de8e7d1f6c94f744
