// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBimU67T9JwwTYf9mTY5Yo8YTXAr-IdAz8",
  authDomain: "budgettracker-4078m.firebaseapp.com",
  projectId: "budgettracker-4078m",
  storageBucket: "budgettracker-4078m.appspot.com",
  messagingSenderId: "442470604599",
  appId: "1:442470604599:web:a42647d202f1c8f67404b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
