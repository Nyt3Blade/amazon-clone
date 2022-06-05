// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDikySSrXj6U6xKw-H1B4yXwrXtpDfQLbQ",
  authDomain: "clone-fee36.firebaseapp.com",
  projectId: "clone-fee36",
  storageBucket: "clone-fee36.appspot.com",
  messagingSenderId: "893367090893",
  appId: "1:893367090893:web:5bf8ce641029c5a462f384",
  measurementId: "G-DGECXTJ2YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);