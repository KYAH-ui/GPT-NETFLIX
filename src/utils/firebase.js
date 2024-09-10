// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoKBcFFy4otgK-ysw8xx3nkyAijzvghtY",
  authDomain: "netflixgpt-e9de3.firebaseapp.com",
  projectId: "netflixgpt-e9de3",
  storageBucket: "netflixgpt-e9de3.appspot.com",
  messagingSenderId: "730584765209",
  appId: "1:730584765209:web:c08271a50e9dea90f4eb88",
  measurementId: "G-GGG2RH3KJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();