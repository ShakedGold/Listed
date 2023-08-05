<template>
	<div class="transition-all bg-black" :class="open
		? 'w-full h-full fixed top-0 left-0 p-0 m-0 opacity-50 visible'
		: 'opacity-0'
		">
		<Teleport to="body">
			<div class="fixed z-[999] top-[20%] left-[50%] width-[300px] ml-[-150px] transition-all bg-white border-neutral-800 border-2 rounded-md p-5 flex flex-col gap-6"
				:class="open ? visible() : invisible()">
				<div class="text-2xl font-bold">
					<slot name="header"></slot>
				</div>
				<div class="flex flex-col">
					<slot name="body"></slot>
				</div>
				<div class="flex">
					<slot name="footer"> </slot>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script setup>
let props = defineProps({
	open: {
		type: Boolean,
		default: false,
	},
});

function visible() {
	return "transform translate-y-0 opacity-100";
}

function invisible() {
	return "transform -translate-y-full opacity-0";
}
</script>
