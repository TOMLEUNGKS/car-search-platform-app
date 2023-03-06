<template>
  <swiper :pagination="true" :modules="modules" class="max-w-screen">
    <swiper-slide v-if="carImgsData.length == 0">
      <ion-img :src="'/assets/imgs/not-found-image.jpg'" />
    </swiper-slide>
    <template v-else>
      <swiper-slide v-for="(img, idx) in carImgsData" :key="img">
        <ion-img
          :src="img"
          @ionError="carImgsData[idx] = '/assets/imgs/not-found-image.jpg'"
        />
      </swiper-slide>
    </template>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { BASE_URL } from "@/lib/config";

export default defineComponent({
  name: "ImgsSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    carImgs: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const carImgsData = ref([...props.carImgs]);

    return { modules: [Pagination], carImgsData };
  },
});
</script>

<style scoped>
.swiper {
  --bullet-background: #cecece;
  --bullet-background-active: #003270;
  --swiper-pagination-bullet-inactive-opacity: 0.7;
}

ion-img::part(image) {
  height: auto;
  /* max-height: 300px; */
  margin-left: auto;
  margin-right: auto;
}
</style>
