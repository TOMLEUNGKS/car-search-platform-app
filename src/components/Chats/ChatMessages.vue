<template>
  <div class="messages  overflow-y-scroll">
    <ChatMessage v-for="m in messages" :key="m.id" :message="m" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import ChatMessage from "@/components/Chats/ChatMessage.vue";
import useMessage from "@/hooks/chat/useMessage";

export default defineComponent({
  components: { ChatMessage },
  setup() {
    const { messages } = useMessage();
    return { messages };
  },
});
</script>

<style scoped>
.messages {
  height: calc(100% - 4rem);
}
</style>
