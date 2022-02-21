// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
//it's better to use env file to hide API keys on github
const firebaseConfig = {
  apiKey: "AIzaSyBKYwOxk6NDAJnlyLo7_OSFDenYgF-sUkY",
  authDomain: "mergesortgame.firebaseapp.com",
  projectId: "mergesortgame",
  storageBucket: "mergesortgame.appspot.com",
  messagingSenderId: "582952030759",
  appId: "1:582952030759:web:251fa298d7ac03bc82b402",
  measurementId: "G-MQ9W9DK046",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Google Sign-in
const provider = new GoogleAuthProvider();
const auth = getAuth(app);



//TODO: after google sign in, the page didn't update email instantly
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      //save the info in local storage
      localStorage.setItem("user", user);
      localStorage.setItem("userEmail", user.email);

      //refresh page
      window.location.reload(false);
      //TODO: navigate to home page
    })
    .catch((error) => {
      console.log(error);
    });
};

//TODO: after logout, the page didn't update email instantly
const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      localStorage.clear();
      console.log('called logOut from firebase.js')
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

const db = getFirestore(app);

export { db, auth, signInWithGoogle, logOut };
