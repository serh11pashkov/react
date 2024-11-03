
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBtYS370DgUWUoZd0atgveooNVEu_Lu4l0",
  authDomain: "react-caffee.firebaseapp.com",
  projectId: "react-caffee",
  storageBucket: "react-caffee.firebasestorage.app",
  messagingSenderId: "650336650152",
  appId: "1:650336650152:web:7bccf79ea5d7cbbdf1939d",
  measurementId: "G-X3YLC9PYB9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// eslint-disable-next-line unicorn/prevent-abbreviations
export const db = getFirestore(app);
