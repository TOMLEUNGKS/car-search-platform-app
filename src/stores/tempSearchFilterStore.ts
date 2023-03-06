// import { defineStore } from "pinia";
// import {
//   IBaseFilter,
//   CarSearchFilter,
//   CarSearchRangeFilter,
// } from "@/model/SearchCar/filter";

// import useSearchFilter from "@/hooks/search/useSearchFilter";

// interface TempSearchFilterState {
//   tempSearchFilterList: IBaseFilter[][];
// }

// export const useTempSearchFilterStore = defineStore("tempSeachFilterStore", {
//   state: (): TempSearchFilterState => ({
//     tempSearchFilterList: [],
//   }),

//   getters: {
//     getLastTempSearchFilter: (state) => state.tempSearchFilterList.at(-1),
//   },

//   actions: {
//     createSnapshot() {
//       if (this.tempSearchFilterList.length == 0) {
//         const { getSearchFilters } = useSearchFilter();
//         const searchFilters = getSearchFilters().data;
//         this.tempSearchFilterList.push(searchFilters);
//       } else {
//         const last = this.tempSearchFilterList.at(-1) as IBaseFilter[];
//         this.tempSearchFilterList.push([...last]);
//       }
//     },

//     popSnapshot() {
//       this.tempSearchFilterList.splice(-1, 1);
//     },

//     // addModelFilter(model) {},
//     // deleteModelFilter(modelID) {},
//   },
// });
