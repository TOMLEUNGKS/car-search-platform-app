<template>
  <app-layout>
    <template v-if="!isAuthed">
      <ion-toolbar class="px-4 py-2">
        <ion-title class="text-2xl font-bold">{{$t("Saved")}}</ion-title>
      </ion-toolbar>
      <SignInGidget />
    </template>

    <template v-else>
      <ion-toolbar>
        <ion-segment
          @ionChange="segmentChanged($event)"
          :value="segmentValue"
          class="bg-gray-100 h-4 w-auto rounded-3xl border-4 border-gray-100"
        >
          <ion-segment-button value="saved-cars">
            <ion-label class="normal-case font-semibold w-screen/2"
              >{{$t("Saved cars")}}</ion-label
            >
          </ion-segment-button>
          <ion-segment-button value="saved-filters">
            <ion-label class="normal-case font-semibold w-screen/2"
              >{{$t("Saved filters")}}</ion-label
            >
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
      <div class="w-full">
        <component :is="segmentValue + '-seg'"></component>
      </div>
    </template>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonToolbar, IonSegment, IonSegmentButton } from "@ionic/vue";
import SavedCarsSeg from "@/components/Saved/SavedCarsSeg.vue";
import SavedFiltersSeg from "@/components/Saved/SavedFiltersSeg.vue";
import useAuthuser from "@/hooks/user/useAuthUser";

export default defineComponent({
  name: "SavedPage",
  components: {
    IonSegment,
    IonSegmentButton,
    IonToolbar,
    SavedCarsSeg,
    SavedFiltersSeg,
  },

  setup() {
    const { isAuthed } = useAuthuser();

    const segmentValue = ref("saved-cars");
    const segmentChanged = (e: CustomEvent) => {
      segmentValue.value = e.detail.value;
    };
    return { segmentChanged, segmentValue, isAuthed };
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
