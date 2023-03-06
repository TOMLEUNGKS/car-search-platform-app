<template>
  <BaseBackLayout :default_href="'/chats'">
    <!-- <template v-slot:primary>
      <ion-button v-if="isPlatform('ios')">
        <font-awesome-icon
          slot="icon-only"
          class="w-12"
          :icon="['fas', 'fa-ellipsis']"
        />
      </ion-button>
      <ion-button v-else>
        <font-awesome-icon
          slot="icon-only"
          class="w-12"
          icon="fa-solid fa-ellipsis-vertical"
        />
      </ion-button>
    </template> -->

    <template v-slot:title>
      <div class="messageInfo flex">
        <UserAvatar :src="chatState.user.photoURL" alt="user img" />

        <ion-title>{{ chatState.user.displayName }}</ion-title>
      </div>
    </template>

    <slot></slot>
  </BaseBackLayout>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import { isPlatform } from "@ionic/vue";
import useChat from "@/hooks/chat/useChat";
import UserAvatar from "../Users/UserAvatar.vue";

const { chatState } = useChat();
</script>

<style scoped>
.messageInfo ion-img::part(image) {
  border-radius: 50%;
}
</style>
