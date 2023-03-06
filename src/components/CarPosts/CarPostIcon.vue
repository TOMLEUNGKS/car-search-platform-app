<template>
  <div
    class="py-1 flex flex-col align-middle items-center border-2 border-secondary w-full h-16"
  >
    <ion-img :src="'/assets/icon/' + icon + '.svg'" />
    <span class="font-semibold text-primary">
      {{ attribute }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarPostIcon",
  components: {},

  props: {
    icon: {
      type: String,
      required: true,
    },
    attribute: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {};
  },
});
</script>
