import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();


export  {db};
