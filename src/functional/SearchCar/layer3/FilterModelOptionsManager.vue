<template>
  <slot :options="options" :titles="titles"> </slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useBrandStore } from "@/stores/brandStore";
import { Category } from "@/model/SearchCar";

export default defineComponent({
  name: "FilterModelOptionsManager",
  props: ["cat_id", "brand_name"],

  async setup(props) {
    const store = useBrandStore();

    let options = store.getModelOptions(props.cat_id);

    if (options.length == 0) {
      options = (await store.fetchModel(
        props.cat_id,
        props.brand_name
      )) as Category[];
    }

    const titles = options.map((ele) => ele.name);

    return {
      options,
      titles,
    };
  },
});
</script>
