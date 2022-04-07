import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXjg_oKfrxN0J_a8g0_Uik_anFq0OqJFY",
  authDomain: "swic-dev-92afb.firebaseapp.com",
  projectId: "swic-dev-92afb",
  storageBucket: "swic-dev-92afb.appspot.com",
  messagingSenderId: "183852797733",
  appId: "1:183852797733:web:64ec8c6c22729548cb14cc",
  measurementId: "G-W6G1LH9GHN"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
