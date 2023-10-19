// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB57GtjlTxmr0b9BoEW94vP9WuoL9_wfHU",
  authDomain: "netflix-ai1.firebaseapp.com",
  projectId: "netflix-ai1",
  storageBucket: "netflix-ai1.appspot.com",
  messagingSenderId: "631611959864",
  appId: "1:631611959864:web:854531c2fb5b8440fad4cd",
  measurementId: "G-CGC2889ZN7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();