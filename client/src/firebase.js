// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-490fa.firebaseapp.com",
  projectId: "mern-auth-490fa",
  storageBucket: "mern-auth-490fa.appspot.com",
  messagingSenderId: "342798488432",
  appId: "1:342798488432:web:a11205cf5c58274722b5b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);