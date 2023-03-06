import { collection, doc, onSnapshot, query } from "@firebase/firestore";

import { firebaseStore } from "@/lib/firebase";
import {
  LocalNotifications,
  ScheduleOptions,
} from "@capacitor/local-notifications";
import { Message } from "@/model/Chats";

import useChat from "@/hooks/chat/useChat";
import useAuthUser from "@/hooks/user/useAuthUser";
import { getUserByUserId } from "./firebase";

const { getAuthUser } = useAuthUser();
const currentUser = getAuthUser;

export function subscribeMessage() {
  // const q = query(doc(firebaseStore, "userChats"), where("state", "==", "CA"));
  let last_date;

  if (currentUser.value) {
    const unsub = onSnapshot(
      doc(firebaseStore, "userChats", currentUser.value.uid),
      async (doc) => {
        if (doc.exists()) {
          const latest_chatState = Object.entries(doc.data()).sort(
            (a, b) => b[1].date - a[1].date
          )[0];

          //   messages.value = doc.data().messages;
          const { text, senderId } = latest_chatState[1].lastMessage;
          if (!last_date) {
            last_date = latest_chatState[1].date.seconds;
          }
          if (
            senderId != currentUser.value.uid &&
            latest_chatState[1].date.seconds > last_date
          ) {
            console.log(new Date(latest_chatState[1].date.seconds * 1000));
            const sender = await getUserByUserId(senderId);
            await LocalNotifications.schedule({
              notifications: [
                {
                  title: "New Message from " + sender.displayName,
                  body: text,
                  id: Math.random() * (999999999 - 1 + 1) + 1,
                  largeIcon: "ic_launcher_foreground",
                  extra: { senderId },
                },
              ],
            });
          }
        }
      }
    );
  }
}
