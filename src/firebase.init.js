// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdHOl7CYKhreWjrD1DQrBWRA2upH3CgN4",
  authDomain: "ema-john-9ca0f.firebaseapp.com",
  projectId: "ema-john-9ca0f",
  storageBucket: "ema-john-9ca0f.appspot.com",
  messagingSenderId: "683281354789",
  appId: "1:683281354789:web:500c803c3159dece032fcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;