import { ref, watch, computed, reactive } from "vue";
import {
  createUserinFireStore,
  isEmailExist,
  createUserinUserChats,
} from "@/services/firebase";

import { signInWithCredential } from "firebase/auth";

import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

import { isPlatform } from "@ionic/vue";

import useUser from "./useUser";
const { setUser, resetUser } = useUser();

const isAuthed = ref(false);
const authUser = reactive({ data: getAuthUserinLocalstore() });
const returnUrl = ref("");

//==================================
//Setter
async function setAuthUser(authUserObj) {
  authUser.data = authUserObj;
}
//==================================
//Getter
const getAuthUser = computed(() => authUser.data);
// const isAuthed = computed(() => isLoggedIn.value);
//==================================

function getAuthUserinLocalstore() {
  const authUserinStorage = JSON.parse(
    localStorage.getItem("authUser") as string
  );
  return authUserinStorage;
}

async function setAuthUserinLocalstore(authUser) {
  if (authUser) {
    isAuthed.value = true;
    setAuthUser(authUser);
    await setUser(authUser.uid);

    localStorage.setItem("authUser", JSON.stringify(authUser));

    //Should be done in sign up
    if (!(await isEmailExist(authUser.email))) {
      await createUserinFireStore(authUser);
      await createUserinUserChats(authUser);
    }
  } else {
    isAuthed.value = false;
    setAuthUser(null);
    resetUser();
    localStorage.removeItem("authUser");
  }
}

async function handleRegister(displayName, email, password) {
  let userCredential;
  if (isPlatform("mobile")) {
    await FirebaseAuthentication.createUserWithEmailAndPassword({
      email,
      password,
    });

    userCredential = await signInWithWebLayer(email, password);
  } else {
    userCredential = await createUserWithEmailAndPassword(
      getFirebaseAuth(),
      email,
      password
    );
  }
  const user = userCredential.user;

  await updateProfile(user as unknown as User, {
    displayName,
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/carsearchapp-4a6f4.appspot.com/o/account-user.png?alt=media&token=d26524f5-8dce-4adb-9676-47c8bf028359",
  });

  await createUserinFireStore(user);

  await createUserinUserChats(user);
  await setUser(user.uid);

  return user;
}

async function handleSignIn(email, password) {
  //  userCredential;

  if (isPlatform("mobile")) {
    await FirebaseAuthentication.signInWithEmailAndPassword({
      email,
      password,
    });
  }

  const userCredential = await signInWithWebLayer(email, password);

  // await signInWithCredential(auth, userCredential.credential);
  // } else {

  console.log(userCredential);
  // }
  const user = userCredential.user;
  return user;
}

async function signInWithWebLayer(email, password) {
  const auth = getFirebaseAuth();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
}

//initialise
function loadFirebaseUser() {
  FirebaseAuthentication.getCurrentUser().then((result) => {
    console.log(result.user);
    if (result.user) {
      authUser.data = result.user;
      isAuthed.value = true;
    }
  });
}
loadFirebaseUser();

export default function useAuthUser() {
  return {
    isAuthed,
    returnUrl,
    getAuthUser,
    setAuthUserinLocalstore,
    handleRegister,
    handleSignIn,
  };
}
