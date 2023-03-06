<template>
  <MessagesLayout>
    <suspense>
      <template #default>
        <chat-manager :dealerID="routeDealerID">
          <ChatMessages />
          <ChatInput />
        </chat-manager>
      </template>
      <template #fallback>
        <ion-loading />
      </template>
    </suspense>
  </MessagesLayout>
</template>

<script lang="ts">
import MessagesLayout from "@/components/Chats/MessagesLayout.vue";

import { defineComponent } from "vue";
import ChatMessages from "@/components/Chats/ChatMessages.vue";
import ChatInput from "@/components/Chats/ChatInput.vue";
import { useRoute } from "vue-router";
import { IonLoading } from "@ionic/vue";
import ChatManager from "@/functional/Chat/ChatManager.vue";

export default defineComponent({
  components: {
    MessagesLayout,
    ChatMessages,
    ChatInput,
    IonLoading,
    ChatManager,
  },
  setup() {
    const route = useRoute();
    const routeDealerID = route.params.dealerID;

    return { routeDealerID };
  },
});
</script>
