import { defineStore } from "pinia";
import useBaseFetch from "@/hooks/useBaseFetch";
import useModelDetailsTemp from "@/hooks/search/useModelDetailsTemp";
import CarModelDetailsFilter from "@/model/SearchCar/CarModelDetailsFilter";

import { ComputedRef, computed } from "vue";

interface ModelDetailsState {
  getFilterList(category: string): ComputedRef<string[]>;
  generationList: string[];
  versionList: string[];
  dependArray: boolean[][];
}

export const useModelDetailsStore = defineStore("modelDetailsStore", {
  state: (): ModelDetailsState => ({
    getFilterList: (category) => {
      return computed(() => []);
    },
    generationList: [],
    versionList: [],
    dependArray: [],
  }),

  getters: {
    // getModelDetailsOptions: (state) => (cat_id) => {
    //   const options = state.modelDetailsList.filter(
    //     (ele) => ele.parent_cat_id == cat_id
    //   );
    //   return options;
    // },

    isVersionDisabled: (state) => (current) => {
      const generationSelect = state.getFilterList("generation");

      const validArray = generationSelect.value.map((gen) => {
        const idx = state.generationList.indexOf(gen);
        return state.dependArray[idx];
      });

      const trueinArray = (genList) => genList[current];
      return !validArray.every(trueinArray);
    },

    isGenerationDisabled: (state) => (current) => {
      const versionSelect = state.getFilterList("version");

      const validArray = versionSelect.value.map((ver) => {
        const idx = state.versionList.indexOf(ver);
        return idx;
      });

      const trueinArray = (verIdx) => state.dependArray[current][verIdx];

      return !validArray.every(trueinArray);
    },
  },

  actions: {
    // addModel(model) {},
    // deleteModel(modelID) {},

    async fetchModelGenerationVersion(brand, model_name) {
      const { getFilterList } = useModelDetailsTemp(brand, model_name);
      this.getFilterList = getFilterList;
      try {
        const response = await useBaseFetch()(
          "/api/options/car-model-details/" + model_name
        );
        const { success, data, message } = response;

        if (success) {
          this.generationList = data.generationsList;
          this.versionList = data.versionList;
          this.dependArray = data.dependArray;
        }
      } catch (error) {
        // alert(error)
        console.log(error);
      }
    },
  },
});
