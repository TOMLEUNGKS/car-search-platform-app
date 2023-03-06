<template>
  <ion-page>
    <ion-header>
      <ion-toolbar></ion-toolbar>
    </ion-header>
    <ion-content>
      <suspense>
        <template #default>
          <PaymentResult :session_id="session_id" />
        </template>
        <template #fallback>
          <ion-loading />
        </template>
      </suspense>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";

import { IonPage, IonHeader, IonToolbar, IonContent } from "@ionic/vue";

// import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import PaymentResult from "@/components/SellCar/PaymentResult.vue";

import { useRoute } from "vue-router";
import { IonLoading } from "@ionic/vue";

export default defineComponent({
  components: {
    // BaseBackLayout,
    PaymentResult,
    IonLoading,
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
  },

  setup() {
    const route = useRoute();
    console.log(route.query.session_id);
    const session_id = route.query.session_id;
    return { session_id };
  },
});
</script>
