<template>
  <Modal :open="open">
    <template #header>
      <span class="text-2xl font-bold">
        <slot name="header" />
      </span>
    </template>
    <template #body>
      <span>
        <div class="modal-body">
          <slot name="body" />
        </div>
      </span>
    </template>
    <template #footer>
      <div class="flex gap-2 sticky top-0 right-10 w-full justify-end">
        <slot name="footer" />
        <div
          v-if="showIcons"
          class="flex gap-1"
        >
          <button @click="onCancel">
            <font-awesome-icon
              :icon="['far', 'circle-xmark']"
              class="text-red-700"
            />
          </button>
          <button @click="onConfirm">
            <font-awesome-icon :icon="['far', 'check-circle']" />
          </button>
        </div>
        <div
          v-else
          class="flex gap-1"
        >
          <div @click="onCancel">
            <slot name="cancel" />
          </div>
          <div @click="onConfirm">
            <slot name="confirm" />
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import Modal from './Modal.vue';

defineProps({
	open: {
		type: Boolean,
		default: false,
	},
	onCancel: {
		type: Function,
		default: () => {},
	},
	onConfirm: {
		type: Function,
		default: () => {},
	},
	showIcons: {
		type: Boolean,
		default: true,
	},
});
</script>
