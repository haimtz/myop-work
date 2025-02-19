<script setup lang="ts">
defineProps<{
  text: string;
}>();

const emits = defineEmits<{
  click: [e: Event];
}>();

const click = (e: Event) => emits("click", e);
</script>
<template>
  <div class="button" @click="click">
    {{ text }}
  </div>
</template>
<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 2vw;
  border-radius: 2px;
  background-color: #2986f0;
  text-align: center;
  line-height: 48px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-right: 20px;
  cursor: pointer;
  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
</style>
