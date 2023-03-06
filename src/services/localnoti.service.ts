import { Capacitor } from "@capacitor/core";

import { LocalNotifications } from "@capacitor/local-notifications";

export class LocalnotiService {
  constructor(private router) {
    this.router = router;
  }

  async initPush() {
    if (Capacitor.getPlatform() !== "web") {
      await this.registerPush();
    }
  }

  private async registerPush() {
    let permStatus = await LocalNotifications.checkPermissions();

    if (permStatus.display === "prompt") {
      permStatus = await LocalNotifications.requestPermissions();
    }

    if (permStatus.display !== "granted") {
      throw new Error("User denied permissions!");
    }
    // await LocalNotifications.register();

    // await LocalNotifications.addListener("registration", (token) => {
    //   console.log("My token: " + JSON.stringify(token));
    // });

    // await LocalNotifications.addListener("registrationError", (error: any) => {
    //   console.log("Error: " + JSON.stringify(error));
    // });

    await LocalNotifications.addListener(
      "localNotificationReceived",
      async (notification) => {
        console.log("Push received: " + notification);
      }
    );

    await LocalNotifications.addListener(
      "localNotificationActionPerformed",
      async (notification) => {
        const actionid = notification.actionId;
        console.log("actionid" + actionid);
        const data = notification.notification.extra;
        console.log(
          "Action performed: " + JSON.stringify(notification.notification)
        );
        if (data.senderId) {
          this.router.push(`/message/${data.senderId}`);
        }
      }
    );
  }
}
