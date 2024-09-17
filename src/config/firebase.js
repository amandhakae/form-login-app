// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCoNPVeeCdG1WmyuUm9_R9T8MAyVSBRHSE",
  authDomain: "appunicforms.firebaseapp.com",
  projectId: "appunicforms",
  storageBucket: "appunicforms.appspot.com",
  messagingSenderId: "279539927194",
  appId: "1:279539927194:web:201a8f05aaaa3a4a0cf723",
  measurementId: "G-QZ66W8XL94"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };