<template>
  <div class="card-archive">

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