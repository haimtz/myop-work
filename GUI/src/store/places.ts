import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const PlacesStore = defineStore("places", () => {
  const list = ref([]);

  async function LoadData(page = 0) {
    list.value = await axios.get(`api/places?page=${page}`);
  }
  return { list, LoadData };
});
