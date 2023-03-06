<template>
  <ion-router-outlet> </ion-router-outlet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonRouterOutlet } from "@ionic/vue";

export default defineComponent({
  name: "SearchCarPage",
  components: {
    IonRouterOutlet,
  },

  setup() {
    return {};
  },
});
</script>
