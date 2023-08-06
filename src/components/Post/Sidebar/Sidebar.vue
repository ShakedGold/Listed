<script setup>
import { Interaction as InteractionEnum } from "../../../classes/Interaction";
import { Report as ReportArray } from "../../../classes/Report";
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

function interact(interaction) {
	props.post.Interact(interaction, props.user);
}
function Next() {
	open.value = false;
	alert("Post Reported thanks for your feedback");
	props.user.reportedPosts[props.post.ID] = selectedReport.value;
	props.user.UpdateUser({ reportedPosts: props.user.reportedPosts });
}
</script>

<template>
	<ConfirmModal
		:open="open"
		:on-cancel="() => (open = false)"
		:show-icons="false"
	>
		<template #header>
			<h1 class="text-2xl">Report Post</h1>
		</template>
		<template #body>
			<form>
				<div class="flex flex-col">
					<span class="flex gap-1" v-for="(reportdetail, report) in reports">
						<input
							:value="report"
							name="report"
							type="radio"
							:id="report"
							v-model="selectedReport"
						/>
						<div class="grid pl-1 pt-5">
							<label class="text-md md:font-bold" :for="report">{{
								report
							}}</label>
							<span class="text-gray-400 text-md pl-2">{{ reportdetail }}</span>
						</div>
					</span>
				</div>
			</form>
		</template>
		<template #cancel>
			<button
				class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
			>
				Cancel
			</button>
		</template>
		<template #confirm>
			<button
				class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
				@click="Next"
			>
				Report
			</button>
		</template>
	</ConfirmModal>
	<div class="text-center border-black border-r-2 relative">
		<Interaction
			class="object-cover w-[60px]"
			text="like"
			icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/up-300x300.png"
			:click-fn="() => interact(InteractionEnum.Liked)"
			:class="
				post.interactions[user.username] === InteractionEnum.Liked
					? 'bg-blue-400 rounded-3xl'
					: ''
			"
		/>
		<span class="">{{ post.votes }}</span>
		<Interaction
			class="object-cover w-[60px]"
			text="like"
			icon-url="https://media.geeksforgeeks.org/wp-content/uploads/20220529211152/down-300x300.png"
			:click-fn="() => interact(InteractionEnum.Disliked)"
			:class="
				post.interactions[user.username] === InteractionEnum.Disliked
					? 'bg-blue-400 rounded-3xl'
					: ''
			"
		/>
		<Interaction
			class="object-cover w-[60px] absolute bottom-0"
			text=""
			icon-url="https://cdn-icons-png.flaticon.com/128/4201/4201965.png"
			:click-fn="Report"
		></Interaction>
	</div>
</template>
