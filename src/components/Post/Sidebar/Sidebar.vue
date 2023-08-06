<script setup>
import { Interaction as InteractionEnum } from "../../../classes/Interaction";
import Interaction from "../Interaction.vue";

import { Post } from "../../../classes/Post";
import { User } from "../../../classes/User";

let props = defineProps({
	user: {
		type: User,
		required: true,
	},
	post: {
		type: Post,
		required: true,
	},
});

function interact(interaction) {
	props.post.Interact(interaction, props.user);
}
</script>

<template>
	<div class="text-center border-black border-r-2">
		<Interaction
			class="object-cover w-[60px] rounded-full transition-all"
			text="like"
			icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/up-300x300.png"
			:click-fn="() => interact(InteractionEnum.Liked)"
			:class="
				post.interactions[user.username] === InteractionEnum.Liked
					? 'bg-blue-400'
					: 'hover:bg-accent hover:bg-opacity-40'
			"
		/>
		<span class="text-2xl select-none">{{ post.votes }}</span>
		<Interaction
			class="object-cover w-[60px] rounded-full"
			text="like"
			icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/down-300x300.png"
			:click-fn="() => interact(InteractionEnum.Disliked)"
			:class="
				post.interactions[user.username] === InteractionEnum.Disliked
					? 'bg-blue-400'
					: 'hover:bg-accent hover:bg-opacity-40'
			"
		/>
	</div>
</template>
