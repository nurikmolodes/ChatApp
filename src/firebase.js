// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe6rWM4cD_XhTKI2lEpbu02Oasz0cpkeU",
  authDomain: "react-chat-4e0bd.firebaseapp.com",
  projectId: "react-chat-4e0bd",
  storageBucket: "react-chat-4e0bd.appspot.com",
  messagingSenderId: "106167441460",
  appId: "1:106167441460:web:0702ebbd5e34d78e935261",
  measurementId: "G-Z8LXJRE7SD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
