<template>
  <slot :result="result"> </slot>
</template>

<script lang="ts">
import { PropType } from "vue";
import CarModelDetailsFilter from "@/model/SearchCar/CarModelDetailsFilter";

export default defineComponent({
  name: "FilterModelResultManager",
  props: {
    modelFilter: {
      type: Object as PropType<CarModelDetailsFilter>,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const result = computed(() =>
      props.modelFilter.getFilterList(props.category).getFilterValueStr()
    );

    return { result };
  },
});
</script>
