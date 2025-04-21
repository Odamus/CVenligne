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
          <Row className="text-center w-100">
            <Col className="titreSection">
              <h1 className="text-white mb-6 custom-title">
                Bienvenue, je suis John DOE
              </h1>
              <h2 className="text-white mb-4 fs-2 fs-sm-6 fs-md-3">
                Développeur web full stack
              </h2>
              <Button variant="primary" size="lg" onClick={scrollToSection}>
                En savoir plus
              </Button>
            </Col>
          </Row>
        </div>
      </Container>

      <section id="section-deux">
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
                    <Col
                      md={6}
                      className="h-100 d-flex flex-column align-items-center col-md-6"
                    >
                      <Row>
                        <Col className="col-md-8 offset-md-2 d-flex flex-column">
                          <h2 className="mt-4 fs-1">A propos</h2>
                          <DropdownDivider className="divider" />
                          <p className="fs-4">
                            Passionné par l'informatique et les nouvelles
                            technologies, j'ai suivi une formation d'
                            <strong>intégrateur-développeur web</strong> au CEF.
                            Au cours de cette formation, j'ai pu acquérir des
                            bases solides pour travailler dans le domaine du
                            <strong>développement web</strong>
                          </p>
                          <br />
                          <p className="fs-4">
                            Basé à Lyon, je suis en recherche d'une alternance
                            au sein d'une agence digitale pour consolider ma
                            formation de{" "}
                            <strong>développpeur web full stack.</strong>
                          </p>
                          <br />
                          <p className="fs-4">
                            J'accorde une attention particulière à la qualité du
                            code que j'écris et je respecte les bonnes pratiques
                            du web.
                          </p>
                        </Col>
                      </Row>
                    </Col>

                    <Col className="text-center col-md-6">
                      <Row>
                        <Col>
                          <Image
                            src="/img/john-doe-about.jpg"
                            alt="Odam"
                            rounded
                            fluid
                            width="100%"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row className="text-center mt-4">
                            <Col>
                              <h3>Mes Compétences</h3>
                              <div className="mb-4">
                                <h5 className="d-flex text-left fs-4">
                                  HTML 90%
                                </h5>
                                <ProgressBar now={90} variant="danger" />
                              </div>
                              <div className="mb-4">
                                <h5 className="d-flex text-left fs-4">
                                  CSS3 80%
                                </h5>
                                <ProgressBar now={80} variant="info" />
                              </div>
                              <div className="mb-4">
                                <h5 className="d-flex text-left fs-4">
                                  JAVASCRIPT 70%
                                </h5>
                                <ProgressBar now={70} variant="warning" />
                              </div>
                              <div className="mb-4">
                                <h5 className="d-flex text-left fs-4">
                                  PHP 60%
                                </h5>
                                <ProgressBar now={60} variant="success" />
                              </div>
                              <div className="mb-4">
                                <h5 className="d-flex text-left fs-4">
                                  REACT 50%
                                </h5>
                                <ProgressBar now={50} variant="info" />
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
      </section>
    </div>
  );
}

export default Home;
