import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { logOut } from '../Authentication/firebase';

export default function Header() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [currentAlgorithm, setCurrentAlgorithm] = React.useState(localStorage.getItem("selectedAlgorithm"));

  const prettyPrint = (str) => {
    switch (str) {
      case 'ms':
        return 'Merge Sort';
      case 'bs':
        return 'Bubble Sort';
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem("selectedAlgorithm") === null) {
      localStorage.setItem("selectedAlgorithm", 'ms');
    } else {
      localStorage.setItem("selectedAlgorithm", currentAlgorithm);
    }
  }, [currentAlgorithm]);

  React.useEffect(() => {
    if (localStorage.getItem("userEmail") !== null) {
      setIsSignedIn(true);
      setUserEmail(localStorage.getItem("userEmail"));
    }
    if (userEmail === 'admin@123.com') {
      setIsAdmin(true);
    }
  }, [isSignedIn]);

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
                <NavDropdown.Item href="/level4">Level4</NavDropdown.Item>
                <NavDropdown.Item href="/level5">Level5</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/customLevel">Custom Level</NavDropdown.Item>
                {isAdmin ? <NavDropdown.Item href="/admin_page">Admin Page</NavDropdown.Item> : ''}
              </NavDropdown>
              <NavDropdown title="Select a Algorithm" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setCurrentAlgorithm('ms')}>Merge Sort</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCurrentAlgorithm('bs')}>Bubble Sort</NavDropdown.Item>
              </NavDropdown>
              <Navbar.Text>
                Current selected Algorithm: <a>{prettyPrint(currentAlgorithm)}</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <PersonIcon style={{ color: "white", marginRight: "5px" }} />
            <Navbar.Text style={{ color: "black", marginRight: "10px" }}>
              {isSignedIn ? <div>Signed in as: {userEmail}</div> : <div></div>}
            </Navbar.Text>
            <Button
              variant="light"
              onClick={isSignedIn ? logOut : null}
              href={isSignedIn ? "/" : "sign_in"}
            >
              {isSignedIn ? "Logout" : "Login"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
}
