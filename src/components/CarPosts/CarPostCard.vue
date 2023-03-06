<template>
  <ion-card
    class="m-0 sm:w-full ion-activatable"
    :button="button"
    @click.stop="$emit('toCarPost')"
  >
    <slot name="img" />
    <ion-card-header class="pb-2 pl-3">
      <ion-card-title class="font-bold text-xl flex justify-between">
        <span>{{ carPost.name }}</span>
        <like-manager
          v-if="like"
          :post_id="`${post_id}`"
          v-slot="{ likeHandler, isLiked }"
          :key="post_id"
        >
          <div @click.stop="likeHandler">
            <font-awesome-icon
              v-if="isLiked"
              class="text-red-500"
              icon="fa-solid fa-heart"
            />
            <font-awesome-icon v-else icon="fa-regular fa-heart" />
          </div>
        </like-manager>
      </ion-card-title>
      <ion-card-subtitle class="font-semibold text-lg mt-0"
        >{{ carPost.listing_price }}
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content class="border-t">
      <div class="grid grid-cols-2 justify-center list-disc">
        <li v-if="carSpec.model['body-type']">
          {{ $t(carSpec.model["body-type"]) }}
        </li>
        <li v-if="transmission">{{ $t(transmission) }}</li>
        <li
          v-if="
            carSpec['Cylinder'] ||
            carSpec['Engine Size'] ||
            carSpec['Fuel type']
          "
        >
          <span v-if="carSpec['Cylinder']"> {{ carSpec["Cylinder"] }}cyl </span>
          <span v-if="carSpec['Engine Size']">
            {{ roundOf(carSpec["Engine Size"] / 1000, 1).toFixed(1) }}L
          </span>
          <span v-if="carSpec['Fuel type']">
            T {{ $t(carSpec["Fuel type"]) }}
          </span>
        </li>
        <li>{{ mileage }}</li>
        <!-- <li v-if="carSpec['Horsepower'] || carSpec['Max Horsepower']"> -->
        <li v-if="carSpec['Horsepower']">
          <span v-if="carSpec['Horsepower']">
            {{ Math.round(carSpec["Horsepower"]) }}hp
          </span>
          <!-- <span v-if="carSpec['Max Horsepower']">
            @{{ carSpec["Max Horsepower"] }}rpm
          </span> -->
        </li>
        <li v-if="carSpec['Air Induction']">
          {{ $t(carSpec["Air Induction"]) }}
        </li>
      </div>
      <slot />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from "vue";
import {
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

import LikeManager from "@/functional/CarPost/LikeManager.vue";

import { cardTypeOptions } from "@/model/types";
import { roundOf, priceFormatter } from "@/lib/utils";
import { PostDisplay } from "@/model/Posts";

export default defineComponent({
  name: "CarPostCard",
  components: {
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    LikeManager,
  },
  props: {
    carPost: {
      type: PostDisplay,
      required: true,
    },

    button: {
      type: Boolean,
      default: false,
    },
    like: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const { carPost } = toRefs(props);

    const carSpec = carPost.value.car;
    const post_id = carPost.value.post_id;

    const mileage = carPost.value._mileage;
    const transmission = carPost.value["transmission"];

    return {
      roundOf,
      carSpec,
      post_id,
      mileage,
      transmission,
    };
  },
});
</script>
