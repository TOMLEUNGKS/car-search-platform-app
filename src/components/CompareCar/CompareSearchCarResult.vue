<template>
  <SearchResultManager v-slot="{ searchResult }">
    <div class="font-bold ml-4">
      {{ searchResult.length }} Car{{ searchResult.length > 1 ? "s" : "" }}
      Found
    </div>

    <CarPostCard
      v-for="carPost in searchResult"
      :carPost="carPost"
      :key="carPost.post_id"
      @toCarPost="$router.push('car-post/' + carPost.post_id)"
    >
      <template v-slot:img>
        <ImgManager type="car-posts" :id="carPost.post_id" #default="{ urls }">
          <ImgsSlider :carImgs="urls" />
        </ImgManager>
      </template>

      <BaseBtn
        :title="'Add to compare'"
        class="mt-4"
        @click.stop="addCompare(carPost)"
      />
    </CarPostCard>
  </SearchResultManager>
</template>

<script setup lang="ts">
import CarPostCard from "../CarPosts/CarPostCard.vue";
import ImgsSlider from "@/components/Common/ImgsSlider.vue";
import ImgManager from "@/functional/Common/ImgManager.vue";
import BaseBtn from "@/components/SellCar/BaseBtn.vue";

import SearchResultManager from "@/functional/SearchCar/result/SearchResultManager.vue";
import { useRouter } from "vue-router";
import { useCarCompare } from "@/hooks/compare";
import { plainToInstance } from "class-transformer";
import { PostDisplay } from "@/model/Posts";

const { comparePosts } = useCarCompare();

const router = useRouter();
const addCompare = (carPost) => {
  comparePosts.push(carPost);
  router.replace("/compare-car");
};
</script>
