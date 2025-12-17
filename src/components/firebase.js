import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOH_IghtpfVWaRuHXrWQ9L84VH3r43aA4",
  authDomain: "login-page-704f9.firebaseapp.com",
  projectId: "login-page-704f9",
  storageBucket: "login-page-704f9.firebasestorage.app",
  messagingSenderId: "517717697212",
  appId: "1:517717697212:web:6e6d22f29d2649fc1aa6b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
