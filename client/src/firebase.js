import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpDSXhvCq6A9L1KNHUuKMo7QBEdB7fDk8",
  authDomain: "pixel-cart-7124d.firebaseapp.com",
  projectId: "pixel-cart-7124d",
  storageBucket: "pixel-cart-7124d.appspot.com",
  messagingSenderId: "729265339709",
  appId: "1:729265339709:web:e3b8b1b79ac39e327fd954",
  measurementId: "G-RMH20FYS95",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
