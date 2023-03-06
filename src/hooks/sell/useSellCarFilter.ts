import { ref, watch, computed, reactive } from "vue";

import { ISellCarFilter } from "@/model/SellCar";

// let _searchFilter: SearchFilter = new CarSearchFilter();
const _carSellFilter = reactive<ISellCarFilter>({
  "price range": null,
  brand: null,
  model: null,
  "built year": null,
});
//===========category=======================
//Setter

function setCarSellFilterValue(category, value: string | FileList) {
  _carSellFilter[category] = value;
}

function resetCarSellFilterValue(category) {
  _carSellFilter[category] = null;
}

function resetCarSellFiltersValue() {
  for (const key in _carSellFilter) {
    resetCarSellFilterValue(key);
  }
}

function getCarSellFilterValue(category) {
  return _carSellFilter[category];
}

function isNullCarSellFilterByCate(category) {
  return _carSellFilter[category] == null;
}

function isNullCarSellFilters(cateList) {
  for (const cate in cateList) {
    if (isNullCarSellFilterByCate(cate)) {
      return true;
    }
  }
  return false;
}

function findValueFromCate(category, value) {
  return _carSellFilter[category] == value;
}

function fetchSellCarType() {
  return null;
}

export default function useSellCarFilter() {
  return {
    setCarSellFilterValue,
    getCarSellFilterValue,
    resetCarSellFilterValue,
    resetCarSellFiltersValue,
    isNullCarSellFilterByCate,
    isNullCarSellFilters,
    findValueFromCate,
  };
}
