<template>
  <ion-list v-for="attr in attributes" :key="attr.name">
    <ion-list-header class="border-b border-b-secondary mx-4 pl-0">
      <ion-label class="font-semibold text-lg">{{ $t(attr.name) }}</ion-label>
    </ion-list-header>
    <template v-for="(valueKey, key) in attr.subAttrs" :key="valueKey">
      <ion-item v-if="carPost[valueKey]">
        <ion-label>{{ $t(key) }}</ion-label>
        <ion-label class="font-semibold" slot="end">{{
          $t(carPost[valueKey])
        }}</ion-label>
      </ion-item>
    </template>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IonListHeader from "@ionic/vue";

export default defineComponent({
  name: "SpecSeg",
  components: {
    IonListHeader,
  },
  props: ["carPost"],

  setup(props) {
    const attributes = [
      {
        name: "Engine",
        subAttrs: {
          "Safety rating": "safety_rating",
          "Engine code": "engine_code",
          "Engine size": "engine_size",
          Cylinders: "cylinder",
          "Engine location": "engine_location",
          Induction: "air_induction",
          Horsepower: "horsepower",
          "Torque(Nm)": "torque",
          "Power to weight ratio": "power_to_weight_ratio",
          "0-100 km/h": "zero_to_hundred_km",
          "1/4 miles": "quarter_mile",
          Drivetrain: "drivetrain",
          Transmission: "transmission",
        },
      },
      {
        name: "Fuel",
        subAttrs: {
          "Fuel type": "fuel_type",
          "RON Rating": "ron_rating",
          "Combined fuel consumption": "combined_fuel_consumption",
          "Fuel tank capacity": "fuel_tank_capacity",
          "Engine location": "engine_location",
          "Approximated range": "approximated_range",
        },
      },
      {
        name: "Wheels and tyres",
        subAttrs: {
          "Front rim": "_front_rim",
          "Rear rim": "_rear_rim",
          "Front tyre": "_front_tyre",
          "Rear tyre": "_rear_tyre",
        },
      },
      {
        name: "Dimension and weight",
        subAttrs: {
          Length: "length",
          Width: "width",
          Height: "height",
          Wheelbase: "wheelbase",
          "Turning circle": "turning_circle",
          "Curb weight": "curb_weight",
          "Boot volume": "boot_capacity",
        },
      },
      {
        name: "Others",
        subAttrs: {
          "Country made": "country_made",
          Generation: "generation",
        },
      },
    ];
    return { attributes };
  },
});
</script>
