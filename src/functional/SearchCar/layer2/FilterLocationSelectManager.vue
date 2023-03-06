<template>
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

  <slot name="done" :commit="commit"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";

import useSearchFilter from "@/hooks/search/useSearchFilter";

export default defineComponent({
  name: "FilterLocationSelectManager",
  props: ["options", "attr"],

  setup(props) {
    const { addSearchFilter, getSearchFilter, removeSearchFilter } =
      useSearchFilter();

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
        getValues.value.push(props.options[current - 1]);
      } else {
        const idx = valuesIdx.value.indexOf(current);
        valuesIdx.value.splice(idx, 1);
        getValues.value.splice(idx, 1);
      }
    };

    const commit = () => {
      const idxToValue = valuesIdx.value.map((ele) => props.options[ele - 1]);
      // getValues.value = idxToValue;
      //if this is the first time add the, handle inside
      //if empty, delete
      if (idxToValue.length == 0) {
        removeSearchFilter(getValues);
      } else {
        addSearchFilter(getValues);
      }
    };

    return {
      range,
      isSelected,
      setValueIdx,
      commit,
    };
  },
});
</script>
