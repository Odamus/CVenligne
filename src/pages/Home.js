import React from "react";
import "../pages/Home.css";
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
  Card,
  Image,
} from "react-bootstrap";

function Home() {
  const scrollToSection = () => {
    document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* Première section - Titre, sous-titre et bouton avec une image de fond */}
      <Container
        fluid
        style={{
          backgroundImage: "url(/img/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="d-flex flex-column justify-content-center align-items-center background-section"
      >
        <Row className="text-center">
          <Col>
            <h1 className="text-white">
              Bienvenue sur mon site, je suis Odam SVAY
            </h1>
            <h2 className="text-white">Développeur web junior</h2>
            <Button variant="primary" size="lg" onClick={scrollToSection}>
              En savoir plus
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Deuxième section : Présentation et compétences dans un cadre blanc */}
      <Container
        fluid
        id="section2"
        className="py-5"
        style={{ backgroundColor: "#fff" }}
      >
        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            <Card className="shadow-lg">
              <Card.Body>
                <Row className="align-items-center">
                  {/* Présentation à gauche */}
                  <Col
                    md={6}
                    className="h-100 d-flex flex-column align-items-center"
                  >
                    <h2>Notre Présentation</h2>
                    <p>
                      Nous sommes une équipe passionnée, spécialisée dans les
                      solutions web innovantes. <br />
                      Avec une expérience de plusieurs années, nous apportons
                      des solutions créatives et techniques à nos clients.
                    </p>
                  </Col>

                  {/* Photo à droite */}
                  <Col md={6} className="text-center">
                    <Image
                      src="/img/john-doe-about.jpg"
                      alt="Odam"
                      rounded
                      fluid
                    />
                  </Col>
                </Row>

                {/* Compétences sous la photo */}
                <Row className="text-center mt-4">
                  <Col md={{ span: 6, offset: 6 }}>
                    <h3>Nos Compétences</h3>
                    <div className="mb-4">
                      <h5>Développement Web</h5>
                      <ProgressBar now={85} label="85%" variant="info" />
                    </div>
                    <div className="mb-4">
                      <h5>Design UI/UX</h5>
                      <ProgressBar now={75} label="75%" />
                    </div>
                    <div className="mb-4">
                      <h5>Marketing Digital</h5>
                      <ProgressBar now={65} label="65%" />
                    </div>
                    <div className="mb-4">
                      <h5>Gestion de Projet</h5>
                      <ProgressBar now={90} label="90%" />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
