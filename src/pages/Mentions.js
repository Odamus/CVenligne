import React from "react";
import {
  Container,
  Row,
  Col,
  DropdownDivider,
  Accordion,
} from "react-bootstrap";

function Mentions() {
  return (
    <Container fluid="md" style={{ marginTop: 68 }}>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="mt-5">Mentions légales</h2>
          <DropdownDivider
            className="divider"
            style={{ width: "400px", marginBottom: 60, marginTop: 0 }}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Éditeur du site</Accordion.Header>
              <Accordion.Body>
                Ce site est édité par la société XYZ, immatriculée au RCS de
                Paris sous le numéro 123 456 789.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Hébergement</Accordion.Header>
              <Accordion.Body>
                Le site est hébergé par OVH - 2 rue Kellermann - 59100 Roubaix -
                France.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Propriété intellectuelle</Accordion.Header>
              <Accordion.Body>
                Tous les contenus présents sur le site sont protégés par les
                droits d’auteur et sont la propriété exclusive de XYZ, sauf
                mention contraire.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Mentions;
