<template>
  <BaseBackLayout>
    <ion-list>
      <ion-list-header>
        <ion-title size="large" class="pl-2 font-bold mt-4">
          {{$t("Car details")}}
        </ion-title>
      </ion-list-header>
      <ion-label class="text-sm text-gray-400 ml-6">
        {{$t("Please fill in the basic information of your car")}}
      </ion-label>
      <div class="mt-2">
        <SellCarFilterManager
          v-for="(attr, keyTitle, idx) in options"
          :key="keyTitle"
          :attr="attr"
          v-slot="{ getValue }"
        >
          <list-item
            :filterAttr="attr"
            :result="getValue"
            class="border-gray-200 mx-4 border-x-2 border-b-2 last:rounded-b-xl first:border-t-2 first:rounded-t-xl"
            @go-detail="toAttr(attr)"
            :disabled="
              idx > 0
                ? isNullCarSellFilterByCate(Object.values(options)[idx - 1])
                : false
            "
          >
            <ion-label class="text-sm font-medium">{{ $t(keyTitle) }}</ion-label>
          </list-item>
        </SellCarFilterManager>
      </div>
    </ion-list>

    <BaseBtn
      :title="'NEXT'"
      @proceed="$router.push('/tabs/sell-car/car-select')"
      :disabled="disabled"
    />
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import BaseBtn from "@/components/SellCar/BaseBtn.vue";

import ListItem from "@/components/Common/ListItem.vue";
import useSellCarFilter from "@/hooks/sell/useSellCarFilter";

import SellCarFilterManager from "@/functional/SellCarFilterManager.vue";

import { useIonRouter } from "@ionic/vue";

export default defineComponent({
  components: {
    BaseBackLayout,
    ListItem,
    BaseBtn,
    SellCarFilterManager,
  },

  setup() {
    onBeforeRouteLeave((to, from) => {
      // console.log(to);
      if (to.fullPath == "/tabs/sell-car/create-listing") {
        resetCarSellFilterValue("brand");
        resetCarSellFilterValue("model");
        resetCarSellFilterValue("built year");
      }
    });

    const {
      isNullCarSellFilters,
      isNullCarSellFilterByCate,
      resetCarSellFilterValue,
    } = useSellCarFilter();
    let disabled = computed(() => {
      return (
        isNullCarSellFilterByCate("brand") ||
        isNullCarSellFilterByCate("model") ||
        isNullCarSellFilterByCate("built year")
      );
    });

    const options = {
      Brand: "brand",
      Model: "model",
      Series: "built year",
    };

    const ionRouter = useIonRouter();
    const toAttr = (attr) => {
      ionRouter.push("car-details/" + attr);
    };
    return { options, disabled, toAttr, isNullCarSellFilterByCate };
  },
});
</script>
