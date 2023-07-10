
<template>
    <div>
        <div>
            <h2  id="heading"><b>Login</b></h2>
        </div>

        <div>
            <input type="text" id="user_name" placeholder="User name"> <br>
            <input type="email" id="email" placeholder="Email"> <br>
            <input type="password" id="password" placeholder="Password">
        </div>
        <div>
            <button @click="login()">Login</button>
            <button @click="signup()">Signup</button>
        </div>
    </div>
  </template>

<script src=""></script>

<script setup>
import MenuBar from "@/scripts/firebase.js"

</script>

  <style>
  #heading {
    color: var(--accent);
  }
  </style>