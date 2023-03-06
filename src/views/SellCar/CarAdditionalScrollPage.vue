<template>
  <BaseBackLayout>
    <SellCarPostManager
      :attr="routeAttr"
      v-slot:default="{ setValueHandlerNumber }"
    >
      <ion-list class="mb-20">
        <ion-list-header>
          <ion-title size="large" class="pl-2 font-bold">
            {{ tilteCapitalize(routeAttr).replace("_", " ") }}
          </ion-title>
        </ion-list-header>

        <div class="flex flex-col items-center mx-4">
          <ion-input
            ref="fromInput"
            class="bg-gray-100 rounded-xl text-center text-gray text-lg px-0"
            :value="readonly ? fromValue : cusValue"
            :readonly="readonly"
            @change="(e) => setValueHandlerNumber(e.target.value)"
          >
          </ion-input>

          <ScrollPicker
            class="w-full mt-8 text-center border rounded-lg border-gray"
            :options="options"
            v-model="fromValue"
            inactive-style="color: lightgrey; "
            active-style="color: var(--ion-color-primary); "
            @update:modelValue="
              (value) => {
                setValueHandlerNumber(value);
                customInput(value);
              }
            "
          >
            <template v-slot:center-overlay>
              <div class="border-y h-full bg-gray-200"></div>
            </template>
            <template v-slot:option="prop">
              {{ prop.item.label }}
            </template>
          </ScrollPicker>
        </div>
      </ion-list>
      <SellCarDoneBtn />
    </SellCarPostManager>
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

import SellCarDoneBtn from "@/components/SellCar/DoneBtn.vue";

import { useRoute } from "vue-router";

import useSellCarPostOptions from "@/hooks/sell/useSellCarPostOptions";
import { tilteCapitalize } from "@/lib/utils";

import SellCarPostManager from "@/functional/SellCarPostManager.vue";

import ScrollPicker from "vue3-scroll-picker";

export default defineComponent({
  components: {
    BaseBackLayout,
    SellCarDoneBtn,
    SellCarPostManager,
    ScrollPicker,
  },

  setup() {
    //route and options
    const route = useRoute();
    const { getCarSellPostOptionsByCate } = useSellCarPostOptions();
    const routeAttr = route.params.attr;
    const options = getCarSellPostOptionsByCate(routeAttr);
    console.log(options);
    const fromValue = ref(undefined);
    const readonly = ref(true);
    const cusValue = ref(null);

    const customInput = (scrollResult: CustomEvent) => {
      if (scrollResult[0] == "custom") {
        readonly.value = false;
      } else {
        readonly.value = true;
      }
    };

    return {
      options,
      routeAttr,
      tilteCapitalize,
      readonly,
      cusValue,
      customInput,
      fromValue,
    };
  },
});
</script>
