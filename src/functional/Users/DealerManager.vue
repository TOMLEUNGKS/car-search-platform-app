<template>
  <slot :dealer="dealer"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { getUserByUserId } from "@/services/firebase";

export default defineComponent({
  name: "DealerManager",
  props: ["dealerID"],
  async setup(props) {
    const dealer = await getUserByUserId(props.dealerID);

    return {
      dealer,
    };
  },
});
</script>
