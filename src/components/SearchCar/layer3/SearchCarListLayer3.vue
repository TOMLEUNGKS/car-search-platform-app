<template>
  <Suspense>
    <FilterModelOptionsManager
      :cat_id="category.cat_id"
      :brand_name="category?.name"
      v-slot="{ options, titles }"
    >
      <FilterModelSelectManager :options="titles" :attr="category.name">
        <template #header>
          <ion-list-header>
            <ion-icon
              class="text-lg ml-2"
              :src="'/assets/icon/' + category.icon"
            />
            <ion-title size="large" class="pl-2">
              <span>{{ $t(category.name) + $t("'s models") }}</span>
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
                  commit(category);
                  componentRender.push('SearchCarListLayer4');
                  componentProps.push({
                    category: options[current - 1],
                    brand: category.name,
                  });
                }
              "
            >
              <span v-if="selected" class="text-gray-500 mr-3"
                >Choose version</span
              >
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
          <SearchDoneBtn @click="commit(category)" />
        </template>
      </FilterModelSelectManager>
    </FilterModelOptionsManager>

    <template #fallback>
      <ion-loading />
    </template>
  </Suspense>

  <!-- <ion-list class="mb-20">
    <ion-list-header>
      <ion-title size="large" class="pl-2">
        Model of {{ category.name }}
      </ion-title>
    </ion-list-header>
    <div>
       <search-car-l3-list-item
            :title="titles[current - 1]"
            :filterAttr="category.attr"
            :checkedStr="'Choose version'"
            :categoryName="category.name"
            :selected="selected"
            @click="setValueIdx(current)"
            @go-detail="
              componentRender.push('SearchCarListLayer4');
              componentProps.push({
                category: {
                  ...options[current - 1],
                  parent_cat: category.name,
                },
              });
            "
          />
      
    </div>
  </ion-list>

  <SearchDoneBtn /> -->
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";

import SearchCarL3ListItem from "@/components/SearchCar/layer3/SearchCarL3ListItem.vue";
import useSearchOptions from "@/hooks/search/useSearchOptions";

import { Category } from "@/model/SearchCar";

import { IonListHeader, IonLoading, IonIcon } from "@ionic/vue";

import SearchDoneBtn from "@/components/SearchCar/SearchDoneBtn.vue";
import ListSelectItem from "@/components/Common/ListSelectItem.vue";

import FilterModelOptionsManager from "@/functional/SearchCar/layer3/FilterModelOptionsManager.vue";
import FilterModelSelectManager from "@/functional/SearchCar/layer3/FilterModelSelectManager.vue";

export default defineComponent({
  components: {
    // SearchCarL3ListItem,
    SearchDoneBtn,

    IonListHeader,
    FilterModelOptionsManager,
    FilterModelSelectManager,
    IonLoading,
    ListSelectItem,
    IonIcon,
  },
  props: {
    category: {
      type: Object as PropType<Category>,
    },
  },

  setup(props) {
    const componentRender = inject("componentRender");
    const componentProps = inject("componentProps");

    console.log(props.category);
    return { componentRender, componentProps };
  },
});
</script>

<style scoped>
ion-button::part(native) {
  border-radius: 12px;
}
</style>
