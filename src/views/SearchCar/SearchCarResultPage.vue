<template>
  <search-result-layout>
    <div class="flex flex-wrap gap-2 mx-4 my-2">
      <div
        class="flex flex-wrap gap-2"
        v-for="filter in [...modelFilters, ...searchfilters]"
        :key="filter"
      >
        <SearchResultBadge
          :filter="filter"
          @removeFilter="null"
        ></SearchResultBadge>
      </div>
    </div>

    <suspense>
      <template #default>
        <SearchCarResult />
      </template>
      <template #fallback>
        <ion-loading />
      </template>
    </suspense>
  </search-result-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import SearchResultLayout from "@/components/SearchCar/layouts/SearchResultLayout.vue";
import SearchBadge from "@/components/SearchCar/SearchBadge.vue";
import SearchResultBadge from "@/components/SearchCar/SearchResultBadge.vue";

import useSearchFilter from "@/hooks/search/useSearchFilter";
import useModelFilter from "@/hooks/search/useModelFilter";

import SearchCarResult from "@/components/SearchCar/SearchCarResult.vue";

import { IonLoading } from "@ionic/vue";

export default defineComponent({
  name: "SearchCarResultPage",
  components: {
    SearchResultLayout,
    SearchCarResult,
    IonLoading,
    SearchResultBadge,
  },

  setup() {
    const { getSearchFilters } = useSearchFilter();
    const { getModelFilters } = useModelFilter();

    const modelFilters = getModelFilters();
    const searchfilters = getSearchFilters();
    return { searchfilters, modelFilters };
  },
});
</script>
