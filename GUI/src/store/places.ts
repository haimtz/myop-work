import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const PlacesStore = defineStore("places", () => {
  const list = ref<{ data: any[]; total: number; limit: number }>({
    data: [],
    total: 0,
    limit: 0,
  });

  async function LoadData(page = 0) {
    const result = await axios.get(`http://localhost:3000/places?page=${page}`);
    if (result) {
      list.value = result.data;
    }
  }
  return { list, LoadData };
});
