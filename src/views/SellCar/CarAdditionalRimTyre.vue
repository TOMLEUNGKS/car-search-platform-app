<template>
  <BaseBackLayout>
    <ion-list class="mb-20">
      <ion-list-header>
        <ion-title size="large" class="pl-2 font-bold">
          {{$t("Rim and Tyre")}}
        </ion-title>
      </ion-list-header>

      <div class="mt-2 mx-6 text-sm font-semibold">
        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base"> {{$t("Front Rim")}} </ion-label>

          <SellCarPostManager
            :attr="'front_rim'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              slot="end"
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              :value="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>

        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base"> {{$t("Rear Rim")}} </ion-label>

          <SellCarPostManager
            :attr="'rear_rim'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              slot="end"
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              :value="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>

        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base"> {{$t("Front Tyre")}} </ion-label>

          <SellCarPostManager
            :attr="'front_tyre'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              slot="end"
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              :value="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>

        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base"> {{$t("Rear Tyre")}} </ion-label>

          <SellCarPostManager
            :attr="'rear_tyre'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              slot="end"
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              :value="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>
        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base"> {{$t("Tyre Model")}} </ion-label>

          <SellCarPostManager
            :attr="'tyre_model'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              slot="end"
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              :value="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>
      </div>
    </ion-list>
    <SellCarDoneBtn />
  </BaseBackLayout>
</template>

<script lang="ts" setup>
import SellCarPostManager from "@/functional/SellCarPostManager.vue";
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import SellCarDoneBtn from "@/components/SellCar/DoneBtn.vue";
</script>
