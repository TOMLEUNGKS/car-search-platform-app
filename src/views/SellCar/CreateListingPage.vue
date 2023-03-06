<template>
  <BaseBackLayout
    :backfunction="true"
    @backFunction="$router.push('/tabs/sell-car')"
  >
    <ion-list>
      <ion-list-header>
        <ion-title size="large" class="pl-2 font-bold mt-4">
          {{$t("Create listing")}}
        </ion-title>
      </ion-list-header>
      <ion-label class="text-sm text-gray-400 ml-6">
        {{$t("Select a price range for your car")}}
      </ion-label>
      <div class="mt-2">
        <SellCarFilterSelectManager
          :options="options"
          :attr="'price range'"
          v-slot:default="{ current, selected, setValueIdx }"
        >
          <list-select-item
            :title="options[current - 1]"
            :selected="selected"
            @click="setValueIdx(current)"
            class="first:rounded-t-xl last:rounded-b-xl last:border-b-2"
          />
        </SellCarFilterSelectManager>
      </div>
    </ion-list>

    <BaseBtn
      :title="'NEXT'"
      @proceed="$router.push('car-details')"
      :disabled="disabled"
    />
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { IonListHeader } from "@ionic/vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

import ListSelectItem from "@/components/Common/ListSelectItem.vue";
import BaseBtn from "@/components/SellCar/BaseBtn.vue";

import useSellCarFilter from "@/hooks/sell/useSellCarFilter";
import useSellCarFilterOptions from "@/hooks/sell/useSellCarFilterOptions";

import SellCarFilterSelectManager from "@/functional/SellCarFilterSelectManager.vue";

export default defineComponent({
  components: {
    BaseBackLayout,
    IonListHeader,
    ListSelectItem,
    BaseBtn,
    SellCarFilterSelectManager,
  },

  setup() {
    const { getCarSellFilterOptionsByCate } = useSellCarFilterOptions();

    const { isNullCarSellFilterByCate } = useSellCarFilter();
    let disabled = computed(() => {
      return isNullCarSellFilterByCate("price range");
    });

    const options = getCarSellFilterOptionsByCate("price range");

    return { options, disabled };
  },
});
</script>
