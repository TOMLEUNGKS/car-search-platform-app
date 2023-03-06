<template>
  <ion-segment
    mode="md"
    @ionChange="segmentChanged($event)"
    :value="segmentValue"
    swipe-gesture
    class="mx-4 w-auto"
  >
    <ion-segment-button value="overview">
      <ion-label class="text-sm normal-case font-bold">{{$t("Overview")}}</ion-label>
    </ion-segment-button>
    <ion-segment-button value="feature">
      <ion-label class="text-sm normal-case font-bold">{{$t("Feature")}}</ion-label>
    </ion-segment-button>
    <ion-segment-button value="spec">
      <ion-label class="text-sm normal-case font-bold">{{$t("Spec")}}</ion-label>
    </ion-segment-button>
  </ion-segment>

  <component
    :is="segmentValue + '-seg'"
    v-bind="{ carPost: postDisplay }"
  ></component>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OverviewSeg from "@/components/CarPosts/OverviewSeg.vue";
import FeatureSeg from "@/components/CarPosts/FeatureSeg.vue";
import SpecSeg from "@/components/CarPosts/SpecSeg.vue";
import { IonSegment, IonSegmentButton } from "@ionic/vue";
export default defineComponent({
  components: {
    IonSegment,
    IonSegmentButton,
    OverviewSeg,
    FeatureSeg,
    SpecSeg,
  },
  props: ["postDisplay"],

  setup(props) {
    const segmentValue = ref("overview");
    const segmentChanged = (e: CustomEvent) => {
      segmentValue.value = e.detail.value;
    };

    return { segmentValue, segmentChanged };
  },
});
</script>

<style scoped>
/* ion-segment {
  border-radius: 20px;
}

ion-segment-button {
  --indicator-height: 0px;
  --background: #f3f3f3;
  --background-checked: #fff;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
} */
</style>
