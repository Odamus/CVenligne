import React from "react";
import {
  Container,
  Row,
  Col,
  DropdownDivider,
  Accordion,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function mentions() {
  return (
    <Container
      fluid="md"
      style={{
        marginTop: 68,
      }}
    >
      <meta name="robots" content="noindex, nofollow" />
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="mt-5 fw-bold text-center display-4">Mentions légales</h2>
          <DropdownDivider
            className="divider "
            style={{ width: "250px", marginBottom: 60, marginTop: 0 }}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="mt-0">Éditeur du site</Accordion.Header>
              <Accordion.Body>
                <h3>John Doe</h3>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> 40 Rue Laure Diebold
                  <br /> 69009 Lyon, France
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <a href="tel:+33620304050">06 20 30 40 50</a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header className="mt-0">Hébergement</Accordion.Header>
              <Accordion.Body>
                <h3>Always Data</h3>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> 91 rue du Faubourg
                  Saint Honoré <br />
                  75008 Paris
                </p>
                <p>
                  <FontAwesomeIcon icon={faGlobe} className="me-2 text-info" />
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    www.alwaysdata.com
                  </a>
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header className="mt-0">Crédits</Accordion.Header>
              <Accordion.Body>
                <h3>Crédits</h3>
                <p>Site développé par John Doe, étudiant du CEF.</p>
                <p>
                  Les images libres de droit sont issues du site{" "}
                  <a href="https://pixabay.com/fr/" className="no-underline">
                    Pixabay
                  </a>
                  .
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default mentions;
