import { defineComponent, ref, PropType, Ref, computed } from "vue";
import useModelFilter from "@/hooks/search/useModelFilter";

export const versionFilter = ref();
export const generationFilter = ref();

const { getModelFilterByBrandModel, addModelFilter, removeModelFilter } =
  useModelFilter();

function getFilterList(category) {
  if (category == "generation") return computed(() => generationFilter.value);
  return computed(() => versionFilter.value);
}

function isSelected(category) {
  if (category == "generation")
    return (current) => {
      return computed(() => generationFilter.value.includes(current));
    };

  return (current) => {
    return computed(() => versionFilter.value.includes(current));
  };
}

function handleSelect(category, current) {
  if (category == "generation") {
    if (isSelected(category)(current).value) {
      const idx = generationFilter.value.indexOf(current);
      generationFilter.value.splice(idx, 1);
    } else {
      generationFilter.value.push(current);
    }
  } else {
    if (isSelected(category)(current).value) {
      const idx = versionFilter.value.indexOf(current);
      versionFilter.value.splice(idx, 1);
    } else {
      versionFilter.value.push(current);
    }
  }

  console.log(generationFilter);
}

function clearFilterList() {
  generationFilter.value = [];
  versionFilter.value = [];
}
export default function useModelDetailsTemp(brand, model) {
  const carModelDetailsFilter = getModelFilterByBrandModel(brand, model).value;
  function fetchCurrentValue() {
    generationFilter.value = [...carModelDetailsFilter.generationList.value];
    versionFilter.value = [...carModelDetailsFilter.versionList.value];
  }

  function commit(category) {
    console.log("commit call");
    carModelDetailsFilter.setCategoryModel(category);
    carModelDetailsFilter.generationList.value = generationFilter.value;
    carModelDetailsFilter.versionList.value = versionFilter.value;
  }
  return {
    getFilterList,
    handleSelect,
    commit,
    clearFilterList,
    fetchCurrentValue,
    isSelected,
  };
}
