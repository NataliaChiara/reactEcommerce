
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfDKsJ9aDzBLQuHs9OtVF1ogOIh4rCcuw",
  authDomain: "backend34750.firebaseapp.com",
  projectId: "backend34750",
  storageBucket: "backend34750.appspot.com",
  messagingSenderId: "866533405104",
  appId: "1:866533405104:web:dca615ec3bbfc4e1472675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// https://drive.google.com/file/d/1UcStUDi9RPcHrVFDNPpzXlZNZ5neEWp4/view?usp=share_link

// http://drive.google.com/uc?export=view&id=1UcStUDi9RPcHrVFDNPpzXlZNZ5neEWp4
