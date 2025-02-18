import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import Breadcrumbs from '../Breadcrumbs.js'
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function Docs() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/data/docs.json");
        const data = await response.json();

        if (data[slug]) {          
          setTitle(data[slug].title);           
          setContent(data[slug].content);
          extractHeadings(data[slug].content);
          

        } else {
          setContent("Content not found.");
        }
      } catch (error) {
        console.error("Error fetching documentation:", error);
        setContent("Content not found.");
      }
    };

    fetchContent();
  }, [slug]);

  useEffect(() => {
    hljs.highlightAll();
  }, [content]);

  // Extract headings for "In This Article" section
  const extractHeadings = (content) => {
    const regex = /##+ (.*?)\n/g;
    const extractedHeadings = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      extractedHeadings.push(match[1]);
    }
    setHeadings(extractedHeadings);
  };

  return (
    <div>
      <Breadcrumbs />
      <Container fluid>
        <Row className="g-5">
          {/* Main Content (Independent Scroll) */}
          <Col lg={9} md={12} style={{ maxHeight: "80vh", overflowY: "auto", paddingRight: "20px" }} id="docs-content">
            <h1>{title}</h1>
            <ReactMarkdown
              components={{
                h2: ({ node, children }) => {
                  const id = children.toString().replace(/\s+/g, "-").toLowerCase();
                  return <h2 id={id}>{children}</h2>;
                },
                h3: ({ node, children }) => {
                  const id = children.toString().replace(/\s+/g, "-").toLowerCase();
                  return <h3 id={id}>{children}</h3>;
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </Col>

          {/* Sidebar - "In This Article" */}
          <Col lg={3} className="d-none d-lg-block">
            <div
              className="position-sticky"
              style={{
                top: "80px",
                maxHeight: "80vh",
                overflowY: "auto",
                padding: "10px",
                borderLeft: "1px solid #ddd",
              }}
            >
              <h5 className="font-weight-bold">In This Article</h5>
              <ListGroup>
                {headings.map((heading, index) => (
                  <ListGroup.Item key={index} className="border-0 p-1">
                    <a
                      href={`#${heading.replace(/\s+/g, "-").toLowerCase()}`}
                      className="text-decoration-none"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        const targetId = heading.replace(/\s+/g, "-").toLowerCase();
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                    >
                      {heading}
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Docs;
