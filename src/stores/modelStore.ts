import { defineStore } from "pinia";
import useBaseFetch from "@/hooks/useBaseFetch";

import { Category } from "@/model/SearchCar";

interface ModelDetailsState {
  modelDetailsList: Category[];
}

export const useModelStore = defineStore("modelStore", {
  state: (): ModelDetailsState => ({
    modelDetailsList: [],
  }),

  getters: {
    getModelDetailsOptions: (state) => (cat_id) => {
      const options = state.modelDetailsList.filter(
        (ele) => ele.parent_cat_id == cat_id
      );
      return options;
    },
    getModelDetails: (state) => (model_name) => {
      const model = state.modelDetailsList.find(
        (ele) => ele.name == model_name
      );
      return model;
    },
  },

  actions: {
    // addModel(model) {},
    // deleteModel(modelID) {},

    async fetchModelDetails(cat_id, model_name) {
      try {
        const response = await useBaseFetch()(
          "/api/options/car-model/" + model_name
        );
        const { success, data, message } = response;

        let id = 0;
        console.log(data);

        if (success) {
          const categories: Category[] = data.map((ele) => ({
            ...ele,
            cat_id: `${cat_id}${id++}`,
            parent_cat_id: cat_id,
          }));

          this.modelDetailsList.push(...categories);
          return categories;
        }
      } catch (error) {
        // alert(error)
        console.log(error);
      }
    },
  },
});
