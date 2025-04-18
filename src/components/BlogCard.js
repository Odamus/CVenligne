import React from "react";
import { Card, Button } from "react-bootstrap";
import "../components/BlogCard.css"; // on suppose que ce fichier existe

function BlogCard({ title, description, image, link, footerDescription }) {
  return (
    <Card className="h-100 d-flex flex-column blog-card shadow-sm">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="blog-card-title">{title}</Card.Title>
        <Card.Text className="blog-card-text flex-grow-1">
          {description}
        </Card.Text>
        <Button
          variant="outline-primary"
          href={link}
          className="mt-auto blog-card-btn"
        >
          Lire l'article
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{footerDescription}</Card.Footer>
    </Card>
  );
}

export default BlogCard;
