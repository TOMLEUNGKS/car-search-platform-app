<template>
  <app-layout>
    <ion-toolbar class="px-4 py-2">
      <ion-title class="text-2xl font-bold">{{$t("Account")}}</ion-title>
    </ion-toolbar>

    <ion-item v-if="isAuthed" class="mx-4 pb-2 border-b" lines="none">
      <div class="flex gap-1 items-center">
        <ion-thumbnail class="bg-gray-200 rounded-full mx-4 w-20 h-20 flex">
          <img
            :src="getUser.photoURL || 'assets/icon/account-user.svg'"
            class="p-1 rounded-full object-cover"
            referrerpolicy="no-referrer"
          />
        </ion-thumbnail>
        <div class="flex flex-col col-span-2">
          <ion-label class="text-2xl font-bold">{{
            getUser.displayName
          }}</ion-label>
          <ion-label>{{ getAuthUser.email }}</ion-label>
          <router-link to="/edit">
            <ion-button
              class="rounded-xl normal-case text-semibold w-28 text-md text-center editBtn"
            >
              <ion-img
                slot="icon-only"
                src="/assets/icon/PencilLine.svg"
                class="mr-4"
              ></ion-img>
              {{$t("Edit")}}</ion-button
            >
          </router-link>
        </div>
      </div>
    </ion-item>

    <ion-item v-if="isAuthed" class="mx-4 p-4 border-b" lines="none">
      <div class="flex flex-col gap-4 w-full">
        <ion-item
          button
          detail
          lines="none"
          class="w-full border rounded-xl font-semibold"
          >{{$t("My deals")}}</ion-item
        >
        <ion-item
          button
          detail
          lines="none"
          class="w-full border rounded-xl font-semibold"
          >{{$t("Subscribed authors")}}</ion-item
        >
      </div>
    </ion-item>

    <SignInGidget v-if="!isAuthed" />

    <ion-toolbar class="px-4">
      <ion-title class="text-2xl font-bold">{{$t("Settings")}}</ion-title>
    </ion-toolbar>

    <ion-item class="mx-4 p-4" lines="none">
      <div class="flex flex-col gap-4 w-full">
        <ion-item
          v-if="isAuthed"
          button
          detail
          lines="none"
          class="w-full border rounded-xl font-semibold"
          >{{$t("Notification preference")}}</ion-item
        >
        <router-link to="/language">
          <ion-item
            button
            detail
            lines="none"
            class="w-full border rounded-xl font-semibold"
            >{{$t("Language")}}</ion-item
          >
        </router-link>
        <ion-button
          v-if="isAuthed"
          @click="signOut"
          class="text-center font-semibold w-full h-16 logoutBtn"
        >
          {{$t("Logout")}}</ion-button
        >
      </div>
    </ion-item>

    <ion-toolbar class="px-4">
      <ion-title class="text-2xl font-bold">{{$t("Support")}}</ion-title>
    </ion-toolbar>
    <ion-item class="mx-4 p-4" lines="none">
      <div class="flex flex-col gap-4 w-full">
        <ion-item
          button
          lines="none"
          class="w-full border rounded-xl font-semibold"
          href="https://api.whatsapp.com/send?phone=85269011311"
        >
          <ion-thumbnail class="firebaseui-idp-icon">
            <ion-img src="assets/icon/whatsapp.png"></ion-img>
          </ion-thumbnail>
          <span class="p-2"> {{$t("Contact us on Whatsapp")}} </span>
        </ion-item>
      </div>
    </ion-item>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonToolbar, IonThumbnail } from "@ionic/vue";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { getFirebaseAuth } from "@/lib/firebase";

import useAuthuser from "@/hooks/user/useAuthUser";

import { showLoading, closeLoading } from "@/hooks/useLoading";
import "firebaseui/dist/firebaseui.css";
import useUser from "@/hooks/user/useUser";
import { Capacitor } from "@capacitor/core";

export default defineComponent({
  name: "AccountPage",
  components: {
    IonToolbar,
    IonThumbnail,
  },

  setup() {
    const { isAuthed, getAuthUser } = useAuthuser();

    const { getUser } = useUser();

    const signOut = async () => {
      await showLoading();
      try {
        if (Capacitor.isNativePlatform()) {
          await FirebaseAuthentication.signOut();
        }
        await getFirebaseAuth().signOut();
      } catch (e) {
        console.error(e);
      } finally {
        await closeLoading();
      }
    };

    return { isAuthed, getAuthUser, signOut, getUser };
  },
});
</script>
<style scoped>
.editBtn {
  --border-radius: 20px;
}

.logoutBtn {
  --border-radius: 12px;
}
</style>
