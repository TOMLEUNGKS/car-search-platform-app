<template>
  <template v-if="result.length > 0">
    <CarPostCard
      v-for="carPost in result"
      :carPost="carPost"
      button
      :key="carPost.post_id"
      @toCarPost="$router.push('search-car/car-post/' + carPost.post_id)"
    >
      <template v-slot:img>
        <ImgManager type="car-posts" :id="carPost.post_id" #default="{ urls }">
          <ImgsSlider :carImgs="urls" />
        </ImgManager>
      </template>
    </CarPostCard>
  </template>
  <div v-else class="fixed top-1/2 right-1/2 translate-x-1/2">
    <ion-img class="w-2/5 mx-auto" src="/assets/icon/ic_Empty-fav.svg" />
    <ion-title class="font-semibold text-sm text-gray-400 mt-2 text-center"
      >{{$t("No saved cars")}}</ion-title
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref, watch } from "vue";

import CarPostCard from "../CarPosts/CarPostCard.vue";

import useCarPost from "@/hooks/useCarPost";

import ImgsSlider from "@/components/Common/ImgsSlider.vue";
import ImgManager from "@/functional/Common/ImgManager.vue";

import { priceFormatter } from "@/lib/utils";
import useUser from "@/hooks/user/useUser";

export default defineComponent({
  name: "SavedCarResult",
  components: {
    CarPostCard,
    ImgsSlider,
    ImgManager,
  },

  setup(_, { emit }) {
    const { likedPost } = useUser();
    let result: Ref<any[]> = ref([]);

    watch(likedPost, async () => {
      const { getCarPostByIDArray } = useCarPost();
      result.value = await getCarPostByIDArray(likedPost.value);
    });

    onMounted(async () => {
      const { getCarPostByIDArray } = useCarPost();
      result.value = await getCarPostByIDArray(likedPost.value);
    });

    return { result, priceFormatter };
  },
});
</script>
