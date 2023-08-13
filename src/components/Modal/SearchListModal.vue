<template>
  <div
    class="transition-all bg-black"
    :class="
      open
        ? 'w-full h-full fixed top-0 left-0 p-0 m-0 opacity-50 visible'
        : 'opacity-0'
    "
  >
    <Teleport to="body">
      <div
        class="fixed z-[999] top-[20%] left-[50%] width-[300px] ml-[-150px] transition-all bg-white border-neutral-800 border-2 rounded-md p-5 flex flex-col gap-6"
        :class="open ? visible() : invisible()"
      >
        <div class="text-2xl font-bold">
          <div class="modal-header">
            <slot name="header" />
            <!--search box for an item in the list-->
            <div class="w-[85%] flex flex-row m-auto align-middle ml-[15px] mr-[15]">
              <input
                v-model="searchInput"
                type="text"
                name="searchQueryInput"
                placeholder="Search"
                class="w-full h-interact bg-accent outline-none text-white border-none rounded-[1.625rem] px-[1.5rem] text-[1rem]"
              >
              <button
                type="submit"
                name="searchQuerySubmit"
                class="w-14 h-6 ml-[-3.5rem] bg-none border-none outline-none m-auto"
                @click="onSearch"
              >
                <svg
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff88"
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </button>
            </div>
            <!--end of search box-->>
          </div>
        </div>
        <div class="flex flex-col">
          <span>
            <div class="modal-body">
              <slot name="body" />
            </div>
          </span>
          <span class="flex gap-2 sticky top-0 right-10 w-full justify-end">
            <div class="modal-footer">
              <slot name="footer" />
            </div>
            <button @click="onCancel">
              <font-awesome-icon
                :icon="['far', 'circle-xmark']"
                class="text-red-700"
              />
            </button>
          </span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const props = defineProps({
	open: {
		type: Boolean,
		default: false,
	},
	onCancel: {
		type: Function,
		default: () => {},
	},
	onSearch: {
		type: Function,
		default: () => {},
	},
});

function visible() {
	return 'transform translate-y-0 opacity-100';
}

function invisible() {
	return 'transform -translate-y-full opacity-0';
}
</script>
