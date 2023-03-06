<template>
  <ion-list v-for="baseCate in baseCategories" :key="baseCate.name">
    <ion-list-header>
      <ion-icon
        class="text-lg ml-2"
        :src="'/assets/icon/search/' + baseCate.icon + '.svg'"
      />
      <ion-title size="large" class="pl-2 font-bold">
        {{ $t(baseCate.name) }}
      </ion-title>
    </ion-list-header>
    <div>
      <template v-for="child in baseCate.children" :key="child.cat_id">
        <FilterResultManager :attr="child.attr" #default="{ result }">
          <search-car-list-item
            :title="child.name"
            :filterAttr="child.attr"
            :result="result"
            @go-detail="
              componentRender.push(child.render || 'SearchCarListLayer2');
              componentProps.push({ category: child });
            "
          />
        </FilterResultManager>

        <template v-if="child.attr == 'brand'">
          <template
            v-for="modelFilter in modelFilters"
            :key="modelFilter.brand + modelFilter.model"
          >
            <SearchModelListBlock
              :modelFilter="modelFilter"
              @go-detail="
                componentRender.push('SearchCarListLayer3');
                componentProps.push({ category: modelFilter.categoryBrand });
              "
            />
          </template>
        </template>
      </template>
    </div>
  </ion-list>

  <div class="mb-20"></div>

  <div
    class="fixed bottom-0 bg-gray-100 bg-opacity-80 w-full flex items-center h-20"
  >
    <ion-button
      class="w-full font-semibold text-center px-4 h-4/5"
      @click="getSearchResult"
      >{{$t("SHOW RESULTS")}}</ion-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onUnmounted, watchEffect } from "vue";

import SearchCarListItem from "@/components/SearchCar/SearchCarListItem.vue";
import SearchModelListBlock from "@/components/SearchCar/SearchModelListBlock.vue";

import useSearchCategory from "@/hooks/search/useSearchCategory";
import useSearchFilter from "@/hooks/search/useSearchFilter";
// import useModelFilter from "@/hooks/search/useModelFilter";
import useModelFilter from "@/hooks/search/useModelFilter";

import router from "@/router";

import { IonListHeader, IonIcon } from "@ionic/vue";
import FilterResultManager from "@/functional/SearchCar/FilterResultManager.vue";

import useEvent from "@/hooks/useEvent";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    SearchCarListItem,
    IonIcon,
    IonListHeader,
    SearchModelListBlock,
    FilterResultManager,
  },
  props: {
    title: String,
  },

  setup() {
    const componentRender = inject("componentRender");
    const componentProps = inject("componentProps");

    const { getBaseCategory } = useSearchCategory();
    const { getSearchFilters, cleanUpUnavailableOptions } = useSearchFilter();
    const { getModelFilters, _modelFilters } = useModelFilter();

    const searchFilters = getSearchFilters();
    const modelFilters = getModelFilters();
    watchEffect(() => {
      console.log(modelFilters);
      console.log(searchFilters);
      // console.log(modelFiltersModelOnly);
    });

    watch(_modelFilters, async () => {
      console.log("modelfilter changing ");
      const optionStore = useOptionStore();
      const optionList = await optionStore.fetchOption("body-type");
      cleanUpUnavailableOptions("body-type", optionList);
    });

    const baseCategories = getBaseCategory();

    const route = useRoute();
    const getSearchResult = () => {
      console.log(route.query);
      if (route.query.redirect) {
        router.push(route.query.redirect as string);
      } else {
        router.push("/tabs/search-car/result");
      }
    };

    const { resetSearchFilters } = useSearchFilter();
    const { resetModelFilters } = useModelFilter();

    const reset = () => {
      resetModelFilters();
      resetSearchFilters();
    };
    const emmiter = useEvent();
    emmiter.on("clear", reset);

    onUnmounted(() => {
      emmiter.off("clear", reset);
    });

    return {
      componentRender,
      componentProps,
      baseCategories,
      getSearchResult,
      modelFilters,
    };
  },
});
</script>
<style scoped>
ion-button::part(native) {
  border-radius: 12px;
}
</style>
