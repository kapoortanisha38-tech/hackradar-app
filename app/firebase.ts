// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCcA4PJnNc-qc2c7O4mTB9bM_KCMzRmDZg",
  authDomain: "hackradar-7893f.firebaseapp.com",
  projectId: "hackradar-7893f",
  storageBucket: "hackradar-7893f.firebasestorage.app",
  messagingSenderId: "122997168632",
  appId: "1:122997168632:web:9b44b6c1321bd2b86c1e0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Cloud Firestore Database
export const db = getFirestore(app);