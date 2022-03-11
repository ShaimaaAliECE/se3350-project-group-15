// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
//Henry: it's better to use .env.local file to hide API keys on github
const firebaseConfig = {
  apiKey: "AIzaSyCJ9wH_Wdyo81jXe06j3c_Ce2ua8DOH47U",
  authDomain: "sortingalgorithmgame.firebaseapp.com",
  databaseURL: "https://sortingalgorithmgame-default-rtdb.firebaseio.com",
  projectId: "sortingalgorithmgame",
  storageBucket: "sortingalgorithmgame.appspot.com",
  messagingSenderId: "159030466442",
  appId: "1:159030466442:web:25e9c91e2603465e9b9a73",
  measurementId: "G-16S9Q0M7SK",
};

// Initialize a Firebase object
const app = initializeApp(firebaseConfig);

//Third party auth providers
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const auth = getAuth(app);

//use db to access the Firebase object
const db = getFirestore(app);

const signInWithGoogle = () => {
  signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      console.log(result);
      // The signed-in user info.
      const user = result.user;
      //save the info in local storage
      localStorage.setItem("user", user);
      localStorage.setItem("userEmail", user.email);
      //nav to home page
      window.location = "/";
    })
    .catch((error) => {
      console.log(error);
    });
};

const signInWithGithub = () => {
  signInWithPopup(auth, GithubProvider)
    .then((result) => {
      console.log(result);
      // The signed-in user info.
      const user = result.user;
      //save the info in local storage
      localStorage.setItem("user", user);
      localStorage.setItem("userEmail", user.email);
      //nav to home page
      window.location = "/";
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

export {
  app,
  db,
  auth,
  firebaseConfig,
  signInWithGoogle,
  signInWithGithub,
  logOut,
};
