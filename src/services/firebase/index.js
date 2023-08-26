import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGjf1apg2o3sMB8VBbymvPaxPcvrYpmXo",
  authDomain: "e-commerce-7676d.firebaseapp.com",
  projectId: "e-commerce-7676d",
  storageBucket: "e-commerce-7676d.appspot.com",
  messagingSenderId: "15186966698",
  appId: "1:15186966698:web:189be978487f8bfaf7b8d3",
  measurementId: "G-HH0ZH4BPRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };