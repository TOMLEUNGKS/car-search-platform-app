<template>
  <!-- <section id="firebaseui-auth-container"></section> -->

  <div class="firebaseui-card-content">
    <ul class="firebaseui-idp-list">
      <li class="firebaseui-list-item">
        <router-link to="/sign-in">
          <ion-button color="primary" class="w-full max-w-56 text-left">
            <span
              class="text-gray-100 text-sm align-middle normal-case firebaseui-idp-text-long"
            >
              Sign in/up with Email
            </span>
          </ion-button>
        </router-link>
      </li>
      <li v-if="!isPlatform('android')" class="firebaseui-list-item">
        <ion-button
          color="dark"
          class="w-full max-w-56 text-left"
          @click="signInWithApple"
        >
          <span class="firebaseui-idp-icon-wrapper">
            <img
              class="firebaseui-idp-icon"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png"
            />
          </span>
          <span
            class="text-gray-100 text-sm pl-4 align-middle normal-case firebaseui-idp-text-long"
          >
            Sign in with Apple
          </span>
        </ion-button>
      </li>

      <li class="firebaseui-list-item">
        <ion-button
          color="white"
          class="w-full max-w-56 text-left"
          @click="signInWithGoogle"
        >
          <span class="firebaseui-idp-icon-wrapper">
            <img
              class="firebaseui-idp-icon"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            />
          </span>
          <span
            class="text-gray-500 text-sm pl-4 align-middle normal-case firebaseui-idp-text-long"
          >
            Sign in with Google
          </span>
        </ion-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import * as firebaseui from "firebaseui";

import "firebaseui/dist/firebaseui.css";

import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import {
  GoogleAuthProvider,
  signInWithCredential,
  OAuthProvider,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

import { showLoading, closeLoading } from "@/hooks/useLoading";
import { isPlatform } from "@ionic/core";

export default defineComponent({
  props: ["successUrl"],
  setup(props) {
    const signInWithApple = async () => {
      await showLoading();
      try {
        const result = await FirebaseAuthentication.signInWithApple();
        const provider = new OAuthProvider("apple.com");
        const credential = provider.credential({
          accessToken: result.credential?.accessToken,
          idToken: result.credential?.idToken,
          rawNonce: result.credential?.nonce
        });
        const auth = getFirebaseAuth();
        await signInWithCredential(auth, credential);

        await closeLoading();
        return result.user;
      } catch (err) {
        await closeLoading();
        console.log(err);
      }
    };

    const signInWithGoogle = async () => {
      await showLoading();
      try {
        const result = await FirebaseAuthentication.signInWithGoogle();
        const credential = GoogleAuthProvider.credential(
          result.credential?.idToken
        );
        const auth = getFirebaseAuth();
        await signInWithCredential(auth, credential);

        await closeLoading();
        return result.user;
      } catch (err) {
        await closeLoading();
        console.log(err);
      }
    };

    return { signInWithGoogle, signInWithApple, isPlatform };
  },
});
</script>
<style>
.firebaseui-idp-list {
  margin: 0px;
}
</style>
