// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQvtAMPTufXQ-U1kRpSQD7ZQcQSvZuwfI",
  authDomain: "star-furnitures.firebaseapp.com",
  projectId: "star-furnitures",
  storageBucket: "star-furnitures.appspot.com",
  messagingSenderId: "1069342222606",
  appId: "1:1069342222606:web:d797fb2fae8b101e4f8f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;