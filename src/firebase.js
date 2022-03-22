import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1v-WvTtnCmyLs_njECcehlX9Vks133N8",
  authDomain: "daminit1.firebaseapp.com",
  projectId: "daminit1",
  storageBucket: "daminit1.appspot.com",
  messagingSenderId: "37979057522",
  appId: "1:37979057522:web:38ad5ce6ecee80542a41eb"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore(); // to connect with reacltime firebase database

const auth = firebase.auth(); //connect authentication


const provider = new firebase.auth.GoogleAuthProvider();
// export const storage = firebase.storage();

export  {db, auth, provider};