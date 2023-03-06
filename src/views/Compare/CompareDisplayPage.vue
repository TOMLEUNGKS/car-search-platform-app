<template>
  <base-back-layout>
    <ion-toolbar>
      <h1 class="p-4 font-bold text-3xl">Car comparison</h1>
    </ion-toolbar>

    <div class="grid grid-cols-2 gap-2">
      <CompareCarDetail :carPost="comparePosts[0]" :idx="'1'" />
      <CompareCarDetail :carPost="comparePosts[1]" :idx="'2'" />
    </div>

    <BaseBtn title="COMPARE ANOTHER CARS" @proceed="$router.back()" />
  </base-back-layout>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";

import { useCarCompare } from "@/hooks/compare";

import useSearchFilter from "@/hooks/search/useSearchFilter";
import useModelFilter from "@/hooks/search/useModelFilter";
import CompareCarDetail from "@/components/CompareCar/CompareCarDetail.vue";
import BaseBtn from "@/components/SellCar/BaseBtn.vue";

import { onBeforeRouteLeave } from "vue-router";

const { comparePosts, genEmptyPropertyList, reset } = useCarCompare();

genEmptyPropertyList();

onBeforeRouteLeave((to, from) => {
  reset();
});
</script>
