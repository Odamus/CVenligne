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
      }}
    >
      <Container className="text-center">
        <Row>
          {/* Colonne 1 */}
          <Col xs={12} sm={6} md={3} className="text-start mb-4 mb-md-0">
            <h5 className="footer-title">John Doe</h5>
            <address className="small">
              1234 Some Street, Some City, Some Country
            </address>
            <p className="small">+123 456 7890</p>
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
          <Col xs={12} sm={6} md={3}>
            <h5 className="footer-title text-center">Liens utiles</h5>
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
                <a className="text-dark no-underline footer-link" href="/Home">
                  Accueil
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <HashLink
                  to="/Home#section2"
                  className="text-dark no-underline footer-link"
                >
                  À propos
                </HashLink>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a
                  className="text-dark no-underline footer-link"
                  href="/Services"
                >
                  Services
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a
                  className="text-dark no-underline footer-link"
                  href="/Contact"
                >
                  Me contacter
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a
                  className="text-dark no-underline footer-link"
                  href="/mentions"
                >
                  Mentions légales
                </a>
              </li>
            </ul>
          </Col>

          {/* Colonne 3 */}
          <Col xs={12} sm={6} md={3}>
            <h5 className="footer-title">Mes dernières réalisations</h5>
            <ul
              className="list-unstyled"
              style={{
                paddingLeft: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginLeft: "60px",
              }}
            >
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a
                  href="/Realisations"
                  className="text-dark no-underline footer-link"
                >
                  Fresh food
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a
                  href="/Realisations"
                  className="text-dark no-underline footer-link"
                >
                  Restaurant Akira
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a
                  href="/Realisations"
                  className="text-dark no-underline footer-link"
                >
                  Espace bien-être
                </a>
              </li>
            </ul>
          </Col>

          {/* Colonne 4 */}
          <Col xs={12} sm={6} md={3}>
            <h5 className="footer-title">Mes derniers articles</h5>
            <ul
              className="list-unstyled"
              style={{
                paddingLeft: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginLeft: 40,
              }}
            >
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a
                  href="/blog/post1"
                  className="text-dark no-underline footer-link"
                >
                  Coder son site en HTML/CSS
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <span className="text-primary me-2">&gt;</span>
                <a
                  href="/blog/post2"
                  className="text-dark no-underline footer-link"
                >
                  Vendre ses produits sur le web
                </a>
              </li>
              <li>
                <span className="text-primary"> &gt; </span>{" "}
                <a
                  href="/blog/post3"
                  className="text-dark no-underline footer-link"
                >
                  Se positionner sur Google
                </a>
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
            marginTop: "0px",
            width: "100%",
          }}
        >
          <p className="small" style={{ marginBottom: "0px" }}>
            &copy; {new Date().getFullYear()} Designed by John Doe.
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
