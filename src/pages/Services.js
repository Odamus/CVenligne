import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
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

      <Container className="py-5 text-center">
        <h1 className="main-title">Mon offre de Services</h1>
      </Container>

      <div className="banner-section">
        <Container className="text-center">
          <h2 className="banner-title">Découvrez nos Services</h2>
          <p>
            Offrez à votre entreprise une expérience optimale grâce à nos
            services professionnels.
          </p>
        </Container>
      </div>

      {/* Titre principal */}
      <Container className="py-5 text-center">
        <h1 className="main-title">Mon offre de Services</h1>
      </Container>

      {/* Trois services */}
      <Container>
        <Row className="mt-4">
          {/* Service UX Design */}
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title>UX Design</Card.Title>
                <Card.Text>
                  Nous concevons des interfaces intuitives et centrées sur
                  l'utilisateur pour améliorer l'expérience.
                </Card.Text>
                <Button variant="primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Service Développement Web */}
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title>Développement Web</Card.Title>
                <Card.Text>
                  Création de sites web modernes et performants pour vos projets
                  professionnels.
                </Card.Text>
                <Button variant="primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Service Référencement (SEO) */}
          <Col md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title>Référencement (SEO)</Card.Title>
                <Card.Text>
                  Optimisation SEO pour améliorer la visibilité de votre site
                  sur les moteurs de recherche.
                </Card.Text>
                <Button variant="primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
