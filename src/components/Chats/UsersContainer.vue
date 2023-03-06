<template>
  <div
    v-for="chat in filterResults"
    :key="chat[0]"
    @click="handleSelect(chat[1].userInfo)"
    class="userChat p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-200"
  >
    <UserAvatar :src="chat[1].userInfo.photoURL" alt="" />

    <div class="userChatInfo w-full">
      <span class="font-medium">{{ chat[1].userInfo.displayName }}</span>
      <div class="flex justify-between">
        <p class="text-gray-500 text-sm">{{ chat[1].lastMessage?.text }}</p>

        <p class="text-gray-500 text-sm">
          {{ moment(chat[1].date.toDate()).format("DD MMM HH:mm") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";

const props = defineProps(["searchText"]);
const router = useRouter();
const searchText = toRef(props, "searchText");

watch(searchText, (newValue) => {
  handleSearchStr(newValue);
});

const { userChats, filterUserChats } = useChat();
let filterResults = ref(userChats.value);

const handleSearchStr = (value) => {
  if (value) {
    filterResults.value = filterUserChats(value);
  } else {
    filterResults.value = userChats.value;
  }
};

const handleSelect = (user) => {
  router.push("/message/" + user.uid);
};
</script>
