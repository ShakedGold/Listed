<template>
  <div>
    <div>
      <h2 id="heading"><b>SignUp</b></h2>
    </div>
    <div>
      <input v-model="email" type="email" id="email" placeholder="Email"> <br>
      <input v-model="username" type="text" id="username" placeholder="Username"> <br>
      <p v-if="password.length != 0" id="password-info">
        Minimum eight characters, at least one uppercase letter,<br> one lowercase letter, one number and one special
        character
      </p>
      <input v-model="password" type="password" id="password" placeholder="Password">
    </div>
    <div>
      <button @click="() => {
        SignUp(email, password, username).then(() => {
          router.push('/');
        });
      }">Signup</button>
    </div>
  </div>
</template>

<script setup>
import { SignUp } from "@/scripts/auth.js"
import { ref } from "vue"
import router from "../router"

let username = ref("")
let password = ref("")
let email = ref("")

</script>

<style>
#password-info {
  font-size: small;
}

#heading {
  color: var(--accent);
}
</style>