// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Element } from "react-scroll";
// import ReactMarkdown from "react-markdown";
// import InThisArticle from "../inThisArticle";

// const Content = ({ chapter }) => {
//   if (!chapter) return <h3 className="text-center">Select a chapter</h3>;

//   return (
//     <Container fluid className="mt-4">
//       <Row>
//         {/* Content Section */}
//         <Col md={9} className="overflow-hidden">
//           <h2>{chapter.title}</h2>
//           {chapter.sections.map((section) => (
//             <Element key={section.id} name={section.id} className="mb-4">
//               <Card className="p-3">
//                 <Card.Body>
//                   <Card.Title>{section.title}</Card.Title>

//                   {/* Render All Text Fields with Markdown */}
//                   {Object.entries(section).map(([key, value]) => {
//                     if (["id", "title", "image"].includes(key) || !value) return null;

//                     return (
//                       <div
//                         key={key}
//                         className="markdown-content"
//                         style={{
//                           whiteSpace: "pre-wrap",
//                           wordBreak: "break-word",
//                           overflowWrap: "break-word",
//                           maxWidth: "100%",
//                           marginTop: key === "content" ? 0 : "10px",
//                         }}
//                       >
//                         <strong>{key !== "content" && `${key.replace(/_/g, " ")}:`}</strong>
//                         <ReactMarkdown>{value}</ReactMarkdown>
//                       </div>
//                     );
//                   })}

//                   {/* Image Handling */}
//                   {section.image && (
//                     <img
//                       src={section.image}
//                       alt={section.title}
//                       style={{
//                         maxWidth: "100%",
//                         height: "auto",
//                         marginTop: "10px",
//                         display: "block",
//                         objectFit: "contain",
//                         overflow: "hidden", // Prevents image overflow
//                       }}
//                     />
//                   )}
//                 </Card.Body>
//               </Card>
//             </Element>
//           ))}
//         </Col>

//         {/* Sidebar Section */}
//         <Col md={3} className="d-none d-md-block">
//           <InThisArticle sections={chapter.sections} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Content;

// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Element } from "react-scroll";
// import ReactMarkdown from "react-markdown";
// import InThisArticle from "../inThisArticle";

// const NAVBAR_HEIGHT = 56; // Adjust this based on your navbar height

// const Content = ({ chapter }) => {
//   if (!chapter) return <h3 className="text-center">Select a chapter</h3>;

//   return (
//     <Container fluid className="mt-4">
//       <Row>
//         {/* Content Section with Separate Scrollbar */}
//         <Col
//           md={9}
//           className="content-scroll"
//           style={{
           
//             height: `calc(100vh - ${NAVBAR_HEIGHT + 20}px)`, // Set max height
//             overflowY: "auto", // Enable scrolling
//             paddingRight: "15px", // Prevent scrollbar overlapping content
//           }}
//         >
//           <h2>{chapter.title}</h2>
//           {chapter.sections.map((section) => (
//             <Element key={section.id} name={section.id} className="mb-4">
//               <Card className="p-3">
//                 <Card.Body>
//                   <Card.Title>{section.title}</Card.Title>

//                   {/* Render All Text Fields with Markdown */}
//                   {Object.entries(section).map(([key, value]) => {
//                     if (["id", "title", "image"].includes(key) || !value) return null;

//                     return (
//                       <div
//                         key={key}
//                         className="markdown-content"
//                         style={{
//                           whiteSpace: "pre-wrap",
//                           wordBreak: "break-word",
//                           overflowWrap: "break-word",
//                           maxWidth: "100%",
//                           marginTop: key === "content" ? 0 : "10px",
//                         }}
//                       >
//                         <strong>{key !== "content" && `${key.replace(/_/g, " ")}:`}</strong>
//                         <ReactMarkdown>{value}</ReactMarkdown>
//                       </div>
//                     );
//                   })}

//                   {/* Image Handling */}
//                   {section.image && (
//                     <img
//                       src={section.image}
//                       alt={section.title}
//                       style={{
//                         maxWidth: "100%",
//                         height: "auto",
//                         marginTop: "10px",
//                         display: "block",
//                         objectFit: "contain",
//                         overflow: "hidden", // Prevents image overflow
//                       }}
//                     />
//                   )}
//                 </Card.Body>
//               </Card>
//             </Element>
//           ))}
//         </Col>

//         {/* Sidebar Section */}
//         <Col md={3} className="d-none d-md-block">
//           <InThisArticle sections={chapter.sections} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Content;

// import React from "react";
// import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
// import { Element } from "react-scroll";
// import ReactMarkdown from "react-markdown";
// import InThisArticle from "../inThisArticle";

// const NAVBAR_HEIGHT = 56; // Adjust this based on your navbar height

// const Content = ({ chapter, selectedSection, onSelectSection }) => {
//   if (!chapter) return <h3 className="text-center">Select a chapter</h3>;

//   return (
//     <Container fluid className="mt-4">
//       <Row>
//         {/* Content Section with Separate Scrollbar */}
//         <Col
//   md={9}
//   id="content-scroll-container" // Add this ID
//   className="content-scroll"
//   style={{
//     height: `calc(100vh - ${NAVBAR_HEIGHT + 20}px)`,
//     overflowY: "auto",
//     paddingRight: "15px",
//   }}
// >

//           {/* Breadcrumb Navigation */}
//           <Breadcrumb>
//             <Breadcrumb.Item onClick={() => onSelectSection(null)} style={{ cursor: "pointer" }}>
//               {chapter.title}
//             </Breadcrumb.Item>
//             {selectedSection && <Breadcrumb.Item active>{selectedSection.title}</Breadcrumb.Item>}
//           </Breadcrumb>

//           <h2>{chapter.title}</h2>
//           {chapter.sections.map((section) => (
//             <Element key={section.id} name={section.id} className="mb-4">
//               <Card className="p-3" onClick={() => onSelectSection(section)}>
//                 <Card.Body>
//                   <Card.Title>{section.title}</Card.Title>

//                   {/* Render All Text Fields with Markdown */}
//                   {Object.entries(section).map(([key, value]) => {
//                     if (["id", "title", "image"].includes(key) || !value) return null;

//                     return (
//                       <div
//                         key={key}
//                         className="markdown-content"
//                         style={{
//                           whiteSpace: "pre-wrap",
//                           wordBreak: "break-word",
//                           overflowWrap: "break-word",
//                           maxWidth: "100%",
//                           marginTop: key === "content" ? 0 : "10px",
//                         }}
//                       >
//                         <strong>{key !== "content" && `${key.replace(/_/g, " ")}:`}</strong>
//                         <ReactMarkdown>{value}</ReactMarkdown>
//                       </div>
//                     );
//                   })}

//                   {/* Image Handling */}
//                   {section.image && (
//                     <img
//                       src={section.image}
//                       alt={section.title}
//                       style={{
//                         maxWidth: "100%",
//                         height: "auto",
//                         marginTop: "10px",
//                         display: "block",
//                         objectFit: "contain",
//                         overflow: "hidden", // Prevents image overflow
//                       }}
//                     />
//                   )}
//                 </Card.Body>
//               </Card>
//             </Element>
//           ))}
//         </Col>

//         {/* Sidebar Section */}
//         <Col md={3} className="d-none d-md-block">
//           <InThisArticle sections={chapter.sections} onSelectSection={onSelectSection} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Content;


import React from "react";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Element } from "react-scroll";
import ReactMarkdown from "react-markdown";
import InThisArticle from "../inThisArticle";

const NAVBAR_HEIGHT = 56; // Adjust this based on your navbar height

const Content = ({ chapter, selectedSection, onSelectSection }) => {
  if (!chapter) return <h3 className="text-center mt-4">Select a chapter</h3>;

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Content Section with Separate Scrollbar */}
        <Col
          md={9}
          id="content-scroll-container" // Add this ID
          className="content-scroll"
          style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT + 40}px)`, // Added more space for top gap
            overflowY: "auto",
            padding: "20px 15px", // Added padding for top and sides
          }}
        >
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item onClick={() => onSelectSection(null)} style={{ cursor: "pointer" }}>
              {chapter.title}
            </Breadcrumb.Item>
            {selectedSection && <Breadcrumb.Item active>{selectedSection.title}</Breadcrumb.Item>}
          </Breadcrumb>

          {/* Main Content Heading */}
          <h2 className="mb-4">{chapter.title}</h2>

          {chapter.sections.map((section) => (
            <Element key={section.id} name={section.id} className="mb-4">
              <Card className="p-3">
                <Card.Body onClick={() => onSelectSection(section)}>
                  <Card.Title>{section.title}</Card.Title>

                  {/* Render All Text Fields with Markdown */}
                  {Object.entries(section).map(([key, value]) => {
                    if (["id", "title", "image"].includes(key) || !value) return null;

                    return (
                      <div
                        key={key}
                        className="markdown-content"
                        style={{
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                          maxWidth: "100%",
                          marginTop: key === "content" ? 0 : "10px",
                        }}
                      >
                        <strong>{key !== "content" && `${key.replace(/_/g, " ")}:`}</strong>
                        <ReactMarkdown>{value}</ReactMarkdown>
                      </div>
                    );
                  })}

                  {/* Image Handling */}
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.title}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        marginTop: "10px",
                        display: "block",
                        objectFit: "contain",
                        overflow: "hidden", // Prevents image overflow
                      }}
                    />
                  )}
                </Card.Body>
              </Card>
            </Element>
          ))}
        </Col>

        {/* Sidebar Section */}
        <Col md={3} className="d-none d-md-block">
          <InThisArticle sections={chapter.sections} onSelectSection={onSelectSection} />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
