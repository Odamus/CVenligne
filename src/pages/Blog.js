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
      image: "/img/croissance.jpg",
      title: "Vendre ses produits sur le web",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "https://example.com/project2",
      footerDescription: "Publié le 20 août 2022",
    },
    {
      image: "/img/google.jpg",
      title: "Se positionner sur Google",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "https://example.com/project3",
      footerDescription: "Publié le 1 août 2022",
    },
    {
      image: "/img/screens.jpg",
      title: "Coder en responsive design",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "https://example.com/project4",
      footerDescription: "Publié le 31 juillet 2022",
    },
    {
      image: "/img/seo.jpg",
      title: "Techniques de référencement",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "https://example.com/project5",
      footerDescription: "Publié le 30 juillet 2022",
    },
    {
      image: "/img/technos.png",
      title: "Apprendre à coder",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "https://example.com/project6",
      footerDescription: "Publié le 12 juillet 2022",
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
          Blog
        </h1>
        <p
          className="text-center mt-0 blog-subtitle"
          style={{ marginTop: "0px", fontSize: 25 }}
        >
          Retrouvez ici quelques articles sur le développement web.
        </p>
        <DropdownDivider className="divider" style={{ width: "400px" }} />
        <Row>
          {blogs.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex">
              <div className="w-100 h-100 d-flex">
                <BlogCard
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

export default Blog;
