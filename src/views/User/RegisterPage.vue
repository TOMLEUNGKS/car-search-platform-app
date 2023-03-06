<template>
  <base-back-layout><RegisterContainer /> </base-back-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import RegisterContainer from "@/components/Users/RegisterContainer.vue";

export default defineComponent({
  components: { BaseBackLayout, RegisterContainer },
  setup() {
    return;
  },
});
</script>
