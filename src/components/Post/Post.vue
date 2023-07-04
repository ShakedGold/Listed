<script setup>
import { updateDoc, doc } from 'firebase/firestore';
import { postRef } from "@/scripts/firebase"

import PostList from "@/components/List/PostList.vue"

const props = defineProps({
    postObj: {},
})

function convertTime(time) {
    let elapsedTime = Math.floor(Date.now() / 1000 - time.seconds);
    let minutes = Math.floor(elapsedTime / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let month = Math.floor(days / 30);
    let year = Math.floor(month / 12);

    if (minutes < 60) return minutes + "m";
    else if (hours < 24) return hours + "h";
    else if (days < 30) return days + "d";
    else if (month < 12) return month + "m";
    else return year + "y";
}

async function vote(vote) {
    props.postObj.votes = vote;
    const postDocRef = doc(postRef, props.postObj.ID);
    await updateDoc(postDocRef, { votes: vote });
}
</script>

<template>
    <div id="post">
        <div id="post-actions">
            <img id="Ubutton" class="vbutton" @click="vote(postObj.votes + 1)"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/up-300x300.png" />
            <span id="post-votes">{{ postObj.votes }}</span>
            <img id="Dbutton" class="vbutton" @click="vote(postObj.votes - 1)"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/down-300x300.png" />
        </div>
        <div id="post-body">
            <div id="post-body-info">
                <div id="post-info">
                    <PostList :list="postObj.list"/>
                    <p>Uploaded by {{ postObj.author }} - {{ convertTime(postObj.time) }} ago</p>
                </div>
                <p id="post-title">{{ postObj.title }}</p>
            </div>
            <img id="post-img"
                src="https://source.unsplash.com/random/500x500"
                alt="" />
        </div>
    </div>

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


