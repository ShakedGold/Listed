<script>

</script>

<template>
  <div id="profile">
    <router-link to="/"><img id="profile-photo" src="../../assets/logo/png/only-logo-no-background.png" alt="" /></router-link>
    <router-link to="/profile" id="profile-link">Nizan</router-link>
  </div>
</template>

<style>
  #profile-photo {
    object-fit: contain;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 20%;
  }
  #profile {
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }

  #profile-link {
    text-decoration: none;
  }

  /* unvisited link */
  #profile-link:link {
    color: black;
  }

  /* visited link */
  #profile-link:visited {
    color: black;
  }

  /* mouse over link */
  #profile-link:hover {
    color: #061A86;
  }

  /* selected link */
  #profile-link:active {
    color: #010C80;
  } 
</style>