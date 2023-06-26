<script setup>
import AddPost from './AddPost.vue'
import Notifications from './Notifications.vue'
</script>

<template>
  <div id="container">
    <div id="action-bar">
      <AddPost />
      <Notifications />
    </div>
  </div>
</template>

<style>
  #action-bar {
    display: flex;
    gap: 1rem;
  }
  #action {
    background-color: #061A86;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin: 0.5rem 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition-duration: 0.2s;
  }

  #action:hover {
    background-color: #4e4aa3;
  }

  #action:active {
    background-color: #28127d;
  }

  #action:focus {
    outline: none;
  }

  #action:disabled {
    background-color: #28127d;
    opacity: 0.5;
    cursor: not-allowed;
  }

  /*add animations*/
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>