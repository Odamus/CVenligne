import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarBS() {
  return (
    <div>
      <Navbar expand="lg" sticky="top" style={{
          backgroundImage: "url('/img/banner.jpg')", // Remplace par ton URL d'image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px", // Ajuste la hauteur de la navbar
        }}>
        <Container>
        <img
              alt=""
              src={process.env.PUBLIC_URL + '/img/favicon.png'}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>  
  )
}

export default NavbarBS;


