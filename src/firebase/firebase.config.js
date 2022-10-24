// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF07fbSg1LaqrLjbWaRyDJIgZBDWJCbj0",
  authDomain: "trendy-travel-d1f4b.firebaseapp.com",
  projectId: "trendy-travel-d1f4b",
  storageBucket: "trendy-travel-d1f4b.appspot.com",
  messagingSenderId: "512936776105",
  appId: "1:512936776105:web:8aed3b35ed6a67791474b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;