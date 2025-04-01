import React from "react";
import { Container, Row, Col, DropdownDivider } from "react-bootstrap";
import BlogCard from "../components/BlogCard";

function Blog() {
  const blogs = [
    {
      image: "/img/coder.jpg",
      title: "Coder son site en HTML/CSS",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "https://example.com/project1",
      footerDescription: "Publié le 22 août 2022",
    },
    {
      image: "/img/fresh-food.jpg",
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      link: "https://example.com/project1",
      footerDescription: "Site réalisé avec PHP et MySQL",
    },
    {
      image: "/img/fresh-food.jpg",
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      link: "https://example.com/project1",
      footerDescription: "Site réalisé avec PHP et MySQL",
    },
    {
      image: "/img/fresh-food.jpg",
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      link: "https://example.com/project1",
      footerDescription: "Site réalisé avec PHP et MySQL",
    },
    {
      image: "/img/fresh-food.jpg",
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      link: "https://example.com/project1",
      footerDescription: "Site réalisé avec PHP et MySQL",
    },
    {
      image: "/img/fresh-food.jpg",
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      link: "https://example.com/project1",
      footerDescription: "Site réalisé avec PHP et MySQL",
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
        <DropdownDivider className="divider" style={{ width: "400px" }} />
        <Row>
          {blogs.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <BlogCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                footerDescription={project.footerDescription}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
