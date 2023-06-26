<script>

</script>

<template>
  <div id="profile">
    <router-link to="/"><p id="Logo"><img id="profile-photo" src="../../assets/logo/png/only-logo-no-background.png" alt="" /></p></router-link>
    <router-link to="/profile">Nizan</router-link>
  </div>
</template>

<style>
  #profile-photo {
    object-fit: contain;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  #profile {
    display: flex;
  }
</style>