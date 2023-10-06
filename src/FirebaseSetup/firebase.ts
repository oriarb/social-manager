// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGd_BxhiC7Bo2wZlbUdXRuZhWqihkvcL4",
  authDomain: "instafollow-37762.firebaseapp.com",
  projectId: "instafollow-37762",
  storageBucket: "instafollow-37762.appspot.com",
  messagingSenderId: "616216981042",
  appId: "1:616216981042:web:0eeacf491c83fefba3162b",
  measurementId: "G-GPC21W8G5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);