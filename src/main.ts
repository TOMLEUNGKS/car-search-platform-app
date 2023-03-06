import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import AppLayout from "@/components/Common/AppLayout.vue";
import {
  IonButton,
  IonCard,
  IonicVue,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonListHeader,
  IonInput,
  IonLoading,
} from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/tailwind.css";
import "./theme/variables.css";

import "./theme/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { closeLoading } from "@/hooks/useLoading";
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

import "reflect-metadata";

library.add(far, fas);

const pinia = createPinia();

const app = createApp(App).use(i18n)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(IonicVue)
  .use(router);

app.use(pinia);

app.component("ion-img", IonImg);
app.component("ion-card", IonCard);
app.component("ion-list", IonList);
app.component("ion-item", IonItem);
app.component("ion-title", IonTitle);
app.component("ion-label", IonLabel);
app.component("ion-button", IonButton);
app.component("ion-list-header", IonListHeader);
app.component("ion-loading", IonLoading);
app.component("ion-input", IonInput);

app.component("app-layout", AppLayout);
app.component("base-back-layout", BaseBackLayout);

router.isReady().then(() => {
  app.mount("#app");
});

// import firebase from "firebase";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

const firebaseAuth = getFirebaseAuth();

firebaseAuth.onAuthStateChanged(async (user) => {
  console.log("capacitor-firebase user", user);
  const { setAuthUserinLocalstore } = useAuthUser();
  await setAuthUserinLocalstore(user);
});

// FirebaseAuthentication.addListener("authStateChange", async ({ user }) => {
//   console.log("capacitor-firebase user", user);
//   const { setAuthUserinLocalstore } = useAuthUser();
//   await setAuthUserinLocalstore(user);
// });

import { AppState, App as capApp, URLOpenListenerEvent } from "@capacitor/app";

import i18n from './i18n'

capApp.addListener("appUrlOpen", function (event: URLOpenListenerEvent) {
  // Example url: https://beerswift.app/tabs/tabs2
  // slug = /tabs/tabs2
  const slug = event.url.split(".io").pop() as string;

  const [path, queryStr] = slug.split("?");

  const query = {};

  if (queryStr) {
    //only handle 1 query
    const [key, value] = queryStr.split("=");
    query[key] = value;
  }

  // We only push to the route if there is a slug present
  if (slug) {
    router.push({
      path: path,
      query,
    });
  }
});
