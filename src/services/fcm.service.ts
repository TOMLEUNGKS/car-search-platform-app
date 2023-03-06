import { Capacitor } from "@capacitor/core";

import { PushNotifications } from "@capacitor/push-notifications";

export class FcmService {
  constructor(private router) {
    this.router = router;
  }

  async initPush() {
    if (Capacitor.getPlatform() !== "web") {
      await this.registerPush();
    }
  }

  private async registerPush() {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== "granted") {
      throw new Error("User denied permissions!");
    }
    await PushNotifications.register();

    await PushNotifications.addListener("registration", (token) => {
      console.log("My token: " + JSON.stringify(token));
    });

    await PushNotifications.addListener("registrationError", (error: any) => {
      console.log("Error: " + JSON.stringify(error));
    });

    await PushNotifications.addListener(
      "pushNotificationReceived",
      async (notification) => {
        console.log("Push received: " + notification);
      }
    );

    await PushNotifications.addListener(
      "pushNotificationActionPerformed",
      async (notification) => {
        const actionid = notification.actionId;
        console.log("actionid" + actionid);
        const data = notification.notification.data;
        console.log(
          "Action performed: " + JSON.stringify(notification.notification)
        );
        if (data.detailsId) {
          this.router.push(`/home/${data.detailsId}`);
        }
      }
    );
  }
}
