// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4CNDC9HxjzPustsnbD9Yn6-UWO1zWJX8",
  authDomain: "e-library-project-15e7e.firebaseapp.com",
  projectId: "e-library-project-15e7e",
  storageBucket: "e-library-project-15e7e.appspot.com",
  messagingSenderId: "102801678373",
  appId: "1:102801678373:web:8d4feb30fdcf6f7441dfcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);