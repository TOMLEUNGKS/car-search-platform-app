<template>
  <FilterOptionsManager :cat_id="category.cat_id" v-slot="{ options, titles }">
    <FilterBrandSelectManager :options="titles" :attr="category.attr">
      <template #header>
        <ion-list-header>
          <ion-icon
            class="text-lg ml-2"
            :src="'/assets/icon/' + category.icon"
          />
          <ion-title size="large" class="pl-2">
            <!-- <span v-if="specialOutput.length > 0"
              >All {{ category.name.toLowerCase() }}</span
            > -->
            <span>{{ $t(category.name) }}</span>
          </ion-title>
        </ion-list-header>
      </template>

      <template #options="{ current, selected, setValueIdx, commit }">
        <list-select-item
          :title="titles[current - 1]"
          :selected="selected"
          class="first:rounded-t-xl last:rounded-b-xl last:border-b-2"
          @click="setValueIdx(current)"
        >
          <div
            slot="end"
            class="h-full flex justify-center items-center pl-4"
            @click.stop="
              () => {
                commit();
                componentRender.push('SearchCarListLayer3');
                componentProps.push({ category: options[current - 1] });
              }
            "
          >
            <span v-if="selected" class="text-gray-500 mr-3">{{$t("Choose model")}}</span>
            <div>
              <font-awesome-icon
                class="text-lg text-slate-300"
                :icon="['fas', 'angle-right']"
              />
            </div>
          </div>
        </list-select-item>
      </template>

      <template #done="{ commit }">
        <SearchDoneBtn @click="commit" />
      </template>
    </FilterBrandSelectManager>
  </FilterOptionsManager>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";

import SearchCarListSelectItem from "@/components/SearchCar/SearchCarListSelectItem.vue";
import useSearchOptions from "@/hooks/search/useSearchOptions";

import { Category } from "@/model/SearchCar";

import { IonListHeader, IonIcon } from "@ionic/vue";

import SearchDoneBtn from "@/components/SearchCar/SearchDoneBtn.vue";
import SearchLayout from "@/components/SearchCar/layouts/SearchLayout.vue";
import ListSelectItem from "@/components/Common/ListSelectItem.vue";

import FilterOptionsManager from "@/functional/SearchCar/layer2/FilterOptionsManager.vue";
import FilterBrandSelectManager from "@/functional/SearchCar/layer2/FilterBrandSelectManager.vue";

export default defineComponent({
  components: {
    // SearchCarListSelectItem,
    IonListHeader,
    SearchDoneBtn,
    FilterOptionsManager,
    FilterBrandSelectManager,
    ListSelectItem,
    IonIcon,
  },
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },

  setup(props) {
    const componentRender = inject("componentRender");
    const componentProps = inject("componentProps");
    const doneFilter = inject("doneFilter");

    return {
      componentRender,
      componentProps,
      doneFilter,
    };
  },
});
</script>

<style scoped></style>
