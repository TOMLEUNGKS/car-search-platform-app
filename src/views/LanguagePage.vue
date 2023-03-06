<template>
  <BaseBackLayout>
    <ion-toolbar class="px-4 py-2">
      <ion-title class="text-2xl font-bold">{{ $t("Language") }}</ion-title>
    </ion-toolbar>
    <ion-item class="mx-4 p-4" lines="none">

      <div class="flex flex-col gap-4 w-full">
        
        <ion-item button lines="none" class="w-full border rounded-xl font-semibold" @click="selectEN">English</ion-item>
        <ion-item button lines="none" class="w-full border rounded-xl font-semibold" @click="selectTC">繁體中文</ion-item>
        <ion-item button lines="none" class="w-full border rounded-xl font-semibold" @click="selectSC">简体中文</ion-item>
      </div>
    </ion-item>

  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonToolbar } from "@ionic/vue";
import { useI18n } from 'vue-i18n'
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

export default defineComponent({
  name: "AccountPage",
  components: {
    IonToolbar,
  },
  
  setup() {
    const { locale } = useI18n();
    
    const selectEN = () => {
      locale.value = 'en'
    }

    const selectTC = () => {
      locale.value = 'tc'
    }

    const selectSC = () => {
      locale.value = 'sc'
    }

    return {selectEN, selectTC, selectSC};
  },
});
</script>

