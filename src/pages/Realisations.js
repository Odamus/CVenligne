import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Realisations() {
  const projects = [
    {
      image: "/img/fresh-food.jpg",
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      link: "https://example.com/project1",
      additionalInfo: "PHP et MySQL.",
    },
    {
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      image: "/img/restaurant-japonais.jpg",
      link: "https://example.com/project2",
      additionalInfo: "WordPress.",
    },
    {
      title: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      image: "/img/espace-bien-etre.jpg",
      link: "https://example.com/project3",
      additionalInfo: "HTML/CSS.",
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
      <Container className="mt-5">
        <h1 className="text-center mb-0" style={{ marginBottom: "0px" }}>
          Portfolio
        </h1>
        <p className="text-center mt-0" style={{ marginTop: "0px" }}>
          Voici quelques-unes de mes réalisations.
        </p>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                additionalInfo={project.additionalInfo}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Realisations;
