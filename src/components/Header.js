import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

export default function Header() {
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [userEmail, setUserEmail] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState("home");
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
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
                            onClick={isSignedIn ? null : null}
                            href={isSignedIn ? "/" : "/sign_up"}
                        >
                            {isSignedIn ? "Logout" : "Login"}
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}