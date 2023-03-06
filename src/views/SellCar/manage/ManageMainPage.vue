<template>
  <base-back-layout
    :backfunction="true"
    @backFunction="$router.push('/tabs/sell-car')"
  >
    <ion-toolbar>
      <ion-title class="text-2xl font-bold py-2">{{$t("Manage listing")}}</ion-title>
      <ion-segment
        @ionChange="segmentChanged($event)"
        :value="segmentValue"
        class="bg-gray-100 h-4 rounded-3xl border-4 border-gray-100"
      >
        <ion-segment-button value="selling">
          <ion-label class="normal-case font-semibold">{{$t("Selling")}}</ion-label>
        </ion-segment-button>
        <ion-segment-button value="sold">
          <ion-label class="normal-case font-semibold">{{$t("Sold")}}</ion-label>
        </ion-segment-button>
        <ion-segment-button value="drafts">
          <ion-label class="normal-case font-semibold">{{$t("Drafts")}}</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>
    <div class="w-full">
      <suspense>
        <template #default>
          <component :is="segmentValue + '-seg'"></component>
        </template>
        <template #fallback>
          <ion-loading />
        </template>
      </suspense>
    </div>
  </base-back-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonToolbar, IonSegment, IonSegmentButton } from "@ionic/vue";
import SellingSeg from "@/components/SellCar/Manage/SellingSeg.vue";

export default defineComponent({
  name: "ManagePage",
  components: {
    IonSegment,
    IonSegmentButton,
    IonToolbar,
    SellingSeg,
  },

  setup() {
    const segmentValue = ref("selling");
    const segmentChanged = (e: CustomEvent) => {
      segmentValue.value = e.detail.value;
    };
    return { segmentChanged, segmentValue };
  },
});
</script>

<style scoped>
ion-segment-button::part(indicator) {
  opacity: 0;
}
ion-segment-button {
  --background: #f3f3f3;
  --background-checked: #fff;
  --border-radius: 20px;
  --border-color: #e3e3e3;
  --border-width: 4px;
}
</style>
