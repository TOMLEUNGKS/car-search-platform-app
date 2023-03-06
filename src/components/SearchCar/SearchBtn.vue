<template>
  <ion-button class="w-5/6 h-28 bg-blue-primary flex items-center rounded-2lg">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center">
        <ion-img src="/assets/icon/Car.svg">
          <ion-img src="/assets/icon/PlusCircle.svg"> </ion-img>
        </ion-img>
        <p class="text-white font-bold text-sm pl-1.5">{{$t("SEARCH YOUR CAR")}}</p>
      </div>

      <ion-img src="/assets/icon/ArrowCircleRight.svg" class="ml-12"> </ion-img>
    </div>
    <div class="triangle-up absolute"></div>
  </ion-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SearchBtn",
  components: {},

  setup(props) {
    return {};
  },
});
</script>

<style scoped>
ion-button::part(native) {
  border-radius: 12px;
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 150px solid #c6e1ff;
  top: -30px;
  right: -160px;
  z-index: -10;
}
</style>
