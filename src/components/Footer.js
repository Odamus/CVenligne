import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="mt-5 pt-5">
      <Container>
        <Row>
          {/* Colonne 1 */}
          <Col md={3}>
            <h5>John Doe</h5>
            <p>1234 Some Street, Some City, Some Country</p>
            <p>+123 456 7890</p>
            <div>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>

          {/* Colonne 2 */}
          <Col md={3}>
            <h5>Pages</h5>
            <ul>
              <li>
                <a href="/Home">Accueil</a>
              </li>
              <li>
                <a href="/Services">Services</a>
              </li>
              <li>
                <a href="/Realisations">Réalisations</a>
              </li>
              <li>
                <a href="/Blog">Blog</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/Mentions">Mentions légales</a>
              </li>
            </ul>
          </Col>

          {/* Colonne 3 */}
          <Col md={3}>
            <h5>Dernières Réalisations</h5>
            <ul>
              <li>
                <a href="/project1">Projet 1</a>
              </li>
              <li>
                <a href="/project2">Projet 2</a>
              </li>
              <li>
                <a href="/project3">Projet 3</a>
              </li>
            </ul>
          </Col>

          {/* Colonne 4 */}
          <Col md={3}>
            <h5>Derniers Articles</h5>
            <ul>
              <li>
                <a href="/blog/post1">Article 1</a>
              </li>
              <li>
                <a href="/blog/post2">Article 2</a>
              </li>
              <li>
                <a href="/blog/post3">Article 3</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center mt-4">
            <p>
              &copy; {new Date().getFullYear()} John Doe. Tous droits réservés.
            </p>
          </Col>
        </Row>

        {/* Bouton Retour en haut */}
        {showScroll && (
          <Button
            variant="primary"
            onClick={scrollToTop}
            className="position-fixed bottom-0 end-0 mb-4 me-4"
            style={{ zIndex: 1000 }}
          >
            ↑
          </Button>
        )}
      </Container>
    </footer>
  );
}

export default Footer;
