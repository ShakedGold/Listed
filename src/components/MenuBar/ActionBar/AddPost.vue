<script setup>
</script>

<template>
  <div>
    <router-link to="/post"><button>Add Post</button></router-link>
  </div>
</template>

<style>
  button {
    background-color: #28127d;
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

  button:hover {
    background-color: #4e4aa3;
  }

  button:active {
    background-color: #28127d;
  }

  button:focus {
    outline: none;
  }

  button:disabled {
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