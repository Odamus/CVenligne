import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Assurez-vous d'avoir installé Leaflet
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
                  <Form.Label className="text-dark">Nom</Form.Label>
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
                  <Form.Label className="text-dark">Email</Form.Label>
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
                  <Form.Label className="text-dark">
                    Numéro de téléphone
                  </Form.Label>
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
                  <Form.Label className="text-dark">Sujet</Form.Label>
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
                  <Form.Label className="text-dark">Message</Form.Label>
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
              <MapContainer
                center={[51.505, -0.09]} // Coordonnées d'exemple, remplacez-les par celles de John Doe
                zoom={13}
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    John Doe - 1234 Some Street, Some City, Some Country
                  </Popup>
                </Marker>
              </MapContainer>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
