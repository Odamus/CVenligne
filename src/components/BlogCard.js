import React from "react";
import { Card, Button } from "react-bootstrap";

const BlogCard = ({ title, description, image, link, footerDescription }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title
          as="h2"
          className="fs-2 text-left"
          style={{ fontWeight: "bold" }}
        >
          {title}
        </Card.Title>
        <Card.Text className="fs-2 text-left">{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" className="fs-2">
          Lire la suite
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

export default BlogCard;
