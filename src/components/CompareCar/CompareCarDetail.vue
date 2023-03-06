<template>
  <div class="px-2">
    <div>
      <span class="font-semibold text-xl"> Car {{ idx }}:</span>
    </div>
    <Suspense>
      <ImgManager type="car-posts" :id="carPost.post_id" #default="{ urls }">
        <ImgsSlider :carImgs="urls" />
      </ImgManager>
    </Suspense>
    <div>
      <span class="text-xl font-bold">
        {{ carPost.name }}
      </span>
    </div>
    <div class="py-2">
      <span class="text-lg font-semibold text-gray-500">{{
        carPost.listing_price
      }}</span>
    </div>

    <hr class="mx-auto h-0.5 bg-secondary" />

    <ion-list>
      <ion-item>
        <ion-label slot="end"> {{ carPost["body_type"] }} </ion-label>
      </ion-item>
      <ion-item>
        <ion-label slot="end"> {{ carPost["transmission"] }} </ion-label>
      </ion-item>
      <ion-item>
        <ion-label slot="end">
          {{ carPost.colour }}
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label id="door" slot="end">
          {{ carPost.door_seats }}
        </ion-label>
      </ion-item>
      <ion-item lines="none">
        <ion-label slot="end"> {{ carPost._mileage }} </ion-label>
      </ion-item>
    </ion-list>

    <hr class="mx-auto h-0.5 bg-secondary" />

    <template v-for="attr in attributes" :key="attr.name">
      <ion-list>
        <template v-for="(valueKey, key) in attr.subAttrs" :key="key">
          <label-item
            v-if="!emptyPropertyList.includes(valueKey)"
            :valuekey="key"
            :value="carPost[valueKey]"
            :isLast="lastList.includes(key)"
            :idx="idx"
          />
        </template>
      </ion-list>

      <hr v-if="attr.name !== 'Others'" class="mx-auto h-0.5 bg-secondary" />
    </template>
  </div>
</template>

<script setup lang="ts">
//components
import ImgManager from "@/functional/Common/ImgManager.vue";
import ImgsSlider from "@/components/Common/ImgsSlider.vue";
import { PostDisplay } from "@/model/Posts";
import LabelItem from "../Common/Base/LabelItem.vue";

const props = defineProps({
  carPost: {
    type: PostDisplay,
    required: true,
  },
  idx: {
    type: String,
  },
});

console.log(props.carPost);

const { attributes, emptyPropertyList } = useCarCompare();

const lastList = attributes.map((ele) => Object.keys(ele.subAttrs).at(-1));
</script>

<style scoped>
ion-label#door {
  white-space: normal;
  text-align: right;
}
ion-list ion-item:last-child {
  --inner-border-width: 0;
}
</style>
