import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX6ZNotnLRK5ukiVuweqRYbPtPzINBGjo",
  authDomain: "form-login-app-3348f.firebaseapp.com",
  projectId: "form-login-app-3348f",
  storageBucket: "form-login-app-3348f.appspot.com",
  messagingSenderId: "1009114559152",
  appId: "1:1009114559152:web:539bfae8860a7eb6278175",
  measurementId: "G-L0ZVX0RRZN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
