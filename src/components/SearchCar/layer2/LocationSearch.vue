<template>
  <ion-list>
    <ion-list-header>
      <ion-title size="large" class="pl-2 font-bold"> {{ $t("Location") }} </ion-title>
    </ion-list-header>

    <ion-searchbar
      show-cancel-button="never"
      class="shadow-none px-4 rounded-xl"
      color="light"
      placeholder="Search location"
      v-model="searchWord"
    ></ion-searchbar>

    <ion-accordion-group multiple="true" @ionChange="change" class="mb-20">
      <ion-accordion
        class="group"
        v-for="district in locations.slice(0, -1)"
        :key="district.value"
        :value="district.value"
      >
        <search-car-list-select-item
          slot="header"
          :title="district.name_en"
          :value="district.value"
          :detail="false"
          class="group-first:rounded-t-xl group-last:rounded-b-xl group-last:border-b-2"
        />
        <search-car-list-select-item
          v-for="place in district.children"
          :key="place.value"
          slot="content"
          :title="place.name_en"
          :value="place.value"
          :detail="false"
          :indent="'pl-4'"
        />
        <!-- <FilterLocationSelectManager :options="district.children" :attr="category.attr">
          <template #options="{ current, selected, setValueIdx }">
            <list-select-item
              :title="district.children[current - 1].name_en"
              :selected="selected"
              class="first:rounded-t-xl last:rounded-b-xl last:border-b-2"
              @click="setValueIdx(current)"
            />
          </template>
        </FilterLocationSelectManager> -->
      </ion-accordion>

      <ion-accordion :value="locations.at(-1).value">
        <search-car-list-select-item
          slot="header"
          :title="locations.at(-1).name_en"
          :value="locations.at(-1).value"
          :detail="false"
          :class="!islastActive && 'rounded-b-xl border-b-2'"
          @click="toggleLast"
        />
        <search-car-list-select-item
          v-for="place in locations.at(-1).children"
          :key="place.value"
          slot="content"
          :title="place.name_en"
          :value="place.value"
          :detail="false"
          :indent="'pl-4'"
          class="last:rounded-b-xl last:border-b-2"
        />
      </ion-accordion>
    </ion-accordion-group>
  </ion-list>

  <SearchDoneBtn />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, PropType } from "vue";

import {
  IonListHeader,
  IonAccordionGroup,
  IonAccordion,
  IonSearchbar,
} from "@ionic/vue";
import SearchCarListSelectItem from "@/components/SearchCar/SearchCarListSelectItem.vue";
import useLocation from "@/hooks/search/useLocation";

import { Category } from "@/model/SearchCar";

import SearchDoneBtn from "@/components/SearchCar/SearchDoneBtn.vue";
import FilterLocationSelectManager from "@/functional/SearchCar/layer2/FilterLocationSelectManager.vue";
import ListSelectItem from "@/components/Common/ListSelectItem.vue";

export default defineComponent({
  components: {
    IonListHeader,
    IonAccordionGroup,
    IonAccordion,
    SearchCarListSelectItem,
    IonSearchbar,
    SearchDoneBtn,
    // FilterLocationSelectManager,
    // ListSelectItem,
  },

  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },

  setup() {
    const searchWord = ref("");
    const { getLocations } = useLocation();
    const locations = getLocations();
    const islastActive = ref(false);

    const toggleLast = () => {
      islastActive.value = !islastActive.value;
    };

    const change = (ev) => {
      console.log(ev);
      const selectedValue = ev.detail.value;
      console.log(selectedValue);
    };

    watchEffect(() => {
      console.log(searchWord.value);
    });

    // onMounted(() => {});

    return {
      locations,
      islastActive,
      toggleLast,
      change,
      searchWord,
    };
  },
});
</script>

<style scoped>
ion-button::part(native) {
  border-radius: 12px;
}
</style>
