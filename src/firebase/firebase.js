// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Cggb1RHHi4oDGu5Ckga784pdbLAzdmc",
  authDomain: "inspiralab-contact.firebaseapp.com",
  projectId: "inspiralab-contact",
  storageBucket: "inspiralab-contact.appspot.com",
  messagingSenderId: "518437772220",
  appId: "1:518437772220:web:22bc8e1249af8525df69b9",
  measurementId: "G-2BDQR8KWGB"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export const db = getFirestore(appFirebase);