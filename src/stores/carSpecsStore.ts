import { defineStore } from "pinia";
import useBaseFetch from "@/hooks/useBaseFetch";

import { Category } from "@/model/SearchCar";
import { IModel } from "@/model/Cars";

interface CarSpecsState {
  carSpecsList: (Category & IModel)[];
}

export const useCarSpecsStore = defineStore("carSpecsStore", {
  state: (): CarSpecsState => ({
    carSpecsList: [],
  }),

  getters: {
    getCarSpecs: (state) => (cat_id) => {
      const options = state.carSpecsList.filter(
        (ele) => ele.parent_cat_id == cat_id
      );
      return options;
    },
  },

  actions: {
    async fetchCarSpecs(cat_id, modelID) {
      try {
        const response = await useBaseFetch()(
          "/api/car-specs/model/" + modelID
        );
        const { success, data, message } = response;

        let id = 0;
        console.log(data);

        if (success) {
          const categories: (Category & IModel)[] = data.map((ele) => ({
            ...ele,
            cat_id: `${cat_id}${id++}`,
            parent_cat_id: cat_id,
          }));

          this.carSpecsList.push(...categories);
          return categories;
        }
      } catch (error) {
        // alert(error)
        console.log(error);
      }
    },
  },
});
