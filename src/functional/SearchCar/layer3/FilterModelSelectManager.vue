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

import useModelFilter from "@/hooks/search/useModelFilter";
import useEvent from "@/hooks/useEvent";

export default defineComponent({
  name: "FilterModelSelectManager",
  props: ["options", "attr"],

  setup(props) {
    // const { addSearchFilter, removeSearchFilter, getSearchFilter } =
    //   useSearchFilter();

    const {
      getModelFilterByBrandModel,
      getModelFilterByBrand,
      addModelFilter,
      removeModelFilter,
    } = useModelFilter();

    console.log(props.options);

    const getValues = getModelFilterByBrand(props.attr).value;

    const valuesIdxOri = getValues.map(
      (ele) => props.options.indexOf(ele.model) + 1
    );
    const valuesIdx = ref(
      getValues.map((ele) => props.options.indexOf(ele.model) + 1)
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

    const commit = (categoryBrand) => {
      const idxToValue = valuesIdx.value.map((ele) => props.options[ele - 1]);

      //model filter to add
      for (const value of idxToValue) {
        const filter = getModelFilterByBrandModel(props.attr, value);
        filter.value.setCategoryBrand(categoryBrand);
        addModelFilter(filter.value);
      }

      //model filter to remove
      const removeList = valuesIdxOri.filter(
        (ele) => !valuesIdx.value.includes(ele)
      );
      const idxToRemoveValue = removeList.map((ele) => props.options[ele - 1]);
      for (const value of idxToRemoveValue) {
        const filter = getModelFilterByBrandModel(props.attr, value);
        removeModelFilter(filter.value);
      }

      //update new model list
      // getValues.value = idxToValue;

      // if (idxToValue.length == 0) {
      //   removeModelFilter(getValues);
      // } else {
      // }
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
