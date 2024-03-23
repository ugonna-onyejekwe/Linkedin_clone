import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-CLFA5B0M3P8PgUWgl9kWwUigmLOFVoU",
  authDomain: "linkedin-clone-2bedf.firebaseapp.com",
  projectId: "linkedin-clone-2bedf",
  storageBucket: "linkedin-clone-2bedf.appspot.com",
  messagingSenderId: "1044294230686",
  appId: "1:1044294230686:web:b85cb01e245f9e5d7dd18f",
  measurementId: "G-BDGZ1QF2PQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
