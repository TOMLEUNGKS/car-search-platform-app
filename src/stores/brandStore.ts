import { defineStore } from "pinia";
import useBaseFetch from "@/hooks/useBaseFetch";

import { Category } from "@/model/SearchCar";

interface BrandState {
  modelList: Category[];
}

export const useBrandStore = defineStore("brandStore", {
  state: (): BrandState => ({
    modelList: [],
  }),

  getters: {
    getModelOptions: (state) => (cat_id) => {
      const options = state.modelList.filter(
        (ele) => ele.parent_cat_id == cat_id
      );
      return options;
    },
    getModelCatID: (state) => (brand_name) => {
      const brand = state.modelList.find((ele) => ele.name == brand_name);
      return brand?.cat_id;
    },
  },

  actions: {
    // addBrand(brand) {},
    // deleteBrand(brandID) {},

    async fetchModel(cat_id, brand_name) {
      try {
        const response = await useBaseFetch()(
          "/api/options/car-brand/" + brand_name
        );
        const { success, data, message } = response;

        let id = 0;
        console.log(data);

        if (success) {
          const categories: Category[] = data.map((ele) => ({
            name: ele,
            cat_id: `${cat_id}${id++}`,
            parent_cat_id: cat_id,
          }));

          this.modelList.push(...categories);
          return categories;
        }
      } catch (error) {
        // alert(error)
        console.log(error);
      }
    },
  },
});
