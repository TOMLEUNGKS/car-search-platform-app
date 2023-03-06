<template>
  <ion-list class="mb-4">
    <template v-for="(valueKey, key) in attributes" :key="valueKey">
      <ion-item class="border-b-1 border-gray-200" v-if="carPost[valueKey]">
        <template v-if="key == 'Comments'">
          <div class="w-full py-3">
            <ion-label class="font-semibold">Comments</ion-label>
            <ion-textarea
              readonly
              class="mb-2 text-sm border rounded-large bg-gray-100 text-gray-500 min-h-24"
              wrap="hard"
              :value="carPost[valueKey]"
              @ion-focus.stop=""
            ></ion-textarea>
          </div>
        </template>

        <template v-else>
          <ion-label>{{ $t(key) }}</ion-label>
          <ion-label class="font-semibold" slot="end">{{
            $t(carPost[valueKey])
          }}</ion-label>
        </template>
      </ion-item>
    </template>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { IonTextarea } from "@ionic/vue";
import { PostDisplay } from "@/model/Posts";

export default defineComponent({
  name: "OverviewSeg",
  components: { IonTextarea },
  props: {
    carPost: {
      type: PostDisplay,
      required: true,
    },
  },

  setup(props) {
    const attributes = {
      Colour: "colour",
      "Interior colour": "interior_colour",
      "Body type": "body_type",
      "Doors / Seats": "door_seats",
      Drivetrain: "drivetrain",

      "Model year(MY)": "model_year",
      "Built year": "built_year",
      Warranty: "warranty",
      Comments: "comments",
    };

    return { attributes };
  },
});
</script>
