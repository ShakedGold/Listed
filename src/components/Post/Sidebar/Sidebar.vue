<script setup>
import Interaction from '../Interaction.vue';
import { Interaction as InteractionEnum } from '../../../classes/Interaction';

import { doc, updateDoc } from 'firebase/firestore';

import { postsRef, usersRef } from '../../../scripts/firebase';
import { ref } from 'vue';
import ConfirmModal from '../../Modal/ConfirmModal.vue';

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
let open = ref(false);
let reports = ref([
  'Spam',
  'Inappropriate',
  'Other',
]);
let selectedReport = ref('');

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

function Report() {
  open.value = true;

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
console.log(selectedReport.value);
</script>

<template>
  <ConfirmModal :open="open" :on-cancel="() => open = false">
    <template #header>
      <h1 class="text-2xl">Report Post</h1>
    </template>
    <template #body>
      <form>
        <div class="flex flex-col">
          <span class="flex gap-1" v-for="report in reports">
            <input :value="report" name="report" type="radio" :id="report" v-model="selectedReport" />
            <label :for="report">{{ report }}</label>
          </span>
        </div>
      </form>
    </template>
  </ConfirmModal>
  <div class="text-center border-black border-r-2 relative">
    <Interaction class="object-cover w-[60px]" text="like"
      icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/up-300x300.png"
      :click-fn="() => interact(InteractionEnum.Liked)"
      :class="user.postInteractions[post.ID] === InteractionEnum.Liked ? 'bg-blue-400 rounded-3xl' : ''" />
    <span class="">{{ post.votes }}</span>
    <Interaction class="object-cover w-[60px]" text="like"
      icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/down-300x300.png"
      :click-fn="() => interact(InteractionEnum.Disliked)"
      :class="user.postInteractions[post.ID] === InteractionEnum.Disliked ? 'bg-blue-400 rounded-3xl' : ''" />
    <Interaction class="object-cover w-[60px] absolute bottom-0"
      icon-url="https://cdn-icons-png.flaticon.com/128/4201/4201965.png" :click-fn="Report"></Interaction>
  </div>
</template>