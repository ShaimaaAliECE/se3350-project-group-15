import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { GithubSignIn, GoogleSignIn } from "./ThirdPartySignIn";
import Level1 from "../levels/Level1";
import { db, app } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import TypingIcon from "../assets/svg/typing_svg";

export default function SignUpPageAnimation() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState(""); //Henry: for handleSubmit()
  const [loading, setLoading] = useState(false); //Henry: for handleSubmit()
  const [hideSignInBox, setHideSignInBox] = useState(false); //Henry: sign-up/login nav issue temp solution

  //TODO: toggle sign-in box & level1 component (this is a temporary alternative to address login navigation issue)!
  useEffect(() => {
    if (localStorage.getItem("userEmail") != null) {
      setHideSignInBox(true);
    }
  }, []);

  //handle sign-up btn submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    //TODO: check if the email already exists
    try {
      //1. Cloud Firestore Method
      setError("");
      setLoading(true);
      let userEmail = emailRef.current.value;
      let password = passwordRef.current.value;
      let userName = userEmail.substring(0, userEmail.indexOf("@"));
      console.log("userName->" + userName); //testing
      const usersCollectionRef = collection(db, "users");
      await addDoc(usersCollectionRef, {
        name: userName,
        email: userEmail,
        password: password,
      });
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userName", userName);

      //2. Realtime Database Method
      // let userRef = app.database().ref('User');
      // let user = {
      //   email:'email',
      //   password:'123'
      // };
      // userRef.push(user);

      window.location.reload(false);
      //TODO: navigate to main page not working!!!
      // const navigate = useNavigate();
      // navigate("/");
    } catch (err) {
      setError("Failed to create an account");
      console.log(err);
    }
    setLoading(false);
  }

  //testing -> 2. Realtime Database Method
  function submit() {
    //2. Realtime Database Method
    let userRef = app.database().ref("User");
    let user = {
      email: "email",
      password: "123",
    };
    userRef.push(user);
  }

  return (
    <div>
      {/* <button onClick={submit}>submit</button> */}
      <div hidden={hideSignInBox}>
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <TypingIcon /> 
        </div>
        <Container
          className="d-flex align-items-center justify-content-center"
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            {/* Third Party Sign-in */}
            <GoogleSignIn />
            <GithubSignIn />
          </div>
        </Container>
      </div>
      {/* TODO: This is temporary solution for login nav issue! */}
      <div hidden={!hideSignInBox}>
        <Level1 />
      </div>
    </div>
  );
}
