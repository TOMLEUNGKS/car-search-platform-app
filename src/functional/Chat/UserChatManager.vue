<template>
  <slot> </slot>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useChat from "@/hooks/chat/useChat";
import { getAllUserChats } from "@/services/firebase";
import useAuthUser from "@/hooks//user/useAuthUser";

export default defineComponent({
  async setup(props) {
    const { userChats } = useChat();
    const { getAuthUser } = useAuthUser();
    const res = await getAllUserChats(getAuthUser.value.uid);
    userChats.value = res;
    return {};
  },
});
</script>
