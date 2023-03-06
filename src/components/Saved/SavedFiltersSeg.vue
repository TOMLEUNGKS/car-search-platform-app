<template>
  <Suspense>
    <SavedFilters />

    <template #fallback>
      <ion-loading />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useFilterStore } from "@/stores";
import { onIonViewWillEnter } from "@ionic/vue";
import SavedFilters from "./SavedFilters.vue";
import { IonLoading } from "@ionic/vue";

export default defineComponent({
  components: {
    SavedFilters,
    IonLoading,
  },
});
</script>
