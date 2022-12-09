// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE9RRXK4NgM5nfvQr5m8J-iyk8pjp-AFQ",
  authDomain: "gym-app-a0ed8.firebaseapp.com",
  projectId: "gym-app-a0ed8",
  storageBucket: "gym-app-a0ed8.appspot.com",
  messagingSenderId: "883074649208",
  appId: "1:883074649208:web:b69c6efd091bf8b79e318d",
  measurementId: "G-2Y81CPTEM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);