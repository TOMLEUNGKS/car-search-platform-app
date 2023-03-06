import { firebaseApp, firebaseStore, firebaseStorage } from "../lib/firebase";
import {
  addDoc,
  collection,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  deleteField,
} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuidv4 } from "@firebase/util";
import { User } from "@/model/Users";
import useAuthUser from "@/hooks/user/useAuthUser";

export async function isEmailExist(emailAddress) {
  const q = query(
    collection(firebaseStore, "users"),
    where("email", "==", emailAddress)
  );

  const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  // });

  //console.log(result.docs.map(user => user.data()))
  return querySnapshot.docs.length > 0;
}
export async function isUsernameExist(displayName) {
  const q = query(
    collection(firebaseStore, "users"),
    where("displayName", "==", displayName)
  );
  const querySnapshot = await getDocs(q);

  //console.log(result.docs.map(user => user.data()))
  return querySnapshot.docs.length > 0;
}

export async function getUserByUserId(uid): Promise<User> {
  const q = query(collection(firebaseStore, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const doc = querySnapshot.docs[0];
  const user: User = { ...doc.data() } as User;
  return user;
}

export async function createUserinFireStore(authUser) {
  try {
    //firebase user collection (create a document )
    await addDoc(collection(firebaseStore, "users"), {
      uid: authUser.uid,
      displayName: authUser.displayName,
      email: authUser.email,
      photoURL:
        authUser.photoUrl ||
        "https://firebasestorage.googleapis.com/v0/b/carsearchapp-4a6f4.appspot.com/o/account-user.png?alt=media&token=d26524f5-8dce-4adb-9676-47c8bf028359",
      liked: [],
      dateCreated: Date.now(),
    });
  } catch (e) {
    console.error(e);
  }
}

export async function createUserinUserChats(user) {
  try {
    //firebase user collection (create a document )
    await setDoc(doc(firebaseStore, "userChats", user.uid), {});
  } catch (e) {
    console.error(e);
  }
}

export async function uploadImg(file, fileName = null) {
  const name = fileName || uuidv4();
  const storageRef = ref(firebaseStorage, name);
  const uploadTask = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(uploadTask.ref);
  return downloadURL;
  //use it like that
  //await uploadThumbnail(displayName, file);
}

export async function handleChatGroupExist(authUser, targetUserID) {
  const targetUser = await getUserByUserId(targetUserID);
  const combinedId =
    authUser.uid > targetUserID
      ? authUser.uid + targetUserID
      : targetUserID + authUser.uid;
  try {
    const res = await getDoc(doc(firebaseStore, "chats", combinedId));
    if (!res.exists()) {
      await setDoc(doc(firebaseStore, "chats", combinedId), { messages: [] });

      await updateDoc(doc(firebaseStore, "userChats", authUser.uid), {
        [combinedId + ".uid"]: targetUser.uid,
        [combinedId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(firebaseStore, "userChats", targetUserID), {
        [combinedId + ".uid"]: authUser.uid,
        [combinedId + ".date"]: serverTimestamp(),
      });
    }
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllUserChats(authid) {
  const res = await getDoc(doc(firebaseStore, "userChats", authid));

  const data = res.data() || [];

  const results = Object.entries(data).sort((a, b) => b[1].date - a[1].date);

  for (const result of results) {
    result[1].userInfo = await getUserByUserId(result[1].uid);
  }
  return results;
}

export async function getUserChatsByTargetID(
  authid,
  targetid
): Promise<[string, any]> {
  const data = await getAllUserChats(authid);
  const target = data.find((ele) => ele[0].includes(targetid))!;

  return target;
}

export async function updateLike(uid, post_id, liked) {
  const q = query(collection(firebaseStore, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const doc = querySnapshot.docs[0];

  await updateDoc(doc.ref, {
    liked: liked ? arrayRemove(post_id) : arrayUnion(post_id),
  });
}

export async function updateSavedFilter(key, valueJson) {
  const { getAuthUser } = useAuthUser();
  const uid = getAuthUser.value.uid;

  const q = query(collection(firebaseStore, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const doc = querySnapshot.docs[0];

  if (!valueJson) {
    valueJson = deleteField();
  }
  await updateDoc(doc.ref, {
    ["savedFilter." + key]: valueJson,
  });
}

export async function updateUserProfile(uid, displayName, photoURL) {
  const q = query(collection(firebaseStore, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const doc = querySnapshot.docs[0];

  await updateDoc(doc.ref, {
    displayName,
    photoURL,
  });
}
