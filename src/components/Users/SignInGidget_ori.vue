<template>
  <div class="flex flex-col gap-2 items-center">
    <router-link to="/sign-in">
      <ion-button class="signBtn">
        <span class="normal-case">Sign in/up with Email</span>
      </ion-button>
    </router-link>

    <!-- <FbLoginContainer /> -->
  </div>
</template>

<script setup lang="ts">
import FbLoginContainer from "@/components/Common/SignInGidget.vue.js";
</script>

<style scoped>
ion-button.signBtn::part(native) {
  width: 205.21px;
}
</style>
