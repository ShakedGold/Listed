<script setup>
import { doc, updateDoc } from "firebase/firestore";
import { defineProps, ref } from "vue";
import { Interaction as InteractionEnum } from "../../../classes/Interaction";
import { Report as ReportArray } from "../../../classes/Report";
import { postsRef, usersRef } from "../../../scripts/firebase";
import ConfirmModal from "../../Modal/ConfirmModal.vue";
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
let open = ref(false);
let reports = ref(ReportArray);
let selectedReport = ref("");
let Reported = ref(true);
function interact(interaction) {
	if (props.user.postInteractions[props.post.ID] === interaction) {
		props.post.votes -= interaction;
		props.user.postInteractions[props.post.ID] = InteractionEnum.None;
	} else if (
		props.user.postInteractions[props.post.ID] !== InteractionEnum.None &&
		props.user.postInteractions[props.post.ID] !== undefined
	) {
		props.post.votes += 2 * interaction;
		props.user.postInteractions[props.post.ID] = interaction;
	} else {
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
	await updateDoc(userDocRef, {
		postInteractions: props.user.postInteractions,
	});
}

async function update() {
	await updatePost();
	await updateUser();
}
function Next() {
	Reported.value = false;
	props.user.reportedPosts[props.post.ID] = selectedReport.value;
	props.user.UpdateUser({ reportedPosts: props.user.reportedPosts });
}
function another() {
	Reported.value = true;

}
function Done() {
	open.value = false;
	Reported.value = true;

}
</script>

<template>
	<ConfirmModal :open="open" :on-cancel="() => (open = false)" :show-icons="false" v-if="Reported">
		<template #header>
			<h1 class="text-2xl">Report Post</h1>
		</template>
		<template #body>
			<form>
				<div class="flex flex-col">
					<span class="flex gap-1" v-for="(reportdetail, report) in reports">
						<input :value="report" name="report" type="radio" :id="report" v-model="selectedReport" />
						<div class="grid pl-1 pt-5">
							<label class="text-md md:font-bold" :for="report">{{ report }}</label>
							<span class="text-gray-400 text-md pl-2">{{ reportdetail }}</span>
						</div>
					</span>
				</div>
			</form>
		</template>
		<template #cancel>
			<button class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
				Cancel
			</button>
		</template>
		<template #confirm>
			<button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" @click="Next">
				Report
			</button>
		</template>
	</ConfirmModal>


	<ConfirmModal :open="open" :on-cancel="() => (open = false)" :show-icons="false" v-if="Reported === false">
		<template #header>
			<h1 class="text-2xl">Thank you for your report :)</h1>
		</template>
		<template #cancel>
			<button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" @click="Done">
				Done
			</button>
		</template>
		<template #confirm>
			<button class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full" @click="another">
				Report another
			</button>
		</template>

	</ConfirmModal>
	<div class="text-center border-black border-r-2 relative">
		<Interaction class="object-cover w-[60px]" text="like"
			icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/up-300x300.png"
			:click-fn="() => interact(InteractionEnum.Liked)" :class="user.postInteractions[post.ID] === InteractionEnum.Liked
				? 'bg-blue-400 rounded-3xl'
				: ''
				" />
		<span class="">{{ post.votes }}</span>
		<Interaction class="object-cover w-[60px]" text="like"
			icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/down-300x300.png"
			:click-fn="() => interact(InteractionEnum.Disliked)" :class="user.postInteractions[post.ID] === InteractionEnum.Disliked
				? 'bg-blue-400 rounded-3xl'
				: ''
				" />
		<Interaction class="object-cover w-[60px] absolute bottom-0" text=""
			icon-url="https://cdn-icons-png.flaticon.com/128/4201/4201965.png" :click-fn="Report"></Interaction>
	</div>
</template>
