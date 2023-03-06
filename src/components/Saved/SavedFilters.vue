<template>
  <template v-if="savedFilter.length == 0">
    <div class="fixed top-1/2 right-1/2 translate-x-1/2">
      <ion-img
        class="mx-auto w-1/4"
        src="/assets/icon/ic_Empty_filters.svg"
      />
      <ion-title class="font-semibold text-sm text-gray-400 mt-2 text-center"
        >{{$t("No saved filters")}}</ion-title
      >
    </div>
  </template>
  <template v-else>
    <Suspense>
      <SavedFilterItem
        v-for="filterkey in savedFilter"
        :key="filterkey"
        :filter_key="filterkey"
      >
      </SavedFilterItem>
    </Suspense>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useFilterStore } from "@/stores";
import SavedFilterItem from "@/components/Saved/SavedFilterItem.vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: { SavedFilterItem },
  async setup() {
    const filterStore = useFilterStore();

    console.log("ionic view");
    await filterStore.fetchFilterKeys();

    const savedFilter = filterStore.keys;

    return { savedFilter };
  },
});
</script>
