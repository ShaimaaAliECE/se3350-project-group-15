import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GithubSignIn, GoogleSignIn } from "./ThirdPartySignIn";
import TypingIcon from "../assets/svg/typing_svg";

export default function SignInPageAnimation() {
  return (
    <div>
      <div>
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <TypingIcon />
        </div>
        <Container className="d-flex align-items-center justify-content-center">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            {/* Third Party Sign-in */}
            <GoogleSignIn />
            <GithubSignIn />
            {/* admin login */}
            <div className="w-100 text-center mt-2">
              Login as admin? <Link to="/admin_login">Log In</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
