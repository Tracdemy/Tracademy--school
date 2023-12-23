import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALOoIm8pg56R70_YRnVRrrl8bA94lYMUA",
    authDomain: "trackacademy-d8740.firebaseapp.com",
    projectId: "trackacademy-d8740",
    storageBucket: "trackacademy-d8740.appspot.com",
    messagingSenderId: "6189802598",
    appId: "1:6189802598:web:27fa0842dd3d118631f9a7",
    measurementId: "G-QSFVHE3BBS"
};

// Initialize Firebase app and analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create GoogleAuthProvider instance
const provider = new GoogleAuthProvider();

// Get authentication instance
export {
  signInWithPopup,
  getAuth,
  provider,
};
