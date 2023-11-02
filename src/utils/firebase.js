// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChgag_whqu-ZhJ9EaSDc-h8BQVv_88ecQ",
  authDomain: "netflixgpt-66a17.firebaseapp.com",
  projectId: "netflixgpt-66a17",
  storageBucket: "netflixgpt-66a17.appspot.com",
  messagingSenderId: "230343294318",
  appId: "1:230343294318:web:1b8c7282800c51d88f157f",
  measurementId: "G-4D01FYYJR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);