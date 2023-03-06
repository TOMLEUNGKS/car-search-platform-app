<template>
  <ion-toolbar>
    <ion-title class="font-semibold">{{ $t(title) }}</ion-title>
    <!-- <ion-nav-link slot="end" class="text-sm mr-4 font-light"
      >View all</ion-nav-link
    > -->
  </ion-toolbar>

  <swiper :slidesPerView="2" :breakpoints="swiperOptions">
    <swiper-slide v-for="(img, slide) in targetSlide.slide" :key="slide">
      <div class="flex flex-col items-center">
        <ion-card
          class="w-40 h-28 flex rounded-xl shadow-md"
          @click="$emit('clickSlide', category, slide)"
        >
          <ion-img :src="`assets/Home/${img}`" class="mx-auto self-center" />
        </ion-card>
        <p class="text-sm">{{ $t(slide) }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { HomeSlideEnum } from "@/model/SearchCar";
import useHomeSlide from "@/hooks/useHomeSlide";

import { IonHeader, IonToolbar, IonNavLink } from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

export default defineComponent({
  components: {
    IonToolbar,
    Swiper,
    SwiperSlide,
  },
  emits: ["clickSlide"],
  props: {
    title: {
      type: String as PropType<HomeSlideEnum>,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
  },

  setup(props) {
    const swiperOptions = {
      480: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 4.5,
      },
    };
    const { getActiveHomeSlideByType } = useHomeSlide();
    const targetSlide = getActiveHomeSlideByType(props.title);
    return { swiperOptions, targetSlide };
  },
});
</script>
