// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLv53Z8Pk0Vd_WhPniONXJwq3Jq0hgUts",
  authDomain: "hacking-course-e25b3.firebaseapp.com",
  projectId: "hacking-course-e25b3",
  storageBucket: "hacking-course-e25b3.appspot.com",
  messagingSenderId: "184335885830",
  appId: "1:184335885830:web:a4c9700059e33815c60587",
  measurementId: "G-F8NCXVEKZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;