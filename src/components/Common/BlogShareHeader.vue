<template>
  <ion-header collapse="fade" :translucent="true" class="h-20">
    <ion-toolbar color="white  h-full flex">
      <ion-buttons slot="start" class="mr-4 items-center flex gap-4">
        <ion-img src="/assets/icon/CaretLeft.svg"></ion-img>
      </ion-buttons>
      <ion-buttons slot="end" class="mr-4 items-center flex gap-4">
        <ion-img src="/assets/icon/UploadSimple.svg"></ion-img>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { IonHeader, IonToolbar, IonButtons } from "@ionic/vue";

export default defineComponent({
  name: "BlogShareHeader",
  components: {
    IonHeader,
    IonToolbar,
    IonButtons,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.triangle-up {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 100px solid #c6e1ff;
  top: -15px;
  left: -115px;
}
</style>
