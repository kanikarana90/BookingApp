// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAukhfaaaxSDgi4tCLVNQ3B3v4S4wkZ824",
  authDomain: "go24-auth.firebaseapp.com",
  projectId: "go24-auth",
  storageBucket: "go24-auth.appspot.com",
  messagingSenderId: "343923239150",
  appId: "1:343923239150:web:1ad98cf81173092946ebff",
  measurementId: "G-TFET6KRWE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
