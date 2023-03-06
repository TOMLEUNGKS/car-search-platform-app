<template>
  <Suspense>
    <!-- <FilterModelDetailsOptionsManager
      :cat_id="category.cat_id"
      :model_name="category?.name"
      v-slot="{ generationList: titles }"
    > -->
    <FilterModelDetailsSelectManager
      :options="generationList"
      :parent="category.name"
      :brand="brand"
      :category="'generation'"
    >
      <template #header>
        <ion-list-header>
          <ion-icon
            class="text-lg ml-2"
            :src="'/assets/icon/' + category.icon"
          />
          <ion-title size="large" class="pl-2">
            {{ category.parent_cat }} {{ category.name }}
          </ion-title>
        </ion-list-header>
      </template>

      <template #options="{ current, selected, setValueIdx, disabled }">
        <list-select-item
          :title="generationList[current - 1]"
          :selected="selected"
          :disabled="disabled"
          class="first:rounded-t-xl last:rounded-b-xl last:border-b-2"
          @click="setValueIdx(current)"
        />
      </template>

      <!-- <template #done="{ commit }">
          <SearchDoneBtn @click="commit" />
        </template> -->
    </FilterModelDetailsSelectManager>
    <!-- </FilterModelDetailsOptionsManager> -->

    <template #fallback>
      <ion-loading />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import useSearchOptions from "@/hooks/search/useSearchOptions";

import { Category } from "@/model/SearchCar";

import { IonListHeader } from "@ionic/vue";

import FilterModelDetailsOptionsManager from "@/functional/SearchCar/layer4/FilterModelDetailsOptionsManager.vue";
import FilterModelDetailsSelectManager from "@/functional/SearchCar/layer4/FilterModelDetailsSelectManager.vue";

import SearchDoneBtn from "@/components/SearchCar/SearchDoneBtn.vue";
import ListSelectItem from "@/components/Common/ListSelectItem.vue";

export default defineComponent({
  name: "GenerationSeg",
  components: {
    IonListHeader,
    // FilterModelDetailsOptionsManager,
    FilterModelDetailsSelectManager,
    // SearchDoneBtn,
    ListSelectItem,
  },
  props: {
    category: {
      type: Object as PropType<Category>,
    },
    brand: {
      type: String,
    },
    generationList: {
      type: Object,
    },
  },

  setup(props) {
    return {};
  },
});
</script>

<style scoped>
ion-button::part(native) {
  border-radius: 12px;
}
</style>
