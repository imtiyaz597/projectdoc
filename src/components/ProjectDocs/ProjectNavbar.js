import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      expanded={expanded} 
      onToggle={() => setExpanded(!expanded)}
      style={{ padding: "5px 5px", marginTop:"-20px"}} 
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="/docs" className="fs-5">MDN Clone</Navbar.Brand> {/* Smaller font */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/docs/html" onClick={() => setExpanded(false)}>
              HTML
            </Nav.Link>
            <Nav.Link as={Link} to="/docs/css" onClick={() => setExpanded(false)}>
              CSS
            </Nav.Link>
            <Nav.Link as={Link} to="/docs/javascript" onClick={() => setExpanded(false)}>
              JavaScript Basics
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/docs/node" onClick={() => setExpanded(false)}>
                Node.js
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/docs/react" onClick={() => setExpanded(false)}>
                React
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProjectNavbar;
