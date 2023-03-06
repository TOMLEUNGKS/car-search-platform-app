<template>
  <div class="h-16 p-3 flex items-center justify-between">
    <input
      class="w-full outline-none"
      type="text"
      placeholder="Type something..."
      v-model="text"
      v-on:keyup.enter="async () => await handleSend()"
    />
    <div class="send flex items-center gap-2">
      <!-- <font-awesome-icon
        class="h-5 cursor-pointer"
        icon="fa-solid fa-paperclip"
      /> -->
      <!-- <input
        type="file"
        class="hidden"
        id="file"
        @change="(e) => (img = e.target.files[0])"
      /> -->
      <!-- <label htmlFor="file">
        <font-awesome-icon
          class="h-5 cursor-pointer"
          icon="fa-regular fa-image"
        />
      </label> -->
      <ion-button @click="async () => await handleSend()">Send</ion-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAuthUser from "@/hooks/user/useAuthUser";
import useChat from "@/hooks/chat/useChat";
import useMessage from "@/hooks/chat/useMessage";

export default defineComponent({
  setup() {
    const { sendImgMessage, sendMessage } = useMessage();

    const text = ref("");
    const img = ref(null);

    const handleSend = async () => {
      if (img.value) {
        await sendImgMessage(text.value, img.value);
      } else if (text.value) {
        await sendMessage(text.value);
      }
      text.value = "";
      img.value = null;
    };

    return { text, img, handleSend };
  },
});
</script>
