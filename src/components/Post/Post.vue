<template>
    <div id="post">
        <div id="post-actions">
            <p class="Votes">Upvote</p>
        </div>
        <div id="post-body">
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
    border: solid 1px black;
}
#post-actions {
    background-color: rgb(0, 255, 0);
}
#post-body {
    width: 100%;
}
#post-title {
    width: 100%;
    height: 10%;
    margin-top: 0%;
    margin-bottom: 0%;
    background-color: red;
}
#post-img {
    margin-top: 0%;
    object-fit: cover;
    width: 100%;
    height: 90%;
}
.Votes{
    background-color: rgb(0, 255, 0);
    height: 15em;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    font-weight: bold;
}
</style>