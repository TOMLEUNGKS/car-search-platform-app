<template>
  <slot :options="options"> </slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useSearchOptions from "@/hooks/search/useSearchOptions";

export default defineComponent({
  name: "FilterRangeOptionsManager",
  props: ["categoryname"],

  setup(props) {
    const { getSearchOptionsByCate } = useSearchOptions();

    const options = getSearchOptionsByCate(props.categoryname);

    return {
      options,
    };
  },
});
</script>
