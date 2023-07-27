<script setup>
import { ref } from 'vue'
import { getCurrentUser } from '../scripts/auth';
import { User } from '../classes/User';

let user = ref(getCurrentUser());
if (!user.value) user.value = new User();
</script>

<template>
  <div>
    <MenuBar />
  </div>
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
      followed lists:
    </h4>
    <h4>
      friends:
    </h4>
  </div>
</template>

<style>
#heading {
  color: var(--accent);
}
</style>