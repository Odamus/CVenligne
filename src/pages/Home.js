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
  DropdownDivider,
} from "react-bootstrap";

function Home() {
  const scrollToSection = () => {
    document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundImage: "url(/img/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="background-section">
          <Row className="text-center">
            <Col>
              <h1 className="text-white">Bienvenue, je suis John DOE</h1>
              <h2 className="text-white">Développeur web full stack</h2>
              <Button variant="primary" size="lg" onClick={scrollToSection}>
                En savoir plus
              </Button>
            </Col>
          </Row>
        </div>
      </Container>

      <Container
        fluid
        id="section2"
        className="py-5"
        style={{ backgroundColor: "#fff" }}
      >
        <Row className="justify-content-center">
          <Col className="col-lg-8 col-sm-12">
            <Card className="shadow-lg">
              <Card.Body>
                <Row className="align-items-center">
                  {/* Présentation à gauche */}
                  <Col
                    md={6}
                    className="h-100 d-flex flex-column align-items-center col-md-6"
                  >
                    <Row>
                      <Col className="col-md-8 offset-md-2">
                        <h2>A propos</h2>
                        <DropdownDivider className="divider" />
                        <p>
                          Pasioné par l'informatique et les nouvelles
                          technologies, j'ai suivie une formation
                          d'intégrateur-développeur web au CEF. Au cours de
                          cette formation, j'ai pu acquérir des bases solides
                          pour travailler dans le domaine du développement web{" "}
                          <br />
                          Basé à Lyon, je suis en recherche d'une alternance au
                          sein d'une agence digitale pour consolider ma
                          formation de développpeur web full stack. <br />
                          J'accorde une attention particulière à la qualité du
                          code que j'écris et je respecte les bonnes pratiques
                          du web.
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  {/* Photo à droite */}
                  <Col className="text-center col-md-6">
                    <Row>
                      <Col>
                        <Image
                          src="/img/john-doe-about.jpg"
                          alt="Odam"
                          rounded
                          fluid
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row className="text-center mt-4">
                          <Col>
                            <h3>Nos Compétences</h3>
                            <div className="mb-4">
                              <h5>Développement Web</h5>
                              <ProgressBar
                                now={20}
                                label="20%"
                                variant="info"
                              />
                            </div>
                            <div className="mb-4">
                              <h5>Design UI/UX</h5>
                              <ProgressBar
                                now={75}
                                label="75%"
                                variant="info"
                              />
                            </div>
                            <div className="mb-4">
                              <h5>Marketing Digital</h5>
                              <ProgressBar
                                now={65}
                                label="65%"
                                variant="info"
                              />
                            </div>
                            <div className="mb-4">
                              <h5>Gestion de Projet</h5>
                              <ProgressBar
                                now={90}
                                label="90%"
                                variant="info"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                {/* Compétences sous la photo */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
