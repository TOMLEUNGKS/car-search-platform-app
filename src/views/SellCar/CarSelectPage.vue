<template>
  <BaseBackLayout>
    <ion-list>
      <ion-list-header>
        <ion-title size="large" class="pl-2 font-bold mt-4">
          {{$t("Select car")}}
        </ion-title>
      </ion-list-header>
      <Suspense>
        <template #default>
          <car-select-search-result />
        </template>
        <template #fallback>
          <ion-loading />
        </template>
      </Suspense>
    </ion-list>
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import CarSelectSearchResult from "@/components/SellCar/CarSelectSearchResult.vue";

import { IonLoading } from "@ionic/vue";
import LoadingManager from "@/functional/Common/LoadingManager.vue";

export default defineComponent({
  components: {
    BaseBackLayout,
    CarSelectSearchResult,
    IonLoading,
  },
});
</script>
