<template>
  <SearchResultManager v-slot="{ searchResult }">
    <div class="font-bold ml-4">
      {{$t("Found ")}}{{ searchResult.length }} {{ searchResult.length > 1 ? $t("Cars") : $t("Car") }}
      
    </div>

    <CarPostCard
      v-for="carPost in searchResult"
      :carPost="carPost"
      button
      :key="carPost.post_id"
      @toCarPost="$router.push('car-post/' + carPost.post_id)"
    >
      <template v-slot:img>
        <ImgManager type="car-posts" :id="carPost.post_id" #default="{ urls }">
          <ImgsSlider :carImgs="urls" />
        </ImgManager>
      </template>
    </CarPostCard>
  </SearchResultManager>
</template>

<script setup lang="ts">
import CarPostCard from "../CarPosts/CarPostCard.vue";

import { priceFormatter } from "@/lib/utils";
import ImgsSlider from "@/components/Common/ImgsSlider.vue";
import ImgManager from "@/functional/Common/ImgManager.vue";

import SearchResultManager from "@/functional/SearchCar/result/SearchResultManager.vue";
</script>
