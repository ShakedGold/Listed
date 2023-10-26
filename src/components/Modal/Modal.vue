<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:open']);

function visible() {
  return 'transform translate-y-0 opacity-100';
}

function invisible() {
  return 'transform -translate-y-full opacity-0';
}
function close() {
  emit('update:open', false);
}
</script>

<template>
  <Teleport to="body">
    <div class="transition-all grid place-items-center z-[999] duration-300" :class="open
      ? 'w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 p-0 m-0 visible opacity-100'
      : 'invisible opacity-0'
      " @click.self="close">
      <div
        class="fixed z-[999] width-[300px] transition-all bg-white border-neutral-800 border-2 rounded-md p-5 flex flex-col gap-6"
        :class="open ? visible() : invisible()">
        <div class="text-2xl font-bold">
          <slot name="header" />
        </div>
        <div class="flex flex-col">
          <slot name="body" />
        </div>
        <div class="flex">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>