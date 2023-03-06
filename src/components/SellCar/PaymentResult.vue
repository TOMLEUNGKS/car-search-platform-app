<template>
  <ion-list class="h-full">
    <div
      class="flex flex-col items-center gap-4 justify-between"
      v-if="success"
    >
      <font-awesome-icon
        class="w-20 h-20 text-primary"
        :icon="['fas', 'circle-check']"
      />
      <span class="text-3xl font-bold"> Successful Payment </span>
    </div>
    <div class="flex flex-col items-center gap-4 justify-between" v-else>
      <font-awesome-icon
        class="w-20 h-20 text-red"
        :icon="['fas', 'circle-xmark']"
      />
      <span class="text-3xl font-bold"> Unsuccessful Payment </span>
    </div>
    <BaseBtn :title="'FINISH'" @proceed="$router.push('/tabs/sell-car')" />
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useSellCarPost from "@/hooks/sell/useSellCarPost";

import BaseBtn from "@/components/SellCar/BaseBtn.vue";

export default defineComponent({
  components: {
    BaseBtn,
  },
  props: ["session_id"],
  async setup(props) {
    const { confirmPayment } = useSellCarPost();
    let success = ref(false);
    try {
      success = await confirmPayment(props.session_id);
    } catch (e) {
      console.log(e);
    }
    return { success };
  },
});
</script>
