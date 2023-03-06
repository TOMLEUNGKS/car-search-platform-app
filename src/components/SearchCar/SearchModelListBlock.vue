<template>
  <ion-item
    button
    :detail="false"
    lines="none"
    class="border-gray-200 mx-4 border-x-2 border-t-2 px-1.5"
    @click.stop="$emit('go-detail')"
  >
    <ion-label>
      <h2>Model</h2>
    </ion-label>

    <div slot="end" class="h-full flex justify-center items-center pl-4">
      <span class="text-gray-500 mr-1">{{ modelFilter.model }}</span>
      <font-awesome-icon
        class="text-lg text-slate-300"
        :icon="['fas', 'angle-right']"
      />
    </div>
  </ion-item>

  <template v-for="subcate in subCategoryNames" :key="subcate">
    <FilterModelResultManager
      :modelFilter="modelFilter"
      :category="subcate.toLowerCase()"
      #default="{ result }"
    >
      <search-car-list-item
        v-if="result"
        :title="subcate"
        :filterAttr="subcate"
        :result="result"
        @click.stop="
          componentRender.push('SearchCarListLayer4');
          componentProps.push({
            category: modelFilter.categoryModel,
            brand: modelFilter.brand,
            segment: subcate.toLowerCase(),
          });
        "
      >
        <template v-slot:start>
          <div slot="start" class="pl-1"></div>
        </template>
      </search-car-list-item>
    </FilterModelResultManager>
  </template>
</template>

<script lang="ts">
import { PropType, defineComponent, inject } from "vue";

import FilterModelResultManager from "@/functional/SearchCar/FilterModelResultManager.vue";
import SearchCarListItem from "@/components/SearchCar/SearchCarListItem.vue";
import CarModelDetailsFilter from "@/model/SearchCar/CarModelDetailsFilter";

export default defineComponent({
  components: {
    SearchCarListItem,
    FilterModelResultManager,
  },
  props: {
    modelFilter: {
      type: Object as PropType<CarModelDetailsFilter>,
      required: true,
    },
  },
  setup(props) {
    // console.log(props.filter.value);
    const subCategoryNames = ["Generation", "Version"];
    const componentRender = inject("componentRender");
    const componentProps = inject("componentProps");
    return { subCategoryNames, componentRender, componentProps };
  },
});
</script>
