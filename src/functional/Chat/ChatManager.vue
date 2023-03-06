<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { handleChatGroupExist } from "@/services/firebase";
import useAuthUser from "@/hooks//user/useAuthUser";
import useChat from "@/hooks/chat/useChat";

export default defineComponent({
  props: ["dealerID"],
  async setup(props) {
    const { getAuthUser } = useAuthUser();
    const { setChatStateByUserId } = useChat();

    await handleChatGroupExist(getAuthUser.value, props.dealerID);
    await setChatStateByUserId(props.dealerID);
    return {};
  },
});
</script>
