<template>
  <ion-label class="mr-2">{{ title }}</ion-label>
  <div v-if="isCrossable" @click.stop="$emit('remove')">
    <font-awesome-icon
      class="text-white bg-primary mr-2 px-2 py-1 rounded-full cursor-pointer"
      :icon="['fas', 'xmark']"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemLabel",
  props: {
    title: {
      type: String,
      required: true,
    },
    isCrossable: {
      type: Boolean,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped></style>
