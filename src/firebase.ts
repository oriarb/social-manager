// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZnrBE6gHblRf-fnXqPD8Llp4AHSrHqmE",
  authDomain: "social-manager-2ac72.firebaseapp.com",
  projectId: "social-manager-2ac72",
  storageBucket: "social-manager-2ac72.appspot.com",
  messagingSenderId: "1089825548749",
  appId: "1:1089825548749:web:b5856a8381d83af5067c84",
  measurementId: "G-LGQPWHWW7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);