import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "./firebase/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import Level1 from "../Level1";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup } = useAuth()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hideSignInBox, setHideSignInBox] = useState(false);

  //TODO: toggle sign-in box & level1 component (this is a temporary alternative to address login navigation issue)! 
  useEffect(() => {
    if (localStorage.getItem("userEmail") != null) {
      setHideSignInBox(true);
      console.log("Signup.js " + hideSignInBox);
    }
  }, []);

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match")
  //   }

  //   try {
  //     setError("")
  //     setLoading(true)
  //     await signup(emailRef.current.value, passwordRef.current.value)
  //     navigation('/')
  //   } catch {
  //     setError("Failed to create an account")
  //   }

  //   setLoading(false)
  // }

  return (
    <div>
      <div hidden={hideSignInBox}>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Sign Up
                  </Button>
                </Form>
                <GoogleSignIn />
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </div>
        </Container>
      </div>
      <div hidden={!hideSignInBox}>
        <Level1 />
      </div>
    </div>
  );
}
