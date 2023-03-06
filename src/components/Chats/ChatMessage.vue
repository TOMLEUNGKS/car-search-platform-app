<template>
  <div
    ref="self"
    class="message flex gap-5 mb-4 mx-3 mt-1"
    :class="message.senderId === getAuthUser.uid && 'owner'"
  >
    <!-- <div class="messageInfo">
      <ion-img
        class="w-10 h-10 object-cover user"
        :src="
          message.senderId == getAuthUser.uid
            ? getAuthUser.photoUrl
            : userInfo.photoURL
        "
        alt="user img"
      />
    </div> -->
    <div class="messageContent flex flex-col gap-2">
      <div>
        <p class="relative">
          <span>
            {{ message.text }}
          </span>

          <small>{{
            moment(message.date.toDate()).format("DD MMM HH:mm")
          }}</small>
        </p>
      </div>
      <!-- <ion-img
        v-if="message.img"
        class="w-1/2"
        :src="message.img"
        alt="user img"
      /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import useAuthUser from "@/hooks/user/useAuthUser";
import useChat from "@/hooks/chat/useChat";
import moment from "moment";

export default defineComponent({
  props: ["message"],
  setup() {
    const self = ref<HTMLElement>();
    const { getAuthUser } = useAuthUser();
    const { chatState } = useChat();

    const userInfo = chatState.user;
    onMounted(() => {
      self.value?.scrollIntoView({ behavior: "smooth" });
    });

    return { getAuthUser, userInfo, self, moment };
  },
});
</script>

<style scoped>
.owner {
  flex-direction: row-reverse;
}

.owner .messageContent {
  align-items: flex-end;
}

.owner p {
  background-color: var(--ion-color-tertiary);
  border-radius: 10px 0 10px 10px;

  color: white;
}
p {
  background-color: rgb(226, 224, 224);
  padding: 10px 20px;
  border-radius: 0 10px 10px 10px;
  max-width: max-content;
}

p span::after {
  content: "";
  display: inline-block;
  width: 65px;
  height: 12px;
}

.messageInfo ion-img::part(image) {
  border-radius: 50%;
}

.messageContent {
  max-width: 80%;
}

small {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 4px 8px 4px 4px;
  line-height: 16px;
  color: var(--ion-color-medium);
}

.owner small {
  @apply text-gray-300;
}

ion-img.user::part(image) {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  background-color: rgb(229 231 235);
}
</style>
