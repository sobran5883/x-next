// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-19953.firebaseapp.com",
  projectId: "x-next-19953",
  storageBucket: "x-next-19953.appspot.com",
  messagingSenderId: "894748373903",
  appId: "1:894748373903:web:ac31db41a9d02c327491fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);