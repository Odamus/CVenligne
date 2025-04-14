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
        <Container fluid>
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/img/favicon.png"}
            width="30"
            height="30"
            className="shadow-sm"
          />{" "}
          <Navbar.Brand href="/" className="ms-4 custom-link">
            Odam SVAY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto w-100 justify-content-end me-5">
              <Nav.Link href="/" className="me-4 custom-link">
                Accueil
              </Nav.Link>
              <Nav.Link href="/Services" className="me-4 custom-link">
                Services
              </Nav.Link>
              <Nav.Link href="/Realisations" className="me-4 custom-link">
                Réalisations
              </Nav.Link>
              <Nav.Link href="/Blog" className="me-4 custom-link">
                Blog
              </Nav.Link>
              <Nav.Link href="/Contact" className="me-4 custom-link">
                Contact
              </Nav.Link>
              {/* <Nav.Link href="/Mentions" className="me-4 custom-link">
                Mentions légales
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBS;
