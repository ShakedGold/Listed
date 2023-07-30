<template>
  <div class="transition-all bg-black"
    :class="open ? 'w-full h-full fixed top-0 left-0 p-0 m-0 opacity-50 visible' : 'opacity-0'">
    <Teleport to="body">
      <div class="modal transition-all bg-white border-neutral-800 border-2 rounded-md p-5 flex flex-col gap-6"
        :class="open ? visible() : invisible()">
        <div class="text-2xl font-bold">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
        </div>
        <div class="flex flex-col">
          <span>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
          </span>
          <span class="flex gap-2 sticky top-0 right-10 w-full justify-end">
            <div class="modal-footer">
              <slot name="footer">

              </slot>
            </div>
            <button @click="onCancel">
              <font-awesome-icon :icon="['far', 'circle-xmark']" class="text-red-700" />
            </button>
            <button @click="onConfirm">
              <font-awesome-icon :icon="['far', 'check-circle']" />
            </button>
          </span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
let props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  onCancel: {
    type: Function,
    default: () => { }
  },
  onConfirm: {
    type: Function,
    default: () => { }
  },
})

function visible() {
  return 'transform translate-y-0 opacity-100';
}

function invisible() {
  return 'transform -translate-y-full opacity-0';
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
