<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Place from "./components/InfoCard.vue";
import Radio from "./components/Radio.vue";
import Buttons from "./components/Buttons.vue";

import { PlacesStore } from "./store/places";

const typeUser = ref("local");
const placesState = PlacesStore();

onMounted(() => {
  placesState.LoadData().then(() => {});
});

const getNextPage = (page: string) => {
  const value = (parseInt(page) - 1) * placesState.list.limit;

  placesState.LoadData(value).then(() => {});
};

const list = computed(() => placesState.list.data);
const buttons = computed(() => {
  if (placesState.list.total == 0) {
    return 0;
  }
  return (
    Math.round(placesState.list.total / placesState.list.limit) +
    (placesState.list.total % placesState.list.limit ? 1 : 0)
  );
});
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
    <footer>
      <Buttons v-for="b in buttons" :text="b" @click="() => getNextPage(b)" />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 60vw;
  padding: var(--padding);

  .content {
    width: 100%;
    max-height: 60vh;
    overflow: auto;
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

  footer {
    display: flex;
  }
}
</style>
