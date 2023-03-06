<template>
  <ion-page>
    <ion-header collapse="fade" :translucent="true">
      <ion-toolbar>
        <div class="triangle-up absolute"></div>
        <ion-buttons slot="start" class="ml-4">
          <ion-thumbnail v-if="isAuthed" @click="$router.push('/tabs/account')"
            class="bg-gray-200 mx-4 border-secondary flex">
            <img :src="getUser.photoURL || 'assets/icon/account-user.svg'" alt="avater" referrerpolicy="no-referrer"
              class="object-cover" />
          </ion-thumbnail>
        </ion-buttons>
        <ion-buttons slot="end" class="mr-4 items-center flex gap-4">
          <ion-img src="/assets/icon/BellSimple.svg" class="cursor-pointer">
          </ion-img>
          <router-link to="/chats">
            <ion-img src="/assets/icon/ChatDots.svg" class="cursor-pointer" />
          </router-link>
          <router-link to="/language">
            <ion-thumbnail slot="end" class="mr-0 items-center flex gap-4 px-0">
              <img src="/assets/icon/Globe.svg" />
            </ion-thumbnail>
          </router-link>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
//h-full flex color="primary"

import { defineComponent } from "vue";
import useAuthuser from "@/hooks/user/useAuthUser";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonThumbnail,
  IonButtons,
  IonContent,
} from "@ionic/vue";
import useUser from "@/hooks/user/useUser";

export default defineComponent({
  name: "AppLayout",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonThumbnail,
    IonButtons,
    IonContent,
  },

  setup() {
    const { isAuthed } = useAuthuser();
    const { getUser } = useUser();

    return { isAuthed, getUser };
  },
});
</script>

<style scoped>
.triangle-up {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 100px solid #c6e1ff;
  top: -15px;
  left: -115px;
}

ion-header ion-toolbar {
  --background: var(--ion-color-primary);
  --color: var(--ion-color-primary-contrast);
}

ion-thumbnail {
  --size: 32px;
  --border-radius: 999px;
}
</style>
