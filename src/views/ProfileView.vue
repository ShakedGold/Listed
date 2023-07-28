<script setup>
import { ref } from 'vue'
import { getCurrentUserOrNew, SignOut } from '../scripts/auth';

let user = ref(getCurrentUserOrNew());
</script>

<template>
  <div>
    <h1 id="heading"><b>Profile</b></h1>
    <hr style="width:15%;text-align:left;margin-left:0;color:gray;">
  </div>
  <div>
    <h4>
      Username: {{ user.username }}
    </h4>
    <h4>
      Email address: {{ user.email }}
    </h4>
    <h4>
      Following: {{ user.following }}
    </h4>
    <h4>
      friends:
    </h4>
  </div>
  <button @click="SignOut()">SignOut</button>
</template>

<style>
#heading {
  color: var(--accent);
}
</style>