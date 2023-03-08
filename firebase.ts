
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApd3fZqhFrc6oVWE5jSjM_W_uTFWDByrQ",
  authDomain: "talkgpt-65619.firebaseapp.com",
  projectId: "talkgpt-65619",
  storageBucket: "talkgpt-65619.appspot.com",
  messagingSenderId: "970717118843",
  appId: "1:970717118843:web:fc93e07615c2fe3dc7fdde"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }