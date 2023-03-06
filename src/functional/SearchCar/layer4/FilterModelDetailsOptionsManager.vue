<template>
  <slot :generationList="generationList" :versionList="versionList"> </slot>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import { useModelDetailsStore } from "@/stores";

export default defineComponent({
  name: "FilterModelDetailsOptionsManager",
  props: ["brand", "model_name", "segmentValue"],

  async setup(props) {
    const detailStore = useModelDetailsStore();
    await detailStore.fetchModelGenerationVersion(
      props.brand,
      props.model_name
    );

    let generationList = detailStore.generationList;
    let versionList = detailStore.versionList;

    return {
      generationList,
      versionList,
    };
  },
});
</script>
