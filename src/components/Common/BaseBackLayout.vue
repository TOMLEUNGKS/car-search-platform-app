<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            v-if="isBackFunction"
            text=""
            :default-href="default_href"
            @click="$emit('backFunction')"
          ></ion-back-button>
          <ion-back-button v-else text=""></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end" class="items-center">
          <slot name="primary" />
        </ion-buttons>
        <slot name="title" />
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  IonBackButton,
  IonButtons,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
} from "@ionic/vue";
export default defineComponent({
  name: "BaseBackLayout",
  components: {
    IonButtons,
    IonBackButton,
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
  },

  props: ["isBackFunction", "default_href"],
});
</script>

<style scoped>
ion-back-button {
  --background-hover: "" !important;
  --color: #000;
}
</style>
