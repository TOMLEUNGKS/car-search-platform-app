<template>
  <BaseBackLayout>
    <ion-list>
      <ion-list-header>
        <ion-title class="pl-2 font-bold mt-4"> Select ad package </ion-title>
      </ion-list-header>
      <ion-label class="text-sm text-gray-400 ml-6">
        Please select an ad package for promoting your car.
      </ion-label>
      <div class="mt-2 mx-6 text-sm font-semibold grid gap-4">
        <Suspense>
          <AdPackageManager v-slot="{ products }">
            <PremiumBtn :product="products[0]" />
            <AdvancedBtn :product="products[1]" />
            <StandardBtn :product="products[2]" />
          </AdPackageManager>

          <template #fallback>
            <ion-loading />
          </template>
        </Suspense>
      </div>
    </ion-list>

    <BaseBtn
      :title="'PROCEED TO PAYMENT'"
      @proceed="proceedPaymemnt"
      :disabled="disabled"
    />

    <SaveBtn :title="'SAVE DRAFT'" @proceed="$router.push('payment')" />
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, onBeforeMount } from "vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import BaseBtn from "@/components/SellCar/BaseBtn.vue";
import SaveBtn from "@/components/SellCar/SaveBtn.vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    BaseBackLayout,
    BaseBtn,
    SaveBtn,
  },

  setup() {
    const store = useAdPackageStore();
    const { proceedPaymemnt } = store;
    const { selectPackage } = storeToRefs(store);

    let disabled = computed(() => selectPackage.value == null);

    return { disabled, proceedPaymemnt };
  },
});
</script>

<style scoped>
/deep/ ion-button.active::part(native) {
  border-spacing: 15px;
  border: 5px solid white;
  outline: 2px solid var(--ion-color-primary);
}

/deep/ .ad-content-text {
  white-space: normal;
}

/deep/ .triangle-up {
  width: 0;
  height: 0;
  border-left: 120px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 150px solid #c6e1ff;
  top: -20px;
  right: -150px;
  z-index: -10;
}

/deep/ ion-button::part(native) {
  border-radius: 12px;
}
</style>
