<template>
  <base-back-layout><LoginContainer /> </base-back-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import LoginContainer from "@/components/Users/LoginContainer.vue";

export default defineComponent({
  components: { BaseBackLayout, LoginContainer },
  setup() {
    return;
  },
});
</script>
