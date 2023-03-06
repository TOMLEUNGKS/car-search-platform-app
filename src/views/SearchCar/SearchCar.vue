<template>
  <app-layout>
    <div
      class="bg-front-drive w-full h-64 bg-no-repeat bg-cover flex bg-blend-darken bg-slate-300 flex-col"
    >
      <ion-img
        class="mx-auto mt-10 pl-2"
        src="assets/icon/logo.svg"
        alt="logo"
      />

      <SearchBtn class="mx-auto mt-6" @click="routeToFilter" />
    </div>

    <ion-title class="font-bold text-3xl pt-4">{{ $t("Browse") }}</ion-title>
    <HomeSlide
      :title="HomeSlideEnum.CarBrands"
      category="brand"
      @click-slide="showSearchResult"
    />
    <HomeSlide
      :title="HomeSlideEnum.CarTypes"
      category="body-type"
      @click-slide="showSearchResult"
    />
    <HomeSlide :title="HomeSlideEnum.FeaturedCars" />
    <ion-title class="font-bold text-3xl pt-4">{{ $t("Newsfeeds") }}</ion-title>
    <HomeSlide :title="HomeSlideEnum.LatestCarForSell" />
    <HomeSlide :title="HomeSlideEnum.FeaturedArticles" />
    <HomeSlide :title="HomeSlideEnum.CarNews" />
  </app-layout>
</template>

<script lang="ts" setup>
import { HomeSlideEnum } from "@/model/SearchCar";

const router = useRouter();

const routeToFilter = () => {
  const { resetSearchFilters } = useSearchFilter();
  const { resetModelFilters } = useModelFilter();

  resetSearchFilters();
  resetModelFilters();
  router.push("/tabs/search-car/filter");
};

const showSearchResult = (category, slide) => {
  const { addCategoryFilter } = useSearchFilter();
  addCategoryFilter(category, slide);
  router.push("/tabs/search-car/result");
};
</script>

<script lang="ts">
export default {
  name: "SearchCar",
};
</script>
