// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz4ucYdrKIy7lDJIEAapbnirbMDYJypls",
  authDomain: "vote-for-breakfast.firebaseapp.com",
  projectId: "vote-for-breakfast",
  storageBucket: "vote-for-breakfast.appspot.com",
  messagingSenderId: "385144899835",
  appId: "1:385144899835:web:6d67b242f2ef78a76c485e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;