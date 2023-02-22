// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6f9Ss9USMMkXsjWza-PFvBYtb1mKCs2M",
  authDomain: "real-estate-clone-react.firebaseapp.com",
  projectId: "real-estate-clone-react",
  storageBucket: "real-estate-clone-react.appspot.com",
  messagingSenderId: "562531332609",
  appId: "1:562531332609:web:95c3d3885ce436c2d58600",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
