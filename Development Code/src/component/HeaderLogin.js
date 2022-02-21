import React from "react";
import "./HeaderLogin.css";
import PersonIcon from "@material-ui/icons/Person";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import { logOut,signInWithGoogle, auth} from "./authentification/firebase/firebase";


function HeaderLogin() {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [isSignedIn,setIsSignedIn] = useState(false);

  //update user info when auth state changes

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     setUser(user);
  //   })
  // }, [])

  useEffect(() => {
    //check user's sign-in status
  //   window.addEventListener("storage",() => {
  //     setIsSignedIn(!isSignedIn);
  //     setUser(localStorage.getItem("user"));
  //     setUserEmail(localStorage.getItem("userEmail"));
  //     console.log("called window.addEventListener")
  //  });
    if(localStorage.getItem("userEmail")!=null){
      setUser(localStorage.getItem("user"));
      setUserEmail(localStorage.getItem("userEmail"));
    setIsSignedIn(true);
    }
  }, []);

  return (
    <div>
      {/* grey nav bar */}
      <div className="headerLogin">
        <div className="headerLogin__loginButton">
          <PersonIcon />
          <Link to="/sign_in">
            <button>Login</button>
          </Link>
        </div>
      </div>

      {/* react bootstrap navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        
          <Navbar.Collapse className="justify-content-end">
          <PersonIcon style={{color: "white", marginRight:"5px"}}/>
            <Navbar.Text style={{color: "white",marginRight:"10px"}}>
              {isSignedIn?<div>Signed in as: {userEmail}</div> : <div></div>}

            </Navbar.Text>

            <Button variant="light" onClick={isSignedIn? logOut : null} href={isSignedIn?"/":"/sign_up"}>
              {isSignedIn? "Logout" : "Login"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderLogin;
