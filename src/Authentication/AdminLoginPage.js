import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAlert } from "react-alert";

export default function AdminLoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(""); //Henry: for handleSubmit()
  const [loading, setLoading] = useState(false); //Henry: for handleSubmit()
  const alert = useAlert(); //Henry: fancy alert

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      let userEmail = emailRef.current.value;
      let password = passwordRef.current.value;
      let userName = userEmail.substring(0, userEmail.indexOf("@"));
      console.log("userName->" + userName); //testing
      //firebase -> signInWithEmailAndPassword
      await signInWithEmailAndPassword(auth, userEmail, password)
        .then((userCredential) => {
          localStorage.setItem("userEmail", userEmail);
          localStorage.setItem("userName", userName);
          //nav to home page
          window.location = "/admin_page";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert.error(errorMessage);
        });
    } catch (err) {
      setError("Failed to create an account");
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <div>
      <div>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ maxHeight: "100vh", marginTop: "20%" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Admin Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="admin@123.com" type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="admin123" type="password" ref={passwordRef} required />
                  </Form.Group>

                  <Button disabled={loading} className="w-100" type="submit" style={{marginTop:"10px"}}>
                    Log In
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Not an admin? <Link to="/sign_in">Back to Sign Up Page</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
