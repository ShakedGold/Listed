<template>
    <div id="post">
        <div id="post-actions">
         <button class="vbutton">&#x2191;</button> 
         <button class="vbutton">&#x21c5;</button>
         <button class="vbutton">&#x2193;</button>
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
    height: 475px;
    border: solid 1px black;
}
#post-actions {
    border-right: solid 1px black;
    height: 100%;
    width: 2em ;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    height: 90%;
}
.vbutton {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 1.5em;
    font-weight: bold;
    color: black;
}

</style>