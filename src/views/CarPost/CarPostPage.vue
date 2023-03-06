<template>
  <base-back-layout>
    <Suspense>
      <PostManager
        :post_id="post_id"
        v-slot:default="{ postDisplay }: { postDisplay: PostDisplay }"
      >
        <PostIntroContainer :post-display="postDisplay" />

        <div class="border-t mt-2 py-2">
          <PostDetailContainer :post-display="postDisplay" />

          <ion-nav-link
            @click="routeToCompare(postDisplay)"
            class="underline flex justify-center mb-4 cursor-pointer"
          >
            <ion-img src="assets/icon/Swap.svg" class="w-fit" />
            <span class="text-primary text-base">{{$t("compare with another car")}}</span>
          </ion-nav-link>

          <!-- <ion-title class="font-bold text-xl"
            >Car you might be interested...</ion-title
          >
          <swiper :slidesPerView="2.5">
            <swiper-slide
              v-for="(img, slide) in targetSlide.slide"
              :key="slide"
              class="ml-8"
            >
              <div class="flex flex-col items-center w-40">
                <ion-card class="w-40 h-28 flex rounded-xl shadow-lg">
                  <ion-img
                    :src="`assets/Home/${img}.png`"
                    class="mx-auto self-center"
                  />
                </ion-card>
                <p class="text-sm">{{ slide }}</p>
              </div>
            </swiper-slide>
          </swiper> -->
        </div>
      </PostManager>

      <template #fallback>
        <ion-loading />
      </template>
    </Suspense>
  </base-back-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonNavLink } from "@ionic/vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

import useHomeSlide from "@/hooks/useHomeSlide";

import PostManager from "@/functional/CarPost/PostManager.vue";

import { PostDisplay } from "@/model/Posts";
import PostIntroContainer from "@/components/CarPosts/PostIntroContainer.vue";
import PostDetailContainer from "@/components/CarPosts/PostDetailContainer.vue";
import { useRouter } from "vue-router";
import { useCarCompare } from "@/hooks/compare";

export default defineComponent({
  name: "CarPostPage",
  components: {
    BaseBackLayout,

    // Swiper,
    // SwiperSlide,
    PostManager,

    IonNavLink,
    PostIntroContainer,
    PostDetailContainer,
  },

  props: ["post_id"],

  setup(props) {
    const segmentValue = ref("overview");

    const { getActiveHomeSlideByType } = useHomeSlide();
    const targetSlide = getActiveHomeSlideByType("Car news");

    const segmentChanged = (e: CustomEvent) => {
      segmentValue.value = e.detail.value;
    };

    const { comparePosts } = useCarCompare();

    // const postDisplay = new PostDisplayObject(carPost);
    const router = useRouter();
    const routeToCompare = (postDisplay: PostDisplay) => {
      comparePosts.push(postDisplay);
      router.push("/compare-car");
    };

    return {
      segmentValue,
      targetSlide,
      segmentChanged,
      routeToCompare,
    };
  },
});
</script>
<style scoped>
ion-segment {
  border-radius: 20px;
}

ion-segment-button {
  --indicator-height: 0px;
  --background: #f3f3f3;
  --background-checked: #fff;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
}
</style>
