<script setup lang="ts">
defineProps<{
  title: string;
  subTitle: string;
  description: string;
}>();
</script>
<template>
  <section class="info-card">
    <div class="card-image">image</div>
    <div class="description">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../scss/mixin.scss" as mixin;

section {
  @include mixin.border();
  width: 100%;
  padding: var(--padding);
  display: grid;

  display: flex;
  column-gap: 0.3em;
  margin-bottom: 1em;

  .card-image {
    flex: 1 0 20%;
    @include mixin.border();
  }

  .description {
    flex: 1 0 80%;
  }
}
</style>
