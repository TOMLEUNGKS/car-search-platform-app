<template>
  <div class="py-2">
    <div class="flex justify-between px-4 mb-2">
      <div class="flex items-center gap-2">
        <ion-img src="/assets/icon/CarSimple.svg" />
        <span class="font-semibold text-xl"> Car {{ idx + 1 }}:</span>
      </div>
      <Badge :title="'Remove'" :event="'removePost' + idx" cancelable></Badge>
    </div>

    <Suspense>
      <CarPostCard :car-post="carPost">
        <template v-slot:img>
          <ImgManager
            type="car-posts"
            :id="carPost.post_id"
            #default="{ urls }"
          >
            <ImgsSlider :carImgs="urls" />
          </ImgManager>
        </template>
      </CarPostCard>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
//components
import SearchBadge from "../SearchCar/SearchBadge.vue";
import Badge from "../Common/Badge.vue";
import CarPostCard from "../CarPosts/CarPostCard.vue";
import ImgManager from "@/functional/Common/ImgManager.vue";
import ImgsSlider from "@/components/Common/ImgsSlider.vue";

import useEvent from "@/hooks/useEvent";
import { useCarCompare } from "@/hooks/compare";

const emmiter = useEvent();
//hooks
const { comparePosts } = useCarCompare();

const props = defineProps(["carPost", "idx"]);

emmiter.on("removePost" + props.idx, () => {
  comparePosts.splice(props.idx, 1);
});
</script>
