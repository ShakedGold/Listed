<template>
  <div>
    <div>
      <h2 id="heading"><b>Login</b></h2>
    </div>
    <div>
      <input v-model="username" type="text" id="username" placeholder="Username"> <br>
      <input v-model="password" type="password" id="password" placeholder="Password">
    </div>
    <div>
      <button @click="() => {
        Login(username, password).then(() => {
          router.push('/');
        });
      }">Login</button>
    </div>
  </div>
</template>

<script setup>
import { Login } from "@/scripts/auth.js"
import { ref } from "vue"
import router from "../router"

let username = ref("")
let password = ref("")
</script>

<style>
#password-info {
  font-size: small;
}
#heading {
  color: var(--accent);
}
</style>