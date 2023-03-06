<template>
  <ion-modal
    id="post-dialog"
    ref="modal"
    :trigger="'delete-post-modal-' + post_id"
    @willDismiss="onWillDismiss"
  >
    <div class="wrapper">
      <h1 class="text-xl">Confirm delete this post</h1>

      <div class="mt-3 flex justify-end">
        <ion-button color="danger" size="small" fill="clear" @click="cancel"
          >Close</ion-button
        >
        <ion-button size="small" @click="confirm">Confirm</ion-button>
      </div>
    </div>
  </ion-modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { IonModal } from "@ionic/vue";

import { OverlayEventDetail } from "@ionic/core/components";
import { useFilterStore } from "@/stores";

export default defineComponent({
  components: {
    IonModal,
  },

  props: ["post_id"],

  setup(props) {
    const modal = ref<InstanceType<typeof IonModal>>();

    const cancel = () => {
      modal.value?.$el.dismiss(null, "cancel");
    };

    const confirm = () => {
      modal.value?.$el.dismiss(null, "confirm");
    };

    const onWillDismiss = async (ev: CustomEvent<OverlayEventDetail>) => {
      if (ev.detail.role === "confirm") {
        console.log("delete");
      }
    };

    return { cancel, modal, confirm, onWillDismiss };
  },
});
</script>
<style scoped>
ion-modal {
  --width: fit-content;
  --min-width: 300px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

ion-modal .wrapper {
  margin: 5px 10px;
}
</style>
