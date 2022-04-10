// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0SpOYsDYqFkj_2QeAH5V2pyZgnjSoLQ4",
  authDomain: "premier-mart-9aa09.firebaseapp.com",
  projectId: "premier-mart-9aa09",
  storageBucket: "premier-mart-9aa09.appspot.com",
  messagingSenderId: "541735644833",
  appId: "1:541735644833:web:fa6f7ae87ba00df19a8ae0",
  measurementId: "G-1FGLPYQBST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
