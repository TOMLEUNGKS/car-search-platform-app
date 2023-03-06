<template>
  <ion-card
    class="m-0 sm:w-full md:w-80 ion-activatable"
    @click.stop="$emit('toCarPost')"
  >
    <slot name="img" />
    <ion-card-header class="pb-2 pl-3">
      <ion-card-title class="font-bold text-xl flex justify-between">
        <span>{{ title }}</span>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="border-t">
      <div class="grid grid-cols-2 justify-center list-disc">
        <li v-if="carSpec.model['body-type']">
          {{ $t(carSpec.model["body-type"]) }}
        </li>
        <li
          v-if="
            carSpec['Cylinder'] ||
            carSpec['Engine Size'] ||
            carSpec['Fuel type']
          "
        >
          <span v-if="carSpec['Cylinder']"> {{ carSpec["Cylinder"] }}cyl </span>
          <span v-if="carSpec['Engine Size']">
            {{ roundOf(carSpec["Engine Size"] / 1000, 1).toFixed(1) }}L
          </span>
          <span v-if="carSpec['Fuel type']">
            T {{ carSpec["Fuel type"] }}
          </span>
        </li>

        <!-- <li v-if="carSpec['Horsepower'] || carSpec['Max Horsepower']"> -->
        <li v-if="carSpec['Horsepower']">
          <span v-if="carSpec['Horsepower']">
            {{ Math.round(carSpec["Horsepower"]) }}hp
          </span>
          <!-- <span v-if="carSpec['Max Horsepower']">
            @{{ carSpec["Max Horsepower"] }}rpm
          </span> -->
        </li>
        <li v-if="carSpec['Air Induction']">
          {{ $t(carSpec["Air Induction"]) }}
        </li>
      </div>
      <slot />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/vue";

import { roundOf } from "@/lib/utils";

export default defineComponent({
  name: "CarCard",
  components: {
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },
  props: {
    carSpec: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
    },
  },

  setup(props) {
    return { roundOf };
  },
});
</script>
