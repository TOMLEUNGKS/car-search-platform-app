<template>
  <slot :loadFilters="loadFilters"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import useSearchFilter from "@/hooks/search/useSearchFilter";
import useModelFilter from "@/hooks/search/useModelFilter";
import { useFilterStore } from "@/stores";
import { useIonRouter } from "@ionic/vue";
import { plainToInstance } from "class-transformer";

import { CarSearchFilter } from "@/model/SearchCar/filter";
import CarModelDetailsFilter from "@/model/SearchCar/CarModelDetailsFilter";
export default defineComponent({
  setup() {
    const router = useIonRouter();

    const { setSearchFilters } = useSearchFilter();
    const { setModelFilters } = useModelFilter();
    const filterStore = useFilterStore();

    const loadFilters = async (filterKey) => {
      const filterStr = await filterStore.fetchFilter(filterKey);
      const filter = JSON.parse(filterStr);

      const { model_filters, search_filters } = filter;

      const searchFilters = plainToInstance(CarSearchFilter, search_filters);
      const modelFilters = plainToInstance(
        CarModelDetailsFilter,
        model_filters
      );

      console.log(searchFilters);
      console.log(modelFilters);

      setSearchFilters(searchFilters);
      setModelFilters(modelFilters);

      router.push("/tabs/search-car/filter");
    };

    return {
      loadFilters,
    };
  },
});
</script>
