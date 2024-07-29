// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfUDawBMxluU3mTNh_2l8W-NRjC7QAg5c",
  authDomain: "aci-krishi-bazar.firebaseapp.com",
  projectId: "aci-krishi-bazar",
  storageBucket: "aci-krishi-bazar.appspot.com",
  messagingSenderId: "535232613846",
  appId: "1:535232613846:web:7b00c566183e2c7783e877",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
