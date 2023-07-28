<script setup>
import { getCurrentUserOrNew } from '../../scripts/auth';
</script>

<template>
  <div id="profile">
    <router-link to="/"><img id="profile-photo" src="../../assets/logo/png/only-logo-no-background.png"
        alt="" /></router-link>
    <router-link to="/profile" id="profile-link">{{ getCurrentUserOrNew().username }}</router-link>
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

.main {
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

.dropzone-container {
  padding: 4rem;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}

.preview-container {
  display: flex;
  margin-top: 2rem;
}

.preview-card {
  display: flex;
  border: 1px solid #a2a2a2;
  padding: 5px;
  margin-left: 5px;
}

.preview-img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #a2a2a2;
  background-color: #a2a2a2;
}
</style>