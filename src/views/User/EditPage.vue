<template>
  <base-back-layout><EditContainer /> </base-back-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import EditContainer from "@/components/Users/EditContainer.vue";

export default defineComponent({
  components: { BaseBackLayout, EditContainer },
  setup() {
    return;
  },
});
</script>
