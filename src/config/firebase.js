import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0i5a3qhreDFBedMEp5OS9w0Tzly-8mMw",
  authDomain: "applogin-e5897.firebaseapp.com",
  projectId: "applogin-e5897",
  storageBucket: "applogin-e5897.appspot.com",
  messagingSenderId: "512767094278",
  appId: "1:512767094278:web:137e6502a21a95062e5d87"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);