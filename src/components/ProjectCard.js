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
    <Card style={{ width: "100%" }} className="text-center">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title as="h2" className="fs-2 " style={{ fontWeight: "bold" }}>
          {title}
        </Card.Title>
        <Card.Text className="fs-6 fs-sm-5 fs-md-3">{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" className="fs-2">
          Voir
        </Button>
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
