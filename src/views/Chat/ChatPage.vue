<template>
  <ChatsLayout>
    <ChatsSearchBar
      :modelValue="searchText"
      @update:modelValue="searchText = $event"
    />

    <suspense>
      <template #default>
        <user-chat-manager>
          <UsersContainer :searchText="searchText" />
        </user-chat-manager>
      </template>
      <template #fallback>
        <ion-loading />
      </template>
    </suspense>
  </ChatsLayout>
</template>

<script lang="ts">
import ChatsLayout from "@/components/Chats/ChatsLayout.vue";
import UsersContainer from "@/components/Chats/UsersContainer.vue";
import ChatsSearchBar from "@/components/Chats/SearchBar.vue";
import UserChatManager from "@/functional/Chat/UserChatManager.vue";
import { IonLoading } from "@ionic/vue";

import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  components: {
    ChatsLayout,
    UsersContainer,
    ChatsSearchBar,
    IonLoading,
    UserChatManager,
  },
  setup() {
    const searchText = ref("");
    return { searchText };
  },
});
</script>
