<template>
  <ion-button
    id="standard"
    :class="{ active: selectPackage == ADPACKAGE.standard }"
    @click="
      selectPackage = ADPACKAGE.standard;
      price = product.default_price;
      amount = product.unit_amount;
    "
    class="h-44 sm:h-fit w-full"
  >
    <template v-if="product">
      <div class="grid grid-cols-12 w-full h-full">
        <div
          class="flex flex-col col-span-10 items-start normal-case pt-2 -ml-1 text-left ad-content-text"
        >
          <span class="py-1 text-lg font-semibold">{{ product.name }}</span>
          <span class="font-bold text-base">{{ product.description }} </span>
          <ul
            class="flex flex-col justify-center flex-1 list-disc px-4 mt-2 text-left pb-4"
          >
            <li class="mb-2">
              <span>Appear in search <b>results</b></span>
            </li>
            <li>
              <span>Weekly email with <b>stats, hints & tips</b></span>
            </li>
          </ul>
        </div>

        <div class="flex flex-col col-span-2 justify-end p-1 mb-1 -mx-3">
          <span class="text-2xl font-bold text-right"
            >${{ product.unit_amount }}</span
          >
          <span class="text-right">HKD</span>
        </div>
      </div>

      <div class="triangle-up absolute"></div>
    </template>
  </ion-button>
</template>
<script setup lang="ts">
import { ADPACKAGE } from "@/model/SellCar";
import { storeToRefs } from "pinia";
defineProps(["product"]);
const store = useAdPackageStore();
const { selectPackage, price, amount } = storeToRefs(store);
</script>

<style scoped>
ion-button#standard::part(native) {
  background: #e6e6e6;
  color: #484848;
}

#standard .triangle-up {
  border-bottom: 300px solid #a8d3ff;
}

@media only screen and (min-width: 640px) {
  #standard .triangle-up {
    border-bottom: 150px solid #a8d3ff;
  }
}
</style>
