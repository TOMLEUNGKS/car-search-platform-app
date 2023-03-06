<template>
  <ion-list class="mb-20">
    <slot name="header"></slot>

    <div>
      <slot
        name="options"
        v-for="current in range"
        :key="current"
        :current="current + 1"
        :selected="Selected(current + 1)"
        :setValueIdx="setValueIdx"
        :disabled="isDisabled(current)"
      >
      </slot>
    </div>
  </ion-list>

  <slot name="done" :commit="commit"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed, onUnmounted } from "vue";

import useModelDetailsTemp from "@/hooks/search/useModelDetailsTemp";
import { useModelDetailsStore } from "@/stores";
import useEvent from "@/hooks/useEvent";

export default defineComponent({
  name: "FilterModelDetailsSelectManager",
  props: ["options", "brand", "parent", "category"],

  setup(props) {
    // const { addSearchFilter, removeSearchFilter, getSearchFilter } =
    //   useSearchFilter();
    const detailStore = useModelDetailsStore();
    const { handleSelect, isSelected } = useModelDetailsTemp(
      props.brand,
      props.parent
    );
    // const getValues = getModelFilter(props.parent, props.category).value;
    // state
    // const valueIdx = computed(() => props.options.indexOf(getValue.value) + 1);

    const range = [...Array(props.options.length).keys()];

    // state functions

    const Selected = (current) =>
      isSelected(props.category)(props.options[current - 1]).value;
    const setValueIdx = (current) => {
      handleSelect(props.category, props.options[current - 1]);
    };

    const isDisabled = (current) => {
      if (props.category == "generation")
        return detailStore.isGenerationDisabled(current);
      return detailStore.isVersionDisabled(current);
    };

    // const commit = () => {
    //   console.log("commited version");
    //   const idxToValue = valuesIdx.value.map((ele) => props.options[ele - 1]);
    //   console.log(getValues);

    //   getValues.value = idxToValue;
    //   if (idxToValue.length == 0) {
    //     removeModelFilter(getValues);
    //   } else {
    //     addModelFilter(getValues);
    //   }
    // };

    return {
      range,
      Selected,
      isDisabled,
      setValueIdx,
      // commit,
    };
  },
});
</script>
