import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../pages/Contact.css"; // Importez votre fichier CSS personnalisé

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire
    alert("Formulaire soumis !");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div
      style={{
        backgroundImage: `url('/img/contact-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 105, 255, 0.5)",
          padding: "50px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          {/* Titre de la page */}
          <Row className="text-center">
            <Col xs={12}>
              <h1 className="text-dark display-4">Contactez-moi</h1>
              <p className="text-dark lead">
                Je serai heureux de vous répondre.
              </p>
            </Col>
          </Row>

          {/* Formulaire de contact et coordonnées */}
          <Row className="justify-content-center">
            {/* Formulaire */}
            <Col xs={12} sm={8} md={6} lg={5}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Votre nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Votre email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Control
                    type="tel"
                    placeholder="Votre numéro"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formSubject">
                  <Form.Control
                    type="text"
                    placeholder="Le sujet de votre message"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Votre message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Envoyer
                </Button>
              </Form>
            </Col>

            {/* Coordonnées de John Doe */}
            <Col xs={12} sm={8} md={6} lg={5} className="mt-4 mt-md-0">
              <h2 className="text-dark">Coordonnées de John Doe</h2>
              <p className="text-dark">
                <FaMapMarkerAlt /> 40 Rue Laure Diebold, 69009 Lyon, France
              </p>
              <p className="text-dark">
                <FaPhoneAlt /> 06 20 30 40 50
              </p>
              <p className="text-dark">
                <FaEnvelope /> johndoe@example.com
              </p>

              {/* Carte Google Map */}
              <Card>
                <Card.Body>
                  <Card.Title>Carte Google Map</Card.Title>
                  <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.415607701256!2d4.799144615573987!3d45.77984347910598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebb0f03b6f5d%3A0xd1f7ad29980c8e64!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1713025841662!5m2!1sfr!2sfr"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
