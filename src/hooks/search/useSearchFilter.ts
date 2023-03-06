import { ref, computed, reactive, toRef } from "vue";

import {
  IBaseFilter,
  CarSearchFilter,
  CarSearchRangeFilter,
} from "@/model/SearchCar/filter";

// let _searchFilter: SearchFilter = new CarSearchFilter();
const _searchFilters = reactive<{
  data: IBaseFilter[];
}>({ data: [] });

//================ getter ==========================

function addCategoryFilter(category, value) {
  resetSearchFilters();
  const selectedCategory = category;
  const selectedValue = value;
  const categoryFilter = getSearchFilter(selectedCategory).value;
  categoryFilter.addSearchFilter(selectedValue);
  addSearchFilter(categoryFilter);
}

function getSearchFilters() {
  return computed(() => _searchFilters.data);
}

function getSearchFilterIdx(_sf: IBaseFilter) {
  return _searchFilters.data.findIndex((ele) => ele.category === _sf.category);
}

function getSearchFilter(category) {
  return ref(
    (_searchFilters.data.find(
      (ele) => ele.category === category
    ) as CarSearchFilter) || new CarSearchFilter(category)
  );
}

function getFilterValue(category) {
  return computed(() =>
    (
      (_searchFilters.data.find(
        (ele) => ele.category === category
      ) as IBaseFilter) || new CarSearchFilter(category)
    ).getFilterValueStr()
  );
}

// function getFiltersByType(type) {
//   return computed(() => _searchFilters.data.find((ele) => ele.type === type));
// }

function getCateRangeFilter(category) {
  return ref(
    (_searchFilters.data.find(
      (ele) => ele.category === category
    ) as CarSearchRangeFilter) || new CarSearchRangeFilter(category)
  );
}

function addSearchFilter(_sf: IBaseFilter) {
  const idx = getSearchFilterIdx(_sf);
  if (idx == -1) {
    _searchFilters.data.push(_sf);
  }
}

function removeSearchFilter(_sf: IBaseFilter) {
  const idx = getSearchFilterIdx(_sf);
  if (idx !== -1) {
    _searchFilters.data.splice(idx, 1);
  }
}

function resetSearchFilters() {
  _searchFilters.data = [];
}

//for search result display and save

function findValueFromCate(category, value) {
  const _sf = getSearchFilter(category).value;

  return _sf.value.findIndex((ele) => ele === value) >= 0 ? true : false;
}

function setSearchFilters(searchFilters) {
  _searchFilters.data = searchFilters;
}

function cleanUpUnavailableOptions(category, optionList: string[]) {
  const filter = getSearchFilter(category);
  filter.value.value.forEach((value, idx) => {
    if (!optionList.includes(value as string)) {
      filter.value.value.splice(idx, 1);
    }
  });
}

export default function useSearchFilter() {
  return {
    getSearchFilters,
    // getFiltersByType,
    getFilterValue,
    getSearchFilter,
    getCateRangeFilter,

    // addSearchFilterValue,
    // removeSearchFilterValue,
    findValueFromCate,
    resetSearchFilters,
    addSearchFilter,
    removeSearchFilter,
    setSearchFilters,
    addCategoryFilter,
    cleanUpUnavailableOptions,
  };
}
