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
                  <Col
                    md={6}
                    className="h-100 d-flex flex-column align-items-center col-md-6"
                  >
                    <Row>
                      <Col className="col-md-8 offset-md-2 d-flex flex-column">
                        <h2 className="mt-4">A propos</h2>
                        <DropdownDivider className="divider" />
                        <p className="fs-4">
                          Passioné par l'informatique et les nouvelles
                          technologies, j'ai suivie une formation d'
                          <strong>intégrateur-développeur web</strong> au CEF.
                          Au cours de cette formation, j'ai pu acquérir des
                          bases solides pour travailler dans le domaine du
                          <strong>développement web</strong>{" "}
                        </p>
                        <br />
                        <p className="fs-4">
                          Basé à Lyon, je suis en recherche d'une alternance au
                          sein d'une agence digitale pour consolider ma
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
                              <h5 className="d-flex text-left">HTML 90%</h5>
                              <ProgressBar now={90} variant="danger" />
                            </div>
                            <div className="mb-4">
                              <h5 className="d-flex text-left">CSS3 80%</h5>
                              <ProgressBar now={80} variant="info" />
                            </div>
                            <div className="mb-4">
                              <h5 className="d-flex text-left">
                                JAVASCRIPT 70%
                              </h5>
                              <ProgressBar now={70} variant="warning" />
                            </div>
                            <div className="mb-4">
                              <h5 className="d-flex text-left">PHP 60%</h5>
                              <ProgressBar now={60} variant="success" />
                            </div>
                            <div className="mb-4">
                              <h5 className="d-flex text-left">REACT 50%</h5>
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
    </div>
  );
}

export default Home;
