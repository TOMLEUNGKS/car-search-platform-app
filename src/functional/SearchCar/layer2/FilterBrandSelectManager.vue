<template>
  <ion-list class="mb-20">
    <slot name="header"></slot>

    <div>
      <slot
        name="options"
        v-for="current in range"
        :key="current"
        :current="current + 1"
        :selected="isSelected(current + 1)"
        :setValueIdx="setValueIdx"
        :commit="commit"
      >
      </slot>
    </div>
  </ion-list>

  <slot name="done" :commit="commit"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed, onUnmounted } from "vue";

import useSearchFilter from "@/hooks/search/useSearchFilter";
// import useModelFilter from "@/hooks/search/useModelFilter";
import useModelFilter from "@/hooks/search/useModelFilter";
import useEvent from "@/hooks/useEvent";

export default defineComponent({
  name: "FilterBrandSelectManager",
  props: ["options", "attr"],

  setup(props) {
    const { addSearchFilter, removeSearchFilter, getSearchFilter } =
      useSearchFilter();

    const { getModelFilterByBrand, removeModelFilters } = useModelFilter();

    const getValues = getSearchFilter(props.attr).value;

    const valuesIdx = ref(
      getValues.value.map((ele) => props.options.indexOf(ele) + 1)
    );

    // state
    // const valueIdx = computed(() => props.options.indexOf(getValue.value) + 1);

    const range = [...Array(props.options.length).keys()];

    // state functions

    const isSelected = (current) => valuesIdx.value.includes(current);
    const setValueIdx = (current) => {
      if (!isSelected(current)) {
        valuesIdx.value.push(current);
      } else {
        const idx = valuesIdx.value.indexOf(current);
        valuesIdx.value.splice(idx, 1);
      }
    };

    const commit = () => {
      const idxToValue = valuesIdx.value.map((ele) => props.options[ele - 1]);

      //remove model list if the brand is removed
      const removedList = getValues.value.filter(
        (brand) => !idxToValue.includes(brand)
      );

      removedList.forEach((brand) => {
        const brandFilter = getModelFilterByBrand(brand).value;
        removeModelFilters(brandFilter);
      });

      //update new brand list
      getValues.value = idxToValue;
      if (idxToValue.length == 0) {
        removeSearchFilter(getValues);
      } else {
        addSearchFilter(getValues);
      }
    };

    //for clear selelction
    const reset = () => {
      valuesIdx.value = [];
    };
    const emmiter = useEvent();
    emmiter.on("clear", reset);
    onUnmounted(() => {
      emmiter.off("clear", reset);
    });

    return {
      range,
      isSelected,
      setValueIdx,
      commit,
    };
  },
});
</script>
