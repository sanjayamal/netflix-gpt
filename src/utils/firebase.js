// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaPliXPHT6C-fNX9tBvt0XAuMcM_tNdww",
  authDomain: "netflixgpt-885d6.firebaseapp.com",
  projectId: "netflixgpt-885d6",
  storageBucket: "netflixgpt-885d6.appspot.com",
  messagingSenderId: "300672337544",
  appId: "1:300672337544:web:145a387f6837a680a8013d",
  measurementId: "G-YCWC3PFJP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
