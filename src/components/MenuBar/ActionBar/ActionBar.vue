<script setup>
import AddPost from "./AddPost.vue";
import Notifications from "./Notifications.vue";
</script>

<template>
	<div class="m-auto">
		<AddPost />
		<Notifications />
	</div>
</template>

<style>
#action-bar {
	display: flex;
	flex-direction: row;
	gap: 1rem;
}
#action {
	background-color: var(--accent);
	border: none;
	width: 100px;
	color: white;
	padding: 0.5rem 1rem;
	height: var(--interactable-height);
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 1rem;
	margin: 0.5rem 0.5rem;
	cursor: pointer;
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
