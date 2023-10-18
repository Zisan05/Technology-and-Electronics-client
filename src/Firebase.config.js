// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRid2oHF-pABeLXxSc90cRPpJT4jp-rq0",
  authDomain: "technology-electronics-21a3f.firebaseapp.com",
  projectId: "technology-electronics-21a3f",
  storageBucket: "technology-electronics-21a3f.appspot.com",
  messagingSenderId: "450998733946",
  appId: "1:450998733946:web:fda1dc99c013f1cd57bfc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;