import React from "react";
import avatar from "../assets/svg/avatar.svg";
import PersonIcon from "@material-ui/icons/Person";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import {
  logOut,
  signInWithGoogle,
  auth,
  db,
} from "./authentication/firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function HeaderLogin() {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    if (localStorage.getItem("userEmail") != null) {
      setUser(localStorage.getItem("user"));
      setUserEmail(localStorage.getItem("userEmail"));
      setIsSignedIn(true);
      //TODO: check if this email already exists in our DB
    }
  }, []);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { email: userEmail });
  };

  return (
    <div>
      {/* react bootstrap navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <PersonIcon style={{ color: "white", marginRight: "5px" }} />
            <Navbar.Text style={{ color: "white", marginRight: "10px" }}>
              {isSignedIn ? <div>Signed in as: {userEmail}</div> : <div></div>}
            </Navbar.Text>

            <Button
              variant="light"
              onClick={isSignedIn ? logOut : null}
              href={isSignedIn ? "/" : "/sign_up"}
            >
              {isSignedIn ? "Logout" : "Login"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderLogin;
