// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBLWUXjYgJ4YM9Ttep69vt5f9D9q-79NrM",
  authDomain: "bistro-boss-ee602.firebaseapp.com",
  projectId: "bistro-boss-ee602",
  storageBucket: "bistro-boss-ee602.appspot.com",
  messagingSenderId: "630379528771",
  appId: "1:630379528771:web:b5f17484bd46710b3c0af6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app