import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZaK4ju4rksjJzW538NZ1JonlG5wB-_IY",
  authDomain: "prepwise-339b4.firebaseapp.com",
  projectId: "prepwise-339b4",
  storageBucket: "prepwise-339b4.firebasestorage.app",
  messagingSenderId: "194610483742",
  appId: "1:194610483742:web:0a559a254be8f72f15940f",
  measurementId: "G-PSFYW8VD04"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);