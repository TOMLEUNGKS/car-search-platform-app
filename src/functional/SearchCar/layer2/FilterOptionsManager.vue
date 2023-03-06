<template>
  <slot :options="options" :titles="titles"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";

import useSearchOptions from "@/hooks/search/useSearchOptions";

export default defineComponent({
  name: "FilterOptionsManager",
  props: ["cat_id"],

  setup(props) {
    const { getSearchFilterOptions } = useSearchOptions();

    const options = getSearchFilterOptions(props.cat_id);
    let titles = options.map((ele) => ele.name);

    if (props.cat_id == "004") {
      //which is body type
      const optionStore = useOptionStore();
      const { bodyTypeOptions } = optionStore;

      // const optionsList = await getSearchOptionAvailableList("body-type");
      // console.log(optionsList);
      if (bodyTypeOptions.length > 0) {
        titles = bodyTypeOptions;
      }
    }

    return {
      options,
      titles,
    };
  },
});
</script>
