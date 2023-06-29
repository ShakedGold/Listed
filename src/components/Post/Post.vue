<script setup>
///import Profile from "././components/MenuBar/ActionBar/Profile.vue"
import { ref } from "vue";
let postVotes = ref(0);
</script>

<template>
    <div id="post">
        <div id="post-actions">
            <!--UpVote--><img id="Ubutton" class="vbutton" @click="postVotes++" src="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/up-300x300.png" />
            <!--NumOfVotes--><span id="post-votes">{{postVotes}}</span>
            <!--DownVote--><img id="Dbutton" class="vbutton" @click="postVotes--" src="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/down-300x300.png" />
        </div>
        <div id="post-body">
            <p id="post-info">Uploaded by Nizan - 7 hours ago</p>
            <p id="post-title">This is water</p>
            <img id="post-img"
                src="https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt=""/>
        </div>
    </div>
</template>

<style>


#post {
    display: flex;
    padding: 0%;
    width: 650px;
    height: 475px;
    border: solid 1px black;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 5%;
    margin-bottom: 5%;
}
#post-info{
    color:gray;
    font-size: small;
    text-align: right;
    margin-top: 0;
    margin-bottom: 0;
}
#post-actions {
    border-right: solid 1px black;
    height: 100%;
    width: 2em ;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
}
#post-body {
    width: 100%;
}
#post-title {
    width: 100%;
    height: 10%;
    margin-top: 0%;
    margin-bottom: 0%;
    border-bottom: solid 1px black;
    background-color: transparent;
}
#post-img {
    margin-top: 0%;
    object-fit: cover;
    width: 100%;
    height: 87%;
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

