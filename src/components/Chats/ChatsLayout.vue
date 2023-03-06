<template>
  <BaseBackLayout>
    <!-- <template v-slot:primary>
      <ion-button fill="clear">
        <font-awesome-icon
          v-if="isPlatform('ios')"
          slot="icon-only"
          class="w-12"
          :icon="['fas', 'fa-ellipsis']"
        />
        <font-awesome-icon
          v-else
          slot="icon-only"
          class="w-12"
          icon="fa-solid fa-ellipsis-vertical"
        />
      </ion-button>
    </template> -->

    <slot></slot>
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import { isPlatform } from "@ionic/vue";

export default defineComponent({
  components: {
    BaseBackLayout,
  },
  setup() {
    return { isPlatform };
  },
});
</script>
