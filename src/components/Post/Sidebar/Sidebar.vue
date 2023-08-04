<script setup>
import Interaction from '../Interaction.vue';
import { Interaction as InteractionEnum } from '../../../classes/Interaction';

import { doc, updateDoc } from 'firebase/firestore';

import { postsRef, usersRef } from '../../../scripts/firebase';

let props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  post: {
    type: Object,
    required: true,
  },
});

function interact(interaction) {
  if (props.user.postInteractions[props.post.ID] === interaction) {
    props.post.votes -= interaction;
    props.user.postInteractions[props.post.ID] = InteractionEnum.None;
  }
  else if (props.user.postInteractions[props.post.ID] !== InteractionEnum.None && props.user.postInteractions[props.post.ID] !== undefined) {
    props.post.votes += 2 * interaction;
    props.user.postInteractions[props.post.ID] = interaction;
  }
  else {
    props.user.postInteractions[props.post.ID] = interaction;
    props.post.votes += interaction;
  }

  if (props.user.postInteractions[props.post.ID] === InteractionEnum.None) {
    delete props.user.postInteractions[props.post.ID];
  }

  update();
}
async function updatePost() {
  const postDocRef = doc(postsRef, props.post.ID);
  await updateDoc(postDocRef, { votes: props.post.votes });
}

async function updateUser() {
  const userDocRef = doc(usersRef, props.user.username);
  await updateDoc(userDocRef, { postInteractions: props.user.postInteractions });
}

async function update() {
  await updatePost();
  await updateUser();
}
</script>

<template>
  <div class="text-center border-black border-r-2">
    <Interaction class="object-cover w-[60px] rounded-full" text="like"
      icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/up-300x300.png"
      :click-fn="() => interact(InteractionEnum.Liked)"
      :class="user.postInteractions[post.ID] === InteractionEnum.Liked ? 'bg-blue-400' : 'hover:bg-accent hover:bg-opacity-40'" />
    <span class="text-2xl select-none">{{ post.votes }}</span>
    <Interaction class="object-cover w-[60px] rounded-full" text="like"
      icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/down-300x300.png"
      :click-fn="() => interact(InteractionEnum.Disliked)"
      :class="user.postInteractions[post.ID] === InteractionEnum.Disliked ? 'bg-blue-400' : 'hover:bg-accent hover:bg-opacity-40'" />
  </div>
</template>