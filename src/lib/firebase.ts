import { initializeApp } from "firebase/app";
// import { seedDatabase } from "../seeds/firebaseSeed"
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
// import seed file
import { Capacitor } from "@capacitor/core";
import {
  getAuth,
  initializeAuth,
  indexedDBLocalPersistence,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyAPKajSL6DPe3bcLDAHvTBT58pKrWTnBeQ",
  authDomain: "carsearchapp-4a6f4.firebaseapp.com",
  projectId: "carsearchapp-4a6f4",
  storageBucket: "carsearchapp-4a6f4.appspot.com",
  messagingSenderId: "654537409329",
  appId: "1:654537409329:web:322080db8ffc5585c36610",
  measurementId: "G-4X6L65BQDZ",
};

const firebaseApp = initializeApp(config);

const firebaseStore = getFirestore(firebaseApp);

// console.log("firebase", firebase, FieldValue);
//call the seed file(only Once)
// seedDatabase(firebase)

function getFirebaseAuth() {
  let firebaseAuth;
  if (!firebaseAuth) {
    if (Capacitor.isNativePlatform()) {
      firebaseAuth = initializeAuth(firebaseApp, {
        persistence: indexedDBLocalPersistence,
      });
    } else {
      firebaseAuth = getAuth();
    }
  }
  return firebaseAuth;
}

const firebaseStorage = getStorage();

export { firebaseApp, firebaseStore, getFirebaseAuth, firebaseStorage };
