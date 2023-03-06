<template>
  <slot :result="result"> </slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useSearchFilter from "@/hooks/search/useSearchFilter";

export default defineComponent({
  name: "FilterResultManager",
  props: ["attr"],

  setup(props) {
    const { getFilterValue } = useSearchFilter();

    const result = getFilterValue(props.attr);

    return { result };
  },
});
</script>
