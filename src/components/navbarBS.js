import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../components/styleNav.css";

function NavbarBS() {
  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        style={{
          backgroundColor: "#444",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Ajout d'un léger ombrage pour un effet élégant
        }}
      >
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="/" className="ms-4">
            <img
              alt="Logo"
              src={process.env.PUBLIC_URL + "/img/favicon.png"}
              width="30"
              height="30"
              className="shadow-sm"
            />
            <span className="ms-2 text-light">JOHN DOE</span>
          </Navbar.Brand>

          {/* Toggle pour menu hamburger sur mobile */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Navigation */}
            <Nav className="ml-auto w-100 justify-content-end me-5">
              <Nav.Link
                as={Link}
                to="/"
                className="me-4 custom-link text-uppercase"
                activeClassName="active-link"
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Services"
                className="me-4 custom-link text-uppercase"
                activeClassName="active-link"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Realisations"
                className="me-4 custom-link text-uppercase"
                activeClassName="active-link"
              >
                Réalisations
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Blog"
                className="me-4 custom-link text-uppercase"
                activeClassName="active-link"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Contact"
                className="me-4 custom-link text-uppercase"
                activeClassName="active-link"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBS;
