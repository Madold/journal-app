import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {

  apiKey: "AIzaSyAearHqk9shEAOG8cBzbwd85kNSqL2RhFc",

  authDomain: "react-curso-ab48f.firebaseapp.com",

  projectId: "react-curso-ab48f",

  storageBucket: "react-curso-ab48f.appspot.com",

  messagingSenderId: "797493714877",

  appId: "1:797493714877:web:a11caf9d6f0b4f5ce9bcd4"

};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FireBaseAuth = getAuth(FirebaseApp)

export const FirebaseFirestore = getFirestore(FirebaseApp)
