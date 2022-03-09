import React from "react";
import { signInWithGoogle, signInWithGithub } from "./firebase";
import GoogleButton from "react-google-button";
import GithubButton from "react-github-login-button";

export function GoogleSignIn() {
  return (
    <div>
      <GoogleButton
        onClick={signInWithGoogle}
        style={{ width: "100%", margin: "10px 0" }}
      />
    </div>
  );
}

export function GithubSignIn() {
  return (
    <div>
      <GithubButton
        onClick={signInWithGithub}
        style={{ width: "100%", margin: "10px 0" }}
      />
    </div>
  );
}
