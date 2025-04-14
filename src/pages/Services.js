import React from "react";
import { Container, Card, Col, Row, DropdownDivider } from "react-bootstrap";
import "../pages/Services.css";

function Services() {
  return (
    <div className="banner-section">
      <img
        alt=""
        src={process.env.PUBLIC_URL + "/img/banner.jpg"}
        width="100%"
        height="200"
        className="shadow-sm"
      />

      {/* Titre principal */}
      <Container className="py-5 text-center">
        <h1 className="main-title">Mon offre de Services</h1>
        <p className="text-dark">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
      </Container>
      <DropdownDivider
        className="divider"
        style={{ width: "400px", marginBottom: 60, marginTop: 0 }}
      />

      {/* Trois services */}
      <Container style={{ textAlign: "center" }}>
        <Row className="mt-4">
          {/* Service UX Design */}
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <img alt="imageecran" src="/img/Ecran.jpg"></img>
                <Card.Title>UX Design</Card.Title>
                <Card.Text>
                  Nous concevons des interfaces intuitives et centrées sur
                  l'utilisateur pour améliorer l'expérience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service Développement Web */}
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <img alt="imageweb" src="/img/Pageweb.jpg"></img>
                <Card.Title>Développement Web</Card.Title>
                <Card.Text>
                  Création de sites web modernes et performants pour vos projets
                  professionnels.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service Référencement (SEO) */}
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <img alt="imageseo" src="/img/loupedollars.jpg"></img>
                <Card.Title>Référencement (SEO)</Card.Title>
                <Card.Text>
                  Optimisation SEO pour améliorer la visibilité de votre site
                  sur les moteurs de recherche.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
