import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import "../components/Footer.css";

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
    <footer
      className="mt-5 pt-5 justify-content-around"
      style={{
        backgroundColor: "#F0F0F2",
        width: "100%",
        paddingTop: "20px",
        marginLeft: "0px",
        marginRight: "0px",
        padding: "10px 0",
        marginTop: "0px",
        with: "100%",
      }}
    >
      <Container className="text-center">
        <Row>
          {/* Colonne 1 */}
          <Col md={3} className="text-start">
            <h5>John Doe</h5>
            <address> 1234 Some Street, Some City, Some Country</address>
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
            <h5 className="text-center">Liens utiles</h5>
            <ul
              className="list-unstyled"
              style={{
                paddingLeft: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginLeft: "100px",
              }}
            >
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a className="text-dark no-underline" href="/Home">
                  Accueil
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <HashLink
                  to="/Home#section2"
                  className="text-dark no-underline"
                >
                  À propos
                </HashLink>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a className="text-dark no-underline" href="/Services">
                  Services
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a className="text-dark no-underline" href="/Contact">
                  Me contacter
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a className="text-dark no-underline" href="/Mentions">
                  Mentions légales
                </a>
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

      {/* Copyright */}
      <Row style={{ marginTop: "0px" }}>
        <Col
          className="text-center"
          onClick={scrollToTop}
          style={{
            backgroundColor: "#444",
            color: "white",
            textAlign: "center",
            padding: "10px 0",
            marginBottom: "20px",
            marginTop: "0px", // Espace entre le footer et la ligne de copyright
            width: "100%", // Le fond #444 occupe toute la largeur
          }}
        >
          <p style={{ marginBottom: "0px" }}>
            &copy; {new Date().getFullYear()} Designed by John Doe.
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
