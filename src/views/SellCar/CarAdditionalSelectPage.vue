<template>
  <BaseBackLayout>
    <ion-list class="mb-20">
      <ion-list-header>
        <ion-title size="large" class="pl-2 font-bold">
          {{ $t(tilteCapitalize(routeAttr)) }}
        </ion-title>
      </ion-list-header>

      <div>
        <SellCarPostSelectManager
          :options="options"
          :attr="routeAttr"
          v-slot:default="{ current, selected, setValueIdx, optionList }"
        >
          <list-select-item
            :title="optionList[current - 1]"
            :selected="selected"
            :category="routeAttr.toString()"
            class="first:rounded-t-xl last:rounded-b-xl last:border-b-2"
            @click="setValueIdx(current)"
          />
        </SellCarPostSelectManager>
      </div>
    </ion-list>
    <SellCarDoneBtn />
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

import ListSelectItem from "@/components/Common/ListSelectItem.vue";
import SellCarDoneBtn from "@/components/SellCar/DoneBtn.vue";

import { useRoute } from "vue-router";

import useSellCarPostOptions from "@/hooks/sell/useSellCarPostOptions";
import { tilteCapitalize } from "@/lib/utils";

import SellCarPostSelectManager from "@/functional/SellCarPostSelectManager.vue";

export default defineComponent({
  components: {
    BaseBackLayout,
    ListSelectItem,
    SellCarDoneBtn,
    SellCarPostSelectManager,
  },

  setup() {
    const route = useRoute();
    const { getCarSellPostOptionsByCate } = useSellCarPostOptions();

    const routeAttr = route.params.attr;

    const options = getCarSellPostOptionsByCate(routeAttr);

    return { options, routeAttr, tilteCapitalize };
  },
});
</script>
