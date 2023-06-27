<template>
    <div id="post">
        <div id="post-actions">
            <p>Upvote</p>
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
    display: grid;
    justify-content: center;
    align-items: center;
}
#post-actions {
    background-color: rgb(0, 255, 0);
}
#post-body {
    width: 30%;
}
#post-title {
    background-color: red;
}
#post-img {
    object-fit: cover;
    width: 500px;
}
</style>