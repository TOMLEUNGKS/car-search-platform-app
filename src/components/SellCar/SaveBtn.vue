<template>
  <div class="w-full flex items-center h-20">
    <ion-button
      class="w-full font-semibold text-center rounded-xl px-4 h-4/5"
      :disabled="disabled"
      @click="$emit('proceed')"
      >{{ title }}</ion-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SaveBtn",
  props: {
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
ion-button::part(native) {
  border-radius: 12px;
  background: #fff;
  color: var(--ion-color-primary);
  border: 2px solid var(--ion-color-primary);
}
</style>
