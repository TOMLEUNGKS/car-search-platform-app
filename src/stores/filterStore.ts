import { defineStore } from "pinia";
import useBaseFetch from "@/hooks/useBaseFetch";

import { IBaseFilter } from "@/model/SearchCar/filter";
import useStorage from "@/hooks/useStorage";
import useCarPost from "@/hooks/useCarPost";

import { updateSavedFilter } from "@/services/firebase";

const { store } = useStorage();

interface FilterState {
  keys: string[];
  filters: Record<string, string>;
}

export const useFilterStore = defineStore("filterStore", {
  state: (): FilterState => ({
    keys: [],
    filters: {},
  }),

  getters: {},

  actions: {
    async fetchFilterKeys() {
      // const keys = await store.keys();

      return this.keys;
    },
    async loadFilter(keys, values) {
      this.keys = keys;
      this.filters = values;
      console.log(values);
    },

    async fetchFilter(name) {
      // const filters = await store.get(name);
      return this.filters[name];
    },
    async saveFilter(name) {
      const { createSearchObject } = useCarPost();
      const obj = createSearchObject();
      // await store.set(name, JSON.stringify(obj));

      await updateSavedFilter(name, JSON.stringify(obj));
      this.filters[name] = JSON.stringify(obj);
      this.keys.push(name);
    },

    async removeFilter(name) {
      // await store.remove(name);
      await updateSavedFilter(name, null);
      // console.log(this.keys);
      const idx = this.keys.findIndex((ele) => ele == name);
      this.keys.splice(idx, 1);
    },
  },
});
