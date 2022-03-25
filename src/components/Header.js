import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { logOut } from "../Authentication/firebase";

export default function Header() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem("userEmail") != null) {
      setUserEmail(localStorage.getItem("userEmail"));
      setIsSignedIn(true);
      //TODO: check if this email already exists in our DB
    }
  }, []);

  return (
    <div className="Header">
      <Navbar className="header-container" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Sorting Algorithms</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Select a Level" id="basic-nav-dropdown">
                <NavDropdown.Item href="/level1">Level1</NavDropdown.Item>
                <NavDropdown.Item href="/level2">Level2</NavDropdown.Item>
                <NavDropdown.Item href="/level3">Level3</NavDropdown.Item>
                <NavDropdown.Item href="/customLevel">Custom level</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <PersonIcon style={{ color: "white", marginRight: "5px" }} />
            <Navbar.Text style={{ color: "white", marginRight: "10px" }}>
              {isSignedIn ? <div>Signed in as: {userEmail}</div> : <div></div>}
            </Navbar.Text>

            <Button
              variant="light"
              onClick={isSignedIn ? logOut : null}
              href={isSignedIn ? "/" : "/sign_in"}
            >
              {isSignedIn ? "Logout" : "Login"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
