import { ref, watch, computed, reactive, Ref, compile } from "vue";

const { getAuthUser } = useAuthUser();
const currentUser = getAuthUser;

const chatState = reactive({ chatId: "null", user: { uid: "" } });

const userChats: Ref<[string, any][]> = ref([]);

function filterUserChats(searchStr) {
  return userChats.value.filter((ele) =>
    ele[1].userInfo.displayName.includes(searchStr)
  );
}

async function setChatStateByUserId(uid) {
  const payload = await getUserChatsByTargetID(getAuthUser.value.uid, uid);
  console.log(payload);
  setChatState(payload[1].userInfo);
}

function setChatState(payload) {
  chatState.chatId =
    currentUser.value.uid > payload.uid
      ? currentUser.value.uid + payload.uid
      : payload.uid + currentUser.value.uid;
  chatState.user = payload;
}

export default function useChat() {
  return {
    chatState,
    userChats,
    setChatState,
    filterUserChats,
    setChatStateByUserId,
  };
}
