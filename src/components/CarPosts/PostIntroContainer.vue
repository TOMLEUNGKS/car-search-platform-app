<template>
  <ion-card class="m-0 sm:w-full shadow-none">
    <Suspense>
      <ImgManager
        type="car-posts"
        :id="postDisplay.post_id"
        #default="{ urls }"
      >
        <ImgsSlider :carImgs="urls" />
      </ImgManager>
    </Suspense>

    <ion-card-header class="pb-2 pl-3">
      <ion-card-title class="font-bold text-2xl flex justify-between">
        <span>{{ postDisplay.name }}</span>

        <LikeManager
          :post_id="postDisplay.post_id"
          v-slot="{ likeHandler, isLiked }"
          v-if="!own"
        >
          <div @click.stop="likeHandler">
            <font-awesome-icon
              v-if="isLiked"
              class="text-red-500"
              icon="fa-solid fa-heart"
            />
            <font-awesome-icon v-else icon="fa-regular fa-heart" />
          </div>
        </LikeManager>
      </ion-card-title>
      <ion-card-subtitle class="font-semibold text-lg mt-0"
        >{{ postDisplay.listing_price }}
      </ion-card-subtitle>

      <div class="flex justify-between" v-if="isAuthed">
        <span class="font-light">
          {{$t("Dealer")}}:
          <Suspense>
            <DealerManager
              :dealerID="postDisplay.dealerID"
              v-slot:default="{ dealer }"
            >
              <span class="underline">{{ dealer.displayName }}</span>
            </DealerManager>
          </Suspense>
        </span>

        <router-link :to="'/message/' + postDisplay.dealerID" v-if="postDisplay.dealerID !== getAuthUser.uid">
          <ion-badge class="rounded-full flex py-1 px-2 items-center w-fit">
            <ion-img src="/assets/icon/Chats.svg"></ion-img>
            <ion-label class="font-extralight text-sm">{{$t("message")}}</ion-label>
          </ion-badge>
        </router-link>
      </div>
    </ion-card-header>

    <ion-card-content class="border-t border-secondary">
      <div class="grid grid-cols-3 justify-items-center mt-4 mx-auto w-full">
        <car-post-icon style="border-right: 1px;" class="rounded-l-lg" icon="gauge" :attribute="postDisplay._mileage" />
        <car-post-icon class="border-x-1" icon="CarSimple" :attribute=$t(postDisplay.body_type) />
        <car-post-icon
          style="border-left: 1px;"
          class="rounded-r-lg"
          icon="GearSix"
          :attribute=$t(postDisplay.transmission)
        />
      </div>
      <div class="grid grid-cols-2 justify-items-center -mt-0.5 w-2/3 mx-auto">
        <car-post-icon
          style="border-right: 0px;"
          class="rounded-bl-lg"
          icon="GasPump"
          :attribute="postDisplay.combined_fuel_consumption"
        />
        <car-post-icon
          class="rounded-br-lg"
          icon="BatteryCharging"
          :attribute="postDisplay.horsepower"
        />
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import CarPostIcon from "@/components/CarPosts/CarPostIcon.vue";
import DealerManager from "@/functional/Users/DealerManager.vue";
import LikeManager from "@/functional/CarPost/LikeManager.vue";

import ImgsSlider from "@/components/Common/ImgsSlider.vue";
import ImgManager from "@/functional/Common/ImgManager.vue";
import { PostDisplay } from "@/model/Posts";


export default defineComponent({
  components: {
    ImgsSlider,
    ImgManager,
    CarPostIcon,
    DealerManager,
    LikeManager,
  },
  props: {
    postDisplay: {
      type: Object as PropType<PostDisplay>,
      required: true,
    }
  },
  setup(){
    const {isAuthed, getAuthUser} = useAuthUser()
    return {isAuthed, getAuthUser}
  }
});
</script>
