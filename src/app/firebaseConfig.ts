import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
/*
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};
 */

const firebaseConfig = {
  apiKey: "AIzaSyBV-93Obborno_7fczAd7CNkNOFib2qybc",
  authDomain: "pinia-app.firebaseapp.com",
  projectId: "pinia-app",
  storageBucket: "pinia-app.appspot.com",
  messagingSenderId: "515111131981",
  appId: "1:515111131981:web:15d6472b1adb00788d7504",
  measurementId: "G-K3JQRMBF1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIRESTORE = getFirestore(app);
