import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const env = import.meta.env

const firebaseConfig = {
  apiKey: env.VITE_APP_API_KEY,
  authDomain: env.VITE_APP_AUTH_DOMAIN,
  projectId: env.VITE_APP_PROJECT_ID,
  storageBucket: env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: env.VITE_APP_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_APP_ID,
  measurementId: env.VITE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIRESTORE = getFirestore(app);
export const AUTH = getAuth(app);
