import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../components/styleNav.css";

function NavbarBS() {
  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        style={{ backgroundSize: "0", backgroundColor: "#444" }}
      >
        <Container>
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/img/favicon.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/Home" className="custom-link">
              Odam SVAY
            </Navbar.Brand>
            <Nav className="navbar-nav ms-auto">
              <Nav.Link href="/Home" className="custom-link">
                Home
              </Nav.Link>
              <Nav.Link href="/Contact" className="custom-link">
                Contact
              </Nav.Link>
              <Nav.Link href="/Portfolio" className="custom-link">
                Portfolio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBS;
