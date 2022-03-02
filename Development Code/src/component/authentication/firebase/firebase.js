// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
//it's better to use .env.local file to hide API keys on github
const firebaseConfig = {
  apiKey: "AIzaSyBKYwOxk6NDAJnlyLo7_OSFDenYgF-sUkY",
  authDomain: "mergesortgame.firebaseapp.com",
  projectId: "mergesortgame",
  storageBucket: "mergesortgame.appspot.com",
  messagingSenderId: "582952030759",
  appId: "1:582952030759:web:251fa298d7ac03bc82b402",
  measurementId: "G-MQ9W9DK046",
};

// Initialize a Firebase object
const app = initializeApp(firebaseConfig);

//Google Sign-in
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      // The signed-in user info.
      const user = result.user;
      //save the info in local storage
      localStorage.setItem("user", user);
      localStorage.setItem("userEmail", user.email);
      //refresh page
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      localStorage.clear();
      console.log("called logOut from firebase.js");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

//use db to access the Firebase object
const db = getFirestore(app);

export { db, auth, signInWithGoogle, logOut };
