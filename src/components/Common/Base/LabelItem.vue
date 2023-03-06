<template>
  <ion-item ref="wrap">
    <ion-label v-if="!isEllipsisActive" ref="keyLabel">{{
      valuekey
    }}</ion-label>

    <template v-else>
      <font-awesome-icon
        :id="valuekey + '-trigger-' + idx"
        icon="fa-solid fa-circle-info"
      />

      <ion-popover
        :trigger="valuekey + '-trigger-' + idx"
        trigger-action="click"
      >
        <ion-content class="ion-padding">{{ valuekey }}</ion-content>
      </ion-popover>
    </template>

    <ion-label class="value font-semibold text-right ml-4" slot="end">{{
      value
    }}</ion-label>
  </ion-item>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, onMounted, watch, watchEffect } from "vue";

defineProps(["valuekey", "value", "idx"]);

const keyLabel = ref(null);
const wrap = ref();
const isEllipsisActive = ref(false);

const windowWidth = ref(window.innerWidth);
// onMounted(() => {
//   window.addEventListener("resize", function () {
//     windowWidth.value = window.innerWidth;
//   });
// });
const rAF = function () {
  return new Promise((r) => window.requestAnimationFrame(r));
};

watch(windowWidth, () => {
  nextTick(() => {
    isEllipsisActive.value =
      keyLabel.value.$el.scrollWidth > keyLabel.value.$el.offsetWidth;
  });
});

watchEffect(async () => {
  if (keyLabel.value) {
    await nextTick();
    await rAF();
    // setTimeout(() => {

    isEllipsisActive.value =
      keyLabel.value.$el.scrollWidth > keyLabel.value.$el.offsetWidth;
    // }, 200);
  }
});
</script>
<style scoped>
ion-label.value {
  white-space: normal !important;
}

/* ion-item::part(native) div.input-wrapper {
  flex-basis: 10%;
} */
</style>
