import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  footerDescription,
}) => {
  return (
    <Card
      style={{ width: "100%" }}
      className="h-100 d-flex flex-column shadow-sm text-center"
    >
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="flex-grow-1 d-flex flex-column align-items-center justify-content-start">
        <Card.Title as="h2" className="fs-2 " style={{ fontWeight: "bold" }}>
          {title}
        </Card.Title>
        <Card.Text className="fs-6 fs-sm-5 fs-md-3">{description}</Card.Text>
        <div className="mt-auto">
          <Button
            variant="primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le projet
          </Button>
        </div>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: "#f0f0f2", padding: "10px" }}>
        <p style={{ margin: 0, fontSize: "1rem", color: "#555" }}>
          {footerDescription}
        </p>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
