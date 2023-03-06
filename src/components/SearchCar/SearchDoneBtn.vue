<template>
  <div
    class="fixed bottom-0 bg-gray-100 bg-opacity-80 w-full flex items-center h-20"
  >
    <ion-button
      class="w-full font-semibold text-center rounded-xl px-4 h-4/5"
      @click="doneFilter"
      >{{$t("Done")}}</ion-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "SearchDoneBtn",
  components: {},

  setup() {
    const doneFilter = inject("doneFilter");
    return { doneFilter };
  },
});
</script>

<style scoped>
ion-button::part(native) {
  border-radius: 12px;
}
</style>
