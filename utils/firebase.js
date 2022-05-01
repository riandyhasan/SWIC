import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCfvFPL3oSeM-C-E1hhuwfWXAQpmL1kUow",
  authDomain: "swic-2d4c2.firebaseapp.com",
  projectId: "swic-2d4c2",
  storageBucket: "swic-2d4c2.appspot.com",
  messagingSenderId: "244675206905",
  appId: "1:244675206905:web:7a7c4df43ba668d09acc28",
  measurementId: "G-ERK02KL9YV"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

export { app, db, functions };
