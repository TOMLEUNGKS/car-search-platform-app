<template>
  <slot :titles="titles" />
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import useSellCarFilterOptions from "@/hooks/sell/useSellCarFilterOptions";

export default defineComponent({
  props: ["routeAttr"],
  async setup(props) {
    const { getCarSellFilterOptionsByCate } = useSellCarFilterOptions();
    const options = await getCarSellFilterOptionsByCate(props.routeAttr);
    const titles = options?.map((ele) => ele.name);

    return {
      options,
      titles,
    };
  },
});
</script>
