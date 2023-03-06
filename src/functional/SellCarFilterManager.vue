<template>
  <slot :getValue="getValue"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";

import useSellCarFilter from "@/hooks/sell/useSellCarFilter";

export default defineComponent({
  name: "SellCarFilterManager",
  props: ["attr"],

  setup(props) {
    const { setCarSellFilterValue, getCarSellFilterValue } = useSellCarFilter();

    const getValue = computed(() => getCarSellFilterValue(props.attr));
    // state
    const value = ref(getValue.value);

    return {
      getValue,
    };
  },
});
</script>
