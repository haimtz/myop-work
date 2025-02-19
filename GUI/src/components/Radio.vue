<script setup lang="ts">
import { onMounted, watch } from "vue";

const props = defineProps<{
  labels: string[];
}>();

const emits = defineEmits<{
  "update:modelValue": [value: string];
}>();

const data = defineModel({ default: "" });
onMounted(() => {
  data.value = props.labels[0] ?? "";
});

watch(data, () => {
  emits("update:modelValue", data.value);
});
</script>
<template>
  <label v-for="label in labels">
    <input type="radio" :value="label" v-model="data" />
    {{ label }}
  </label>
</template>
