import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA68NHR-ItVU_lGVhkUXJBA2diOogoN3-4",
  authDomain: "mohammed-portfolio-35b30.firebaseapp.com",
  projectId: "mohammed-portfolio-35b30",
  storageBucket: "mohammed-portfolio-35b30.firebasestorage.app",
  messagingSenderId: "1006209630425",
  appId: "1:1006209630425:web:061948cb011c7251e67ec8",
  measurementId: "G-ZL5V09G3H0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);