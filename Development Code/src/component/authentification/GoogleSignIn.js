import React from "react";
import { signInWithGoogle } from "./firebase/firebase";
import GoogleButton from "react-google-button";

function GoogleSignIn() {
  return (
    <div>
      <GoogleButton
        onClick={signInWithGoogle}
        style={{width:"100%", margin:"10px 0"}}
      />
    </div>
  );
}

export default GoogleSignIn;
