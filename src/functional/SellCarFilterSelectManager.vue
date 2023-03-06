<template>
  <slot
    v-for="current in range"
    :key="current"
    :current="current + 1"
    :selected="isSelected(current + 1)"
    :setValueIdx="setValueIdx"
    :getValue="getValue"
  >
  </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";

import useSellCarFilter from "@/hooks/sell/useSellCarFilter";

export default defineComponent({
  name: "SellCarFilterSelectManager",
  props: ["options", "attr"],

  setup(props) {
    const {
      setCarSellFilterValue,
      resetCarSellFilterValue,
      getCarSellFilterValue,
    } = useSellCarFilter();

    const getValue = computed(() => getCarSellFilterValue(props.attr));

    // state
    const valueIdx = computed(() => props.options.indexOf(getValue.value) + 1);

    const range = computed(() => {
      return [...Array(props.options.length).keys()];
    });

    // state functions

    const isSelected = (current) => {
      return valueIdx.value == current;
    };

    const setValueIdx = (current) => {
      if (current !== valueIdx.value) {
        setCarSellFilterValue(props.attr, props.options[current - 1]);

        if (props.attr == "brand") {
          resetCarSellFilterValue("model");
          resetCarSellFilterValue("built year");
        }
        if (props.attr == "model") {
          resetCarSellFilterValue("built year");
        }
      } else {
        resetCarSellFilterValue(props.attr);
        if (props.attr == "brand") {
          resetCarSellFilterValue("model");
          resetCarSellFilterValue("built year");
        }
        if (props.attr == "model") {
          resetCarSellFilterValue("built year");
        }
      }
    };

    return {
      valueIdx,
      range,
      isSelected,
      setValueIdx,
      getValue,
    };
  },
});
</script>
