<script setup>
import { ref } from 'vue';
defineEmits(['sortChanged']);

const sortBy = ref({ By: 'Hot', Of: 'Week' });
const sortOptions = ref({
	Hot: undefined,
	New: undefined,
	Top: ['Hour', 'Day', 'Week', 'Month', 'Year', 'All Time'],
});
</script>

<template>
  <div class="grid place-content-center relative left-[-23%]">
    <div class="flex gap-2 border-2 rounded-md p-2 bg-gray-200 border-gray-500">
      <h3 class="select-none p-1">
        Sort By:
      </h3>
      <select
        id=""
        v-model="sortBy.By"
        class="bg-gray-200 cursor-pointer hover:border-gray-500 border-2 rounded-md p-1"
        name="sortby"
        @change="$emit('sortChanged', sortBy)"
      >
        <option
          v-for="sortOption in Object.keys(sortOptions)"
          :key="sortOption"
          :value="sortOption"
        >
          {{ sortOption }}
        </option>
      </select>
      <div
        v-if="sortBy.By === 'Top'"
        class="flex gap-2"
      >
        <h3 class="select-none p-1">
          Of
        </h3>
        <select
          v-model="sortBy.Of"
          name="sortof"
          class="bg-gray-200 cursor-pointer hover:border-gray-500 border-2 rounded-md p-1"
          @change="$emit('sortChanged', sortBy)"
        >
          <option
            v-for="sortOption in sortOptions[sortBy.By]"
            :key="sortOption"
            :value="sortOption"
          >
            {{ sortOption }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>