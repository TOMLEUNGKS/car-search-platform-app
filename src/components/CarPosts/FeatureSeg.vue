<template>
  <div>
    <ion-list
      class="m-2 mt-0 px-4 first:border-b"
      v-for="(valueKey, key) in attributes"
      :key="valueKey"
    >
      <ion-list-header>
        <ion-label class="font-semibold text-base">
          {{ $t(key) }}
        </ion-label>
      </ion-list-header>
      <ion-textarea
        class="border rounded-xl h-fit mb-2 text-sm font-normal"
        :value="carPost[valueKey]"
        readonly
      ></ion-textarea>
    </ion-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { IonTextarea, IonListHeader } from "@ionic/vue";
import { PostDisplay } from "@/model/Posts";

export default defineComponent({
  name: "FeatureSeg",
  components: {
    IonTextarea,
    IonListHeader,
  },
  props: {
    carPost: {
      type: PostDisplay,
      required: true,
    },
  },

  setup(props) {
    const attributes = {
      "Factory options": "factory_options",
      "Aftermarket options": "aftermarket_options",
    };

    return { attributes };
  },
});
</script>
