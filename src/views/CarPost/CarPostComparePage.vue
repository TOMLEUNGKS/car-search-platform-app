<template>
  <base-back-layout>
    <ion-toolbar>
      <ion-title class="text-2xl font-bold">Compare your choice</ion-title>
    </ion-toolbar>

    <template v-for="(post, idx) in comparePosts" :key="idx">
      <Suspense>
        <CompareCarCard :idx="idx" :car-post="post" />
      </Suspense>
    </template>

    <template v-if="comparePosts.length < 2">
      <div class="p-4">
        <span class="font-semibold text-lg">Add another car to compare</span>
      </div>
      <div class="w-full">
        <SearchBtn class="mx-auto mt-2" @click="routeToFilter" />
      </div>
    </template>

    <template v-else>
      <!-- <router-link to="/compare-display" custom v-slot="navigate"> -->
      <BaseBtn title="COMPARE CARS" @click.stop="routeToDisplay" />
      <!-- </router-link> -->
    </template>
  </base-back-layout>
</template>

<script lang="ts" setup>
//components
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import CompareCarCard from "@/components/CompareCar/CompareCarCard.vue";
import SearchBtn from "@/components/SearchCar/SearchBtn.vue";
import BaseBtn from "@/components/SellCar/BaseBtn.vue";

// import CompareSearchFilter from "../SearchCar/CompareSearchFilter.vue";

//hooks
import { useCarCompare } from "@/hooks/compare";
import { modalController } from "@ionic/vue";
import { useRouter, RouterLink } from "vue-router";
import useEvent from "@/hooks/useEvent";
import { onBeforeUnmount } from "vue";

onBeforeUnmount(() => {
  reset();
});

const emmiter = useEvent();
const { comparePosts, reset } = useCarCompare();

// const openSearchModal = async () => {
//   const modal = await modalController.create({
//     component: CompareSearchFilter,
//   });
//   await modal.present();
// };

const router = useRouter();
const routeToFilter = () => {
  router.push("/search-car/filter?redirect=/compare-result");
};

const routeToDisplay = () => {
  router.push("/compare-display");
};
</script>
