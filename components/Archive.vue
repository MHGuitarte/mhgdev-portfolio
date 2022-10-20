<template>
  <div class="card-archive">
    <nav class="lg:w-full">
      <ul class="flex flex-row">
        <li
          class="card-archive-item"
          v-for="value in experienceList"
          @click="setSelectedExperience(value)"
        >
          {{ value.from }} - {{ value.to }}
        </li>
      </ul>
    </nav>
    <div class="archive-details lg:w-full lg:h-64"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  experienceList: {
    type: Array,
    required: true,
  },
});

const selected = ref(props.experienceList[0]);

const setSelectedExperience = (entry) => {
  console.log(entry.id);
  selected.value = props.experienceList.find((exp) => exp.id === entry.id);
};
</script>

<style scoped>
.card-archive-item {
  @apply lg:p-2 lg:bg-primary lg:border-variant lg:border-t-1 lg:border-x-1;
  cursor: pointer;
}

.card-archive-item.selected {
  z-index: 100;
  cursor: default;
}

.archive-details {
  @apply lg:bg-primary lg:border-variant lg:border-1;
}
</style>
