<template>
  <ion-badge class="rounded-full flex py-1 px-2 items-center w-fit">
    <div @click.stop="$emit('removeFilter')" v-if="cancelable">
      <font-awesome-icon
        class="bg-secondary mr-2 px-1 rounded-full cursor-pointer"
        :icon="['fas', 'xmark']"
      />
    </div>
    <ion-label class="font-extralight text-sm">{{ title }}</ion-label>
  </ion-badge>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonBadge } from "@ionic/vue";

export default defineComponent({
  name: "SearchBadge",
  components: { IonBadge },
  props: {
    title: String,

    cancelable: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return {};
  },
});
</script>
