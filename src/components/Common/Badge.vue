<template>
  <ion-badge class="rounded-full flex py-1 px-2 items-center w-fit">
    <div @click.stop="emit" v-if="cancelable">
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
import useEvent from "@/hooks/useEvent";

export default defineComponent({
  name: "SearchBadge",
  components: { IonBadge },
  props: {
    title: String,

    event: String,
    cancelable: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const emmiter = useEvent();
    const emit = () => {
      emmiter.emit(props.event as string);
    };
    return { emit };
  },
});
</script>
