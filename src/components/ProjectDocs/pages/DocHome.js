import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function DocHome() {
  return (
    <Container className="mt-4">
      <h1>Welcome to MDN Clone</h1>
      <p>Explore documentation on web technologies and JavaScript.</p>

      <Row className="g-3">
        <Col lg={4} md={6} sm={12} className="d-flex">
          <Card className="flex-grow-1">
            <Card.Body>
              <Card.Title>HTML</Card.Title>
              <Card.Text>Learn the building blocks of the web.</Card.Text>
              <a href="/docs/html" className="btn btn-primary">Go to HTML Docs</a>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12} className="d-flex">
          <Card className="flex-grow-1">
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>Style your websites effectively.</Card.Text>
              <a href="/docs/css" className="btn btn-primary mt-4">Go to CSS Docs</a>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12} className="d-flex">
          <Card className="flex-grow-1">
            <Card.Body>
              <Card.Title>JavaScript</Card.Title>
              <Card.Text>Learn how to make websites interactive.</Card.Text>
              <a href="/docs/javascript" className="btn btn-primary">Go to JavaScript Docs</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DocHome;
