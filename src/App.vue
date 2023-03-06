<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { alertController, IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import { useBackButton, useIonRouter } from "@ionic/vue";
import { App as capApp } from "@capacitor/app";
// import { FcmService } from "@/services/fcm.service";
import { LocalnotiService } from "@/services/localnoti.service";
import { subscribeMessage } from "@/services/message.service";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const ionRouter = useIonRouter();

    useBackButton(10, async () => {
      if (!ionRouter.canGoBack()) {
        const alert = await alertController.create({
          header: "Exit App?",
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
            },
            {
              text: "OK",
              role: "confirm",
              handler: () => {
                capApp.exitApp();
              },
            },
          ],
        });

        await alert.present();
      } else {
        ionRouter.back();
      }
    });

    // const fcm = new FcmService(ionRouter).initPush();
    const localnoti = new LocalnotiService(ionRouter).initPush();
    subscribeMessage();
  },
});
</script>
