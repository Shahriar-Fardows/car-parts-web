// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAzL-VfzAMZazkX5hmNXcu4Zp_zassn_A",
  authDomain: "car-parts-web.firebaseapp.com",
  projectId: "car-parts-web",
  storageBucket: "car-parts-web.appspot.com",
  messagingSenderId: "93020181873",
  appId: "1:93020181873:web:b0ff73829e176199ba12d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
