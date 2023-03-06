<template>
  <app-layout>
    <ion-toolbar>
      <ion-title class="text-2xl font-bold">{{ $t('Sell your cars') }}</ion-title>
    </ion-toolbar>

    <ion-card
      button
      class="grid mx-6 h-1/5 shadow-none rounded-xl border-2 border-gray-200 min-h-min"
      @click="goCreateListing"
    >
      <div class="flex">
        <ion-img
          class="px-4"
          alt="create-listing"
          src="/assets/icon/create-listing.svg"
        />
        <div class="flex flex-col justify-center">
          <ion-card-title class="font-bold">{{ $t('Create listing') }}</ion-card-title>

          <p>{{ $t('Sell your car for a good price') }}</p>
        </div>
      </div>
    </ion-card>

    <ion-card
      button
      class="grid mx-6 h-1/5 shadow-none rounded-xl border-2 border-gray-200"
      @click="$router.push('/tabs/sell-car/manage')"
    >
      <div class="flex align-self">
        <ion-img
          class="px-4"
          alt="manage-listing"
          src="/assets/icon/manage-listing.svg"
        />
        <div class="flex flex-col justify-center">
          <ion-card-title class="font-bold">{{ $t('Manage listing') }}</ion-card-title>

          <p>{{ $t('Edit your listing') }}</p>
        </div>
      </div>
    </ion-card>

    <ion-card
      button
      class="grid mx-6 h-1/5 shadow-none rounded-xl border-2 border-gray-200"
    >
      <div class="flex align-self">
        <ion-img
          class="px-4"
          alt="estimate-value"
          src="/assets/icon/estimate-value.svg"
        />
        <div class="flex flex-col justify-center">
          <ion-card-title class="font-bold">{{ $t('Appraise your car') }}</ion-card-title>

          <p>{{ $t("Estimate your car's value") }}</p>
        </div>
      </div>
    </ion-card>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonToolbar, IonCardTitle, IonPage } from "@ionic/vue";

import {
  onIonViewDidLeave,
  onIonViewDidEnter,
  useBackButton,
  useIonRouter,
  alertController,
} from "@ionic/vue";

import { App as capApp } from "@capacitor/app";

import router from "@/router";

export default defineComponent({
  name: "SellCarPage",
  components: {
    IonToolbar,
    IonCardTitle,
  },

  setup() {
    const goCreateListing = () => {
      router.push("/tabs/sell-car/create-listing");
    };

    // let backBtnListener;
    // onIonViewDidEnter(() => {
    //   console.log("sell car did enter");

    // onIonViewDidLeave(() => {
    //   console.log("sell car did leave");
    //   backBtnListener.unregister();
    // });
    return { goCreateListing };
  },
});
</script>
