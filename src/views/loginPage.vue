<template>
  <BaseBackLayout>
    <ion-toolbar> </ion-toolbar>

    <!-- <div v-if="signedIn">
      <b>userId:</b> {{ userId }}<br />
      <b>displayName:</b> {{ displayName }}<br />
      <b>email:</b> {{ email }}<br /><br />
      <img :src="imageUrl" width="200" />
    </div> -->
    <div class="flex flex-col gap-2 items-center">
      <!-- <router-link to="/sign-in">
        <ion-button class="signBtn">
          <span class="normal-case">Sign in/up with Email</span>
        </ion-button>
      </router-link> -->
      <SignInGidget :successUrl="'tabs/sell-car/create-listing'" />
    </div>
  </BaseBackLayout>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { ref, onMounted, watch } from "vue";
import { defineComponent } from "vue";
import { GooglePlus } from "@ionic-native/google-plus";
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

import useAuthuser from "@/hooks/user/useAuthUser";

// import FbLoginContainer from "@/components/Common/SignInGidget.vue.js";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonToolbar,
    // FbLoginContainer,
    BaseBackLayout,
  },

  setup() {
    const { isAuthed, returnUrl } = useAuthuser();

    const router = useRouter();
    const signedIn = isAuthed;

    watch(signedIn, (v) => {
      if (v) {
        router.replace(returnUrl.value);
      }
    });

    return {
      signedIn,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
ion-button.signBtn::part(native) {
  width: 205.21px;
}
</style>
