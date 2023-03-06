<template>
  <ion-list>
    <ion-list-header>
      <ion-icon
        class="text-xl ml-2 text-primary"
        :icon="calendarClearOutline"
      />
      <ion-title size="large" class="pl-2 font-bold"> Year </ion-title>
    </ion-list-header>
  </ion-list>
  <div class="flex justify-center gap-4">
    <span class="self-top mt-2 ml-4">From</span>
    <div class="flex flex-col w-full items-center max-w-2xl">
      <ion-input
        class="bg-gray-100 rounded-xl text-center text-gray-500 text-xl px-0"
        :value="fromYear"
        readonly
      ></ion-input>
      <ScrollPicker
        class="w-full mt-8 text-center"
        :options="years"
        v-model="fromYear"
        inactive-style="color: lightgrey; "
        active-style="color: grey; font-size:25px"
      >
      </ScrollPicker>
    </div>
    <span class="self-top mt-2">To</span>
    <div class="flex flex-col w-full items-center mr-4 max-w-2xl">
      <ion-input
        class="bg-gray-100 rounded-xl text-center text-gray-500 text-xl px-0"
        :value="toYear"
        readonly
      ></ion-input>
      <ScrollPicker
        class="w-full mt-8 text-center"
        :options="years"
        v-model="toYear"
        inactive-style="color: lightgrey; "
        active-style="color: grey; font-size: 25px;"
      />
    </div>
  </div>

  <div
    class="fixed bottom-0 bg-gray-100 bg-opacity-80 w-full flex items-center h-20"
  >
    <ion-button class="w-full font-semibold text-center rounded-xl px-4 h-4/5"
      >DONE</ion-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonListHeader, IonIcon } from "@ionic/vue";
import { calendarClearOutline } from "ionicons/icons";
import ScrollPicker from "vue3-scroll-picker";

export default defineComponent({
  components: {
    ScrollPicker,
    IonListHeader,
  },

  setup() {
    const fromYear = ref(new Date().getFullYear().toString());
    const toYear = ref(new Date().getFullYear().toString());
    const years = getYears();
    return { calendarClearOutline, fromYear, toYear, years };
  },
});

function getYears() {
  const currentYear = new Date().getFullYear();
  const years: Record<string, unknown>[] = [];
  const lastYear = 1900;

  for (let i = currentYear; i > lastYear; i--) {
    years.push({
      value: i.toString(),
      label: i.toString(),
    });
  }

  return [years];
}
</script>

<style scoped>
ion-button::part(native) {
  border-radius: 12px;
}
</style>
