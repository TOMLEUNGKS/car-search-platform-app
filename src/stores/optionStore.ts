import { defineStore } from "pinia";
import useBaseFetch from "@/hooks/useBaseFetch";

import { Category } from "@/model/SearchCar";

const { getSearchOptionAvailableList } = useSearchOptions();

interface OptionState {
  bodyTypeOptions: string[];
}

export const useOptionStore = defineStore("optionStore", {
  state: (): OptionState => ({
    bodyTypeOptions: [],
  }),

  getters: {
    // getModelOptions: (state) => (cat_id) => {
    //   const options = state.modelList.filter(
    //     (ele) => ele.parent_cat_id == cat_id
    //   );
    //   return options;
    // }
  },

  actions: {
    async fetchOption(cat_name) {
      try {
        const optionList = await getSearchOptionAvailableList(cat_name);
        this.bodyTypeOptions = optionList;

        return optionList;
      } catch (error) {
        // alert(error)
        console.log(error);
      }
    },
  },
});
