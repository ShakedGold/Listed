<script>

</script>

<template>
  <div id="profile">
    <router-link to="/"><p id="Logo"><img id="profile-photo" src="https://images.unsplash.com/photo-1526588554903-b32eb4158064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" /></p></router-link>
    <router-link to="/profile"><p id="profile-name">Nizan</p></router-link>
  </div>
</template>

<style>
  #profile-photo {
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  #profile {
    display: flex;
  }
</style>