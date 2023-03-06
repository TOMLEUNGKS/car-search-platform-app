<template>
  <base-back-layout>
    <template v-slot:primary>
      <ion-button fill="clear">
        <ion-img src="/assets/icon/SortAscending.svg"></ion-img>
      </ion-button>
      <ion-button fill="clear">
        <ion-img src="/assets/icon/Funnel.svg"></ion-img>
      </ion-button>
      <ion-button id="save-filter-dialog" fill="clear">
        <ion-img src="/assets/icon/BookmarkSimple.svg"></ion-img>
      </ion-button>
    </template>

    <slot></slot>

    <ion-modal
      id="filter-dialog"
      ref="modal"
      trigger="save-filter-dialog"
      @willDismiss="onWillDismiss"
    >
      <div class="wrapper">
        <h1 class="text-xl">Save Filter</h1>

        <ion-input
          type="text"
          placeholder="filter name"
          @ionChange="(e)=>nameInput=e.detail.value as string"
        ></ion-input>

        <div class="flex justify-end">
          <ion-button color="danger" size="small" fill="clear" @click="cancel"
            >Close</ion-button
          >
          <ion-button size="small" @click="save">Save</ion-button>
        </div>
      </div>
    </ion-modal>
  </base-back-layout>
</template>

<script lang="ts">
import { IonInput, IonModal } from "@ionic/vue";
import { OverlayEventDetail } from "@ionic/core/components";

export default defineComponent({
  name: "SearchResultLayout",

  setup() {
    const modal = ref<InstanceType<typeof IonModal>>();

    const nameInput = ref("");

    const cancel = () => {
      modal.value?.$el.dismiss(null, "cancel");
    };

    const save = () => {
      const name = nameInput.value;
      modal.value?.$el.dismiss(name, "confirm");
    };

    const onWillDismiss = async (ev: CustomEvent<OverlayEventDetail>) => {
      if (ev.detail.role === "confirm") {
        const name = ev.detail.data;
        const filterStore = useFilterStore();
        //save to local stoage
        await filterStore.saveFilter(name);
      }
    };

    return { cancel, modal, nameInput, save, onWillDismiss };
  },
});
</script>

<style scoped>
ion-modal {
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

ion-modal .wrapper {
  margin: 5px 10px;
}
</style>
