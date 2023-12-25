// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAN91vs7OGTsSC2EnHXUbPG9NKK-YpqdZM",
    authDomain: "ohstore-fe3ba.firebaseapp.com",
    projectId: "ohstore-fe3ba",
    storageBucket: "ohstore-fe3ba.appspot.com",
    messagingSenderId: "327746273861",
    appId: "1:327746273861:web:8c622e710d16a46d12592c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const userCollectionRef = collection(db, "users");