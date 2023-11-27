// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALOoIm8pg56R70_YRnVRrrl8bA94lYMUA",
  authDomain: "trackacademy-d8740.firebaseapp.com",
  projectId: "trackacademy-d8740",
  storageBucket: "trackacademy-d8740.appspot.com",
  messagingSenderId: "6189802598",
  appId: "1:6189802598:web:60134d03c2b003e131f9a7",
  measurementId: "G-7MB6L801XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();