<script setup>
import { defineProps, ref } from "vue";
import { Interaction as InteractionEnum } from "../../../classes/Interaction";
import { Post } from "../../../classes/Post";
import { Report as ReportArray } from "../../../classes/Report";
import { User } from "../../../classes/User";
import ConfirmModal from "../../Modal/ConfirmModal.vue";
import Interaction from "../Interaction.vue";

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
let Reported = ref(false);
function interact(interaction) {
	props.post.Interact(interaction, props.user);
}

function Report() {
	open.value = true;
}
function Next() {
	Reported.value = true;
	props.post.Report(selectedReport.value, props.user);
}
function another() {
	Reported.value = false;
}
function Done() {
	open.value = false;
	Reported.value = false;
}
</script>

<template>
	<ConfirmModal
		:open="open"
		:on-cancel="() => (open = false)"
		:show-icons="false"
		v-if="!Reported"
	>
		<template #header>
			<h1 class="text-2xl">Report Post</h1>
		</template>
		<template #body>
			<form>
				<div class="flex flex-col">
					<span class="flex gap-1" v-for="(reportDetail, report) in reports">
						<input
							:value="report"
							name="report"
							type="radio"
							:id="report"
							v-model="selectedReport"
						/>
						<div class="grid">
							<label :for="report">{{ report }}</label>
							<span class="text-gray-400">{{ reportDetail }}</span>
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
				Next
			</button>
		</template>
	</ConfirmModal>

	<ConfirmModal
		:open="open"
		:on-cancel="() => (open = false)"
		:show-icons="false"
		v-if="Reported"
	>
		<template #header>
			<h1 class="text-2xl">Thank you for your report :)</h1>
		</template>
		<template #cancel>
			<button
				class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
				@click="Done"
			>
				Done
			</button>
		</template>
		<template #confirm>
			<button
				class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
				@click="another"
			>
				Report another
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
