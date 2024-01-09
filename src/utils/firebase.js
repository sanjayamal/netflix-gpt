// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi0xbDN_kTTU1N5wFokU9kzHga2kMs8yM",
  authDomain: "moviesgpt-1daa4.firebaseapp.com",
  projectId: "moviesgpt-1daa4",
  storageBucket: "moviesgpt-1daa4.appspot.com",
  messagingSenderId: "82639263531",
  appId: "1:82639263531:web:c76c6dc6e4b91bb92bd76e",
  measurementId: "G-CY8ZQS5Y9Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
