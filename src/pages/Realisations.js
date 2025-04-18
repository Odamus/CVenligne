import React from "react";
import { Container, Row, Col, DropdownDivider } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import "../pages/Realisations.css";

function Realisations() {
  const projects = [
    {
      image: "/img/fresh-food.jpg",
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      link: "https://example.com/project1",
      info: "PHP et MySQL.",
      footerDescription: "Site réalisé avec PHP et MySQL",
    },
    {
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      image: "/img/restaurant-japonais.jpg",
      link: "https://example.com/project2",
      info: "WordPress.",
      footerDescription: "Site réalisé avec WordPress",
    },
    {
      title: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      image: "/img/espace-bien-etre.jpg",
      link: "https://example.com/project3",
      info: "HTML/CSS.",
      footerDescription: "Site réalisé en HTML / CSS",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        paddingTop: "60px",
      }}
    >
      {/* Bannière responsive */}
      <img
        alt="Bannière"
        src={process.env.PUBLIC_URL + "/img/banner.jpg"}
        className="img-fluid shadow-sm w-100" // Utilisation de 'img-fluid' pour rendre l'image responsive
        style={{
          objectFit: "cover", // Assure que l'image couvre la zone sans déformer
          height: "15vh", // Hauteur réduite (vous pouvez ajuster selon vos besoins)
        }}
      />

      <Container className="w-100 mt-5">
        {/* Titre de la section Portfolio */}
        <h1 className="real-title text-center mb-0">Portfolio</h1>
        <p className="real-subtitle text-center">
          Voici quelques-unes de mes réalisations.
        </p>

        <DropdownDivider className="divider mb-5" style={{ width: "400px" }} />

        {/* Grille des projets */}
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex mb-4">
              <div className="w-100 h-100 d-flex">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  footerDescription={project.footerDescription}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Realisations;
