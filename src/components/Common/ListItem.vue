<template>
  <ion-item
    button
    :detail="false"
    :lines="lines"
    @click.stop="$emit('go-detail')"
  >
    <slot></slot>

    <div slot="end" class="h-full flex justify-center items-center pl-4">
      <item-label
        v-if="result && !Array.isArray(result)"
        :title="result"
        :isCrossable="isCrossable"
      />
      <!-- <span class="text-gray-500 mr-2">{{ result }} </span> -->

      <font-awesome-icon
        class="text-lg text-slate-300"
        :icon="['fas', 'angle-right']"
      />
    </div>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import ItemLabel from "@/components/Common/ItemLabel.vue";

export default defineComponent({
  name: "ListItem",

  components: { ItemLabel },
  props: {
    lines: {
      type: String,
      default: "none",
    },
    result: {
      type: [String],
      default: "",
    },
    isCrossable: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
