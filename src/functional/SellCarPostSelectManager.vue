<template>
  <slot
    v-for="current in range"
    :key="current"
    :current="current + 1"
    :selected="isSelected(current + 1)"
    :setValueIdx="setValueIdx"
    :getValue="getValue"
    :optionList="optionList"
  >
    {{ current }}
  </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed, toRefs, ToRefs, Ref } from "vue";

import useSellCarPost from "@/hooks/sell/useSellCarPost";

export default defineComponent({
  name: "SellCarPostSelctManager",
  props: ["options", "attr"],

  setup(props) {
    let { options } = toRefs(props);
    let optionList = ref(options.value);
    if (options.value[0] instanceof Object) {
      optionList.value = options.value.map((options) => options.title);
      console.log(optionList.value);
    }

    const { setCarSellPostValue, resetCarSellPostValue, getCarSellPostValue } =
      useSellCarPost();

    const getValue = computed(() => getCarSellPostValue(props.attr));

    // state
    const valueIdx = ref(optionList.value.indexOf(getValue.value) + 1);

    const range = computed(() => {
      return [...Array(optionList.value.length).keys()];
    });

    // state functions

    const isSelected = (current) => {
      return valueIdx.value == current;
    };

    const setValueIdx = (current) => {
      if (current !== valueIdx.value) {
        setCarSellPostValue(props.attr, optionList.value[current - 1]);
        valueIdx.value = current;
      } else {
        resetCarSellPostValue(props.attr);
        valueIdx.value = 0;
      }
    };

    return {
      valueIdx,
      range,
      isSelected,
      setValueIdx,
      getValue,
      optionList,
    };
  },
});
</script>
