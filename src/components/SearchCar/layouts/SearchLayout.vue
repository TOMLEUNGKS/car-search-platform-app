<template>
  <base-back-layout @backFunction="backFunction" :isBackFunction="true">
    <template v-slot:primary>
      <span @click="clear" class="text-primary cursor-pointer font-bold pr-2"
        >{{ $t("Clear") }}</span
      >
    </template>

    <slot></slot>
  </base-back-layout>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import useEvent from "@/hooks/useEvent";

export default defineComponent({
  name: "SearchLayout",

  props: ["backFunction"],
  components: {
    // IonNavLink,
    BaseBackLayout,
  },

  setup() {
    const emmiter = useEvent();
    const clear = () => {
      emmiter.emit("clear");
    };

    return { clear };
  },
});
</script>

<style scoped>
ion-back-button {
  --background-hover: "" !important;
  --color: #000;
}
</style>
