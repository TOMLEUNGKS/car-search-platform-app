<template>
  <SellCarPostSelectManager
    :options="searchResult.map((ele) => ele.car_id)"
    :attr="'car_id'"
    v-slot:default="{ current, setValueIdx }"
  >
    <CarCard
      :title="searchResult[current - 1].name"
      :carSpec="searchResult[current - 1]"
    >
      <template v-slot:img>
        <ImgManager
          type="car-specs"
          :id="searchResult[current - 1].car_id"
          #default="{ urls }"
        >
          <ImgsSlider :carImgs="urls" />
        </ImgManager>
      </template>

      <BaseBtn
        :title="'SELECT'"
        class="mt-4"
        @click="
          $router.push('/tabs/sell-car/car-photo');
          setValueIdx(current);
        "
      />
    </CarCard>
  </SellCarPostSelectManager>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseBtn from "@/components/SellCar/BaseBtn.vue";
import CarCard from "@/components/Common/CarCard.vue";
import ImgsSlider from "@/components/Common/ImgsSlider.vue";

import SellCarPostSelectManager from "@/functional/SellCarPostSelectManager.vue";

import { cardTypeOptions } from "@/model/types";
import useSellCarFilter from "@/hooks/sell/useSellCarFilter";
import { useModelStore } from "@/stores/modelStore";
import { useCarSpecsStore } from "@/stores/carSpecsStore";
import { Category } from "@/model/SearchCar";
import { IModel } from "@/model/Cars";
import ImgManager from "@/functional/Common/ImgManager.vue";

export default defineComponent({
  components: {
    BaseBtn,
    CarCard,
    SellCarPostSelectManager,
    ImgsSlider,
    ImgManager,
  },
  async setup() {
    // const { getCarSpecBySearch } = useCarSpec();
    // const searchResult = await getCarSpecBySearch();
    const { getCarSellFilterValue } = useSellCarFilter();
    const modelStore = useModelStore();
    const carSpectStore = useCarSpecsStore();

    const model_name = getCarSellFilterValue("built year");
    const model = modelStore.getModelDetails(model_name) as Category & IModel;
    let searchResult = carSpectStore.getCarSpecs(model.cat_id);

    if (searchResult.length == 0) {
      searchResult = (await carSpectStore.fetchCarSpecs(
        model.cat_id,
        model.model_id
      )) as (Category & IModel)[];
    }

    console.log(searchResult);

    return { searchResult, cardTypeOptions };
  },
});
</script>
