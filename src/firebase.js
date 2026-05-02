import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTCyNsMP7uj7Eldv2NWP-4JYTlGF-xTyI",
  authDomain: "aura-social-41b18.firebaseapp.com",
  projectId: "aura-social-41b18",
  storageBucket: "aura-social-41b18.firebasestorage.app",
  messagingSenderId: "1072638382826",
  appId: "1:1072638382826:web:700d7562e675f496863d93",
  measurementId: "G-Y204PTYB0S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
