<template>
  <div class="mx-4 my-2">
    <div class="flex flex-wrap gap-2 mt-2">
      <search-badge
        v-for="value in generationSelect"
        :title="value"
        :key="value"
        cancelable
        @removeFilter="
          () => {
            handleSelect('generation', value);
            segmentValue = 'generation';
          }
        "
      ></search-badge>
    </div>
    <div class="flex flex-wrap gap-2 mt-2">
      <search-badge
        v-for="value in versionSelect"
        :title="value"
        :key="value"
        cancelable
        @removeFilter="
          () => {
            handleSelect('version', value);
            segmentValue = 'version';
          }
        "
      ></search-badge>
    </div>
  </div>
  <ion-segment
    @ionChange="segmentChanged($event)"
    :value="segmentValue"
    swipe-gesture
  >
    <ion-segment-button value="generation">
      <ion-label class="text-sm normal-case font-semibold"
        >Generation</ion-label
      >
    </ion-segment-button>
    <ion-segment-button value="version">
      <ion-label class="text-sm normal-case font-semibold">Version</ion-label>
    </ion-segment-button>
  </ion-segment>
  <KeepAlive>
    <Suspense>
      <FilterModelDetailsOptionsManager
        :brand="brand"
        :cat_id="category.cat_id"
        :model_name="category?.name"
        v-slot="{ versionList, generationList }"
      >
        <component
          :is="segmentValue + '-seg'"
          @select="handleSelect"
          v-bind="{ category, brand, versionList, generationList }"
        ></component>
      </FilterModelDetailsOptionsManager>

      <template #fallback>
        <ion-loading />
      </template>
    </Suspense>
  </KeepAlive>

  <SearchDoneBtn @click="commit(category)" />
</template>

<script lang="ts">
import { defineComponent, ref, PropType, onUnmounted } from "vue";
import SearchBadge from "@/components/SearchCar/SearchBadge.vue";

// import useModelSubCategoryFilter from "@/hooks/search/useModelSubCategoryFilter";

import { Category } from "@/model/SearchCar";
import VersionSeg from "@/components/SearchCar/layer4/VersionSeg.vue";
import GenerationSeg from "@/components/SearchCar/layer4/GenerationSeg.vue";

import SearchDoneBtn from "@/components/SearchCar/SearchDoneBtn.vue";

import { IonListHeader, IonSegment, IonSegmentButton } from "@ionic/vue";

import useModelDetailsTemp from "@/hooks/search/useModelDetailsTemp";
import FilterModelDetailsOptionsManager from "@/functional/SearchCar/layer4/FilterModelDetailsOptionsManager.vue";
import useEvent from "@/hooks/useEvent";

export default defineComponent({
  components: {
    IonSegment,
    IonSegmentButton,
    SearchDoneBtn,
    VersionSeg,
    GenerationSeg,
    SearchBadge,
    FilterModelDetailsOptionsManager,
  },
  props: {
    category: {
      type: Object as PropType<Category>,
    },
    brand: {
      type: String,
    },
    segment: {
      type: String,
    },
  },

  setup(props) {
    //segment
    const segmentValue = ref(props.segment || "generation");
    const segmentChanged = (e: CustomEvent) => {
      segmentValue.value = e.detail.value;
    };

    //selected

    const {
      getFilterList,
      handleSelect,
      commit,
      clearFilterList,
      fetchCurrentValue,
    } = useModelDetailsTemp(props.brand, props.category?.name);
    fetchCurrentValue();

    const versionSelect = getFilterList("version");
    const generationSelect = getFilterList("generation");

    const reset = () => {
      clearFilterList();
    };
    const emmiter = useEvent();
    emmiter.on("clear", reset);
    onUnmounted(() => {
      emmiter.off("clear", reset);
    });

    return {
      segmentValue,
      segmentChanged,
      versionSelect,
      generationSelect,
      handleSelect,
      commit,
    };
  },
});
</script>

<style scoped>
ion-button::part(native) {
  border-radius: 12px;
}
</style>
