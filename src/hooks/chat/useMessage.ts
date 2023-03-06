import { ref, watch, computed, reactive, Ref, compile } from "vue";
import useAuthUser from "../user/useAuthUser";

import {
  arrayUnion,
  doc,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "@firebase/firestore";
import { firebaseStore } from "@/lib/firebase";
import useChat from "./useChat";
import { v4 as uuid } from "uuid";
import { uploadImg } from "@/services/firebase";
import { Message } from "@/model/Chats";

const { getAuthUser } = useAuthUser();
const currentUser = getAuthUser;

const { chatState } = useChat();
const messages: Ref<Message[]> = ref([]);

async function sendImgMessage(text, file) {
  const imgUrl = await uploadImg(file);

  await updateDoc(doc(firebaseStore, "chats", chatState.chatId), {
    messages: arrayUnion({
      id: uuid(),
      text,
      senderId: currentUser.value.uid,
      date: Timestamp.now(),
      img: imgUrl,
    }),
  });
}

async function sendMessage(text) {
  await updateDoc(doc(firebaseStore, "chats", chatState.chatId), {
    messages: arrayUnion({
      id: uuid(),
      text,
      senderId: currentUser.value.uid,
      date: Timestamp.now(),
    }),
  });
  await updateUserChats(text, currentUser.value.uid);
}

async function updateUserChats(text, senderId) {
  await updateDoc(doc(firebaseStore, "userChats", currentUser.value.uid), {
    [chatState.chatId + ".lastMessage"]: { text, senderId },
    [chatState.chatId + ".date"]: serverTimestamp(),
  });

  await updateDoc(doc(firebaseStore, "userChats", chatState.user.uid), {
    [chatState.chatId + ".lastMessage"]: { text, senderId },
    [chatState.chatId + ".date"]: serverTimestamp(),
  });
}

export default function useMessage() {
  onSnapshot(doc(firebaseStore, "chats", chatState.chatId), (doc) => {
    console.log(doc.data());
    if (doc.exists()) {
      messages.value = doc.data().messages;
    }
  });

  return {
    messages,
    sendImgMessage,
    sendMessage,
  };
}
