<template>
  <Suspense>
    <SavedCarResult />
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SavedCarResult from "./SavedCarResult.vue";
import { IonLoading } from "@ionic/vue";

export default defineComponent({
  components: {
    SavedCarResult,
  },
});
</script>
