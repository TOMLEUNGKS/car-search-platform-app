import { ref, watch, computed, reactive } from "vue";

import CarModelDetailsFilter from "@/model/SearchCar/CarModelDetailsFilter";

const _modelFilters = reactive<{
  data: CarModelDetailsFilter[];
}>({ data: [] });

function getModelFilters() {
  return computed(() => _modelFilters.data);
}

function getModelFilterIdx(_mf: CarModelDetailsFilter) {
  return _modelFilters.data.findIndex((ele) => ele.model === _mf.model);
}

function getModelFilterByBrandModel(brand, model) {
  return ref(
    (_modelFilters.data.find(
      (ele) => ele.model === model && ele.brand === brand
    ) as CarModelDetailsFilter) || new CarModelDetailsFilter(brand, model)
  );
}

function getModelFilterByBrand(brand) {
  return ref(
    _modelFilters.data.filter(
      (ele) => ele.brand === brand
    ) as CarModelDetailsFilter[]
  );
}

function addModelFilter(_mf: CarModelDetailsFilter) {
  const idx = getModelFilterIdx(_mf);
  if (idx === -1) {
    _modelFilters.data.push(_mf);
  }
}

function removeModelFilter(_mf: CarModelDetailsFilter) {
  const idx = getModelFilterIdx(_mf);
  if (idx !== -1) {
    _modelFilters.data.splice(idx, 1);
  }
}

function removeModelFilters(_mfs: CarModelDetailsFilter[]) {
  for (const _mf of _mfs) {
    removeModelFilter(_mf);
  }
}

//not yet review

// function addModelSubCatFilter(modelType, value: ModelSubCategoryFilter) {
//   const _mf = getModelFilterByModelType(modelType).value;
//   _mf.addSubCatFilter(value);
// }

// function removeModelSubCatFilter(modelType, value: ModelSubCategoryFilter) {
//   const _mf = getModelFilterByModelType(modelType).value;
//   const idx = getModelFilterIdx(_mf);
//   _mf.removeSubCatFilter(value);
// }

// function getModelSubCatFilter(modelType, subCategory) {
//   const _mf = getModelFilterByModelType(modelType).value;
//   return _mf.getModelSubCatFilter(subCategory);
// }

function resetModelFilters() {
  _modelFilters.data = [];
}
// for saved filters
function setModelFilters(modelFilter) {
  _modelFilters.data = modelFilter;
}

export default function useModelFilter() {
  return {
    _modelFilters,
    getModelFilters,

    getModelFilterByBrandModel,
    getModelFilterByBrand,
    addModelFilter,
    removeModelFilter,
    removeModelFilters,
    resetModelFilters,
    setModelFilters,
  };
}
