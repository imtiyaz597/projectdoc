import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// ProjectSidebar Component
function ProjectSidebar() {
  const [openWebTech, setOpenWebTech] = useState(false);
  const [openJavaScript, setOpenJavaScript] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="d-flex mt-3">
      {/* Include the Navbar */}
    

      {/* Sidebar */}
      <nav
        className={`bg-light   mt-7  p-3 d-lg-block ${showSidebar ? "d-block  top-0 start-0 vh-100 shadow" : "d-none"}`}
        id="sidebar"
        style={{
          width: "250px",
          height: "100vh",
          // zIndex: 1050, // Ensures the sidebar stays on top
        }}
      >
        <h2 className="mb-4">Documentation</h2>
        <ul className="list-unstyled">
          <li>
            <strong className="d-block" onClick={() => setOpenWebTech(!openWebTech)} style={{ cursor: "pointer" }}>
              Web Technologies
            </strong>
            <Collapse in={openWebTech}>
              <ul className="ps-3">
                <li>
                  <Link to="/docs/html" className="text-decoration-none text-black d-block py-1">
                    HTML
                  </Link>
                </li>
                <li>
                  <Link to="/docs/css" className="text-decoration-none text-black d-block py-1">
                    CSS
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <strong className="d-block" onClick={() => setOpenJavaScript(!openJavaScript)} style={{ cursor: "pointer" }}>
              JavaScript
            </strong>
            <Collapse in={openJavaScript}>
              <ul className="ps-3">
                <li>
                  <Link to="/docs/javascript" className="text-decoration-none text-black d-block py-1">
                    JavaScript Basics
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-3">
        {/* Mobile Navbar with Hamburger Icon */}
        <nav className="navbar navbar-expand-lg navbar-light d-lg-none position-fixed top-0 start-0 w-100 bg-light">
          <Button
            className="navbar-toggler"
            style={{
              zIndex: 1051, // Ensure it's above other content
              width: "50px",
              height: "50px",
              fontSize: "24px",
              borderRadius: "50%",
              marginTop: "15px", // Moves it below header if needed
            }}
            type="button"
            onClick={() => setShowSidebar(!showSidebar)}
            aria-controls="sidebar"
            aria-expanded={showSidebar}
            aria-label="Toggle navigation"
          >
            ☰
          </Button>
        </nav>

        {/* Rest of the content (Docs content etc.) */}
      </div>
    </div>
  );
}


export default ProjectSidebar;
