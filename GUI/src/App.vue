<script setup lang="ts">
import { ref } from "vue";
import Place from "./components/InfoCard.vue";
import Radio from "./components/Radio.vue";

import data from "./data";

const list = ref(data);
const typeUser = ref("local");
</script>

<template>
  <section class="wrapper">
    <header>
      <Radio :labels="['local', 'tourist']" v-model="typeUser" />
    </header>
    <div class="content" :class="{ local: typeUser == 'local' }">
      <Place
        v-for="item in list"
        :title="item.title"
        :sub-title="item.area"
        :description="item.description"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 50vw;
  padding: var(--padding);

  .content {
    width: 100%;
    &.local {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.3em;

      :deep(.info-card) {
        flex: 1 0 15vw;
        max-width: 15vw;
       
        .card-image {
          display: none;
        }
      }
    }
  }
}
</style>
