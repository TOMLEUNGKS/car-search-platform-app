<template>
  <ion-item
    button
    :detail="false"
    lines="none"
    class="border-gray-200 mx-4 border-x-2 border-t-2 last:rounded-b-xl last:border-b-2 first:rounded-t-xl px-1.5"
    @click.stop="$emit('go-detail')"
  >
    <slot name="start"></slot>
    <ion-label>
      <h2>{{ $t(title) }}</h2>
    </ion-label>

    <div slot="end" class="h-full flex justify-center items-center pl-4">
      <span class="text-gray-500 mr-1">{{ result }}</span>

      <font-awesome-icon
        class="text-lg text-slate-300"
        :icon="['fas', 'angle-right']"
      />
    </div>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchCarListItem",

  components: {},
  props: {
    title: {
      type: [String, Number],
      default: "",
    },
    filterAttr: {
      type: String,
      default: "",
    },
    result: {
      type: String,
    },
  },
});
</script>
