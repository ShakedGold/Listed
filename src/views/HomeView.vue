<script setup>
import Post from "@/components/Post/Post.vue"
//array of all the posts
var posts = [];

// Function to get the number of likes for a post
function getLikes(post) {
  return Post.postVotes;
}

// Function to sort the posts by likes
function sortPostsByLikes() {
  posts.sort(function(a, b) {
    return getLikes(b) - getLikes(a);
  });

  renderPosts();
}

function renderPosts() {
  var container = document.getElementById('postsContainer');
  container.innerHTML = '';

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];

    var postElement = document.createElement('div');
    postElement.textContent = post.title + ' - Likes: ' + post.postVotes;

    container.appendChild(postElement);
  }
}

// Initial rendering of posts
renderPosts();
</script>

<template>  
    <button @click="arrange()">Refresh</button>
    <Post />
    <Post />
    <Post />

</template>

<style>
body {
    background-color: #e7ecef;
    margin: 0;
    padding: 0;
    font-size: 1.5em;
    color: black;
}
</style> 