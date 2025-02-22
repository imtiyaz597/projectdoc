// // import React, { useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { Container, Row, Col } from 'react-bootstrap';
// // import ProjectNavBar from '../ProjectNavbar';
// // import ProjectSidebar from '../ProjectSidebar';
// // import contentData from '../data/contentData';
// // import Content from './Content';
// // import useWindowSize from '../useWindowSize';

// // const Docs = () => {
// //   const { chapterId } = useParams();
// //   const navigate = useNavigate();
// //   const [showSidebar, setShowSidebar] = useState(false);
// //   const screenWidth = useWindowSize();
// //   const isMobile = screenWidth < 992;
// //   const selectedChapter = contentData.find((ch) => ch.id.toString() === chapterId);

// //   const toggleSidebar = () => setShowSidebar(!showSidebar);
// //   const selectChapter = (chapterId) => {
// //     navigate(`/docs/chapter/${chapterId}`);
// //     setShowSidebar(false);
// //   };

// //   return (
// //     <div>
// //       <ProjectNavBar toggleSidebar={toggleSidebar} />
// //       <Container fluid>
// //         <Row>
// //           {/* Sidebar always visible on desktop, offcanvas on mobile */}
// //           <ProjectSidebar
// //             show={showSidebar}
// //             handleClose={toggleSidebar}
// //             contentData={contentData}
// //             onSelectChapter={selectChapter}
// //           />
// //           {/* Main content - push content right when sidebar is fixed */}
// //           <Col lg={{ span: 9, offset: 3 }} md={8} className="p-4">
// //             <Content chapter={selectedChapter} />
// //           </Col>
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default Docs;


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectNavBar from "../ProjectNavbar";
// import ProjectSidebar from "../ProjectSidebar";
// import contentData from "../data/contentData";
// import Content from "./Content";
// import useWindowSize from "../useWindowSize";

// const Docs = () => {
//   const { chapterId } = useParams();
//   const navigate = useNavigate();
//   const [showSidebar, setShowSidebar] = useState(false);
//   const screenWidth = useWindowSize();
//   const isMobile = screenWidth < 992;

//   // Track selected chapter and section
//   const [selectedChapter, setSelectedChapter] = useState(
//     contentData.find((ch) => ch.id.toString() === chapterId) || null
//   );
//   const [selectedSection, setSelectedSection] = useState(null);

//   const toggleSidebar = () => setShowSidebar(!showSidebar);

//   // Handle chapter selection
//   const selectChapter = (chapterId) => {
//     const chapter = contentData.find((ch) => ch.id.toString() === chapterId);
//     setSelectedChapter(chapter);
//     setSelectedSection(null); // Reset section when switching chapters
//     navigate(`/docs/chapter/${chapterId}`);
//     setShowSidebar(false);
//   };

//   return (
//     <div>
//       <ProjectNavBar toggleSidebar={toggleSidebar} />
//       <Container fluid>
//         <Row>
//           {/* Sidebar always visible on desktop, collapsible on mobile */}
//           <ProjectSidebar
//             show={showSidebar}
//             handleClose={toggleSidebar}
//             contentData={contentData}
//             onSelectChapter={selectChapter}
//           />
          
//           {/* Main content - pushes right when sidebar is fixed */}
//           <Col lg={{ span: 9, offset: 3 }} md={8} className="p-4">
//             <Content
//               chapter={selectedChapter}
//               selectedSection={selectedSection}
//               onSelectSection={setSelectedSection}
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Docs;



import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectNavBar from "../ProjectNavbar";
import ProjectSidebar from "../ProjectSidebar";
import Content from "./Content";
import useWindowSize from "../useWindowSize";

// Function to dynamically import JSON data
const loadContentData = async () => {
  const files = [
    "Chapter1.js",
    "Chapter2.js",
    "Chapter3.js",
    "Chapter4.js",
    "Chapter5.js",
    "Chapter6.js",
    "Chapter7.js",
    "Chapter8.js",
    "Chapter9.js",
    "Chapter10.js",
  ];

  const allData = await Promise.all(
    files.map((file) =>
      import(`../data/${file}`).then((module) => module.default)
    )
  );

  return allData.flat(); // Combine all JSON file contents
};

const Docs = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 992;

  const [contentData, setContentData] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    loadContentData().then((data) => {
      setContentData(data);
      const chapter = data.find((ch) => ch.id?.toString() === chapterId );
      setSelectedChapter(chapter || "");
    });
  }, [chapterId]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const selectChapter = (chapterId) => {
    const chapter = contentData.find((ch) => ch.id.toString() === chapterId);
    setSelectedChapter(chapter);
    setSelectedSection(null);
    navigate(`/docs/${chapterId}`);
    setShowSidebar(false);
  };

  return (
    <div>
      <ProjectNavBar toggleSidebar={toggleSidebar} />
      <Container fluid>
        <Row className="vh-100">
          {/* Sidebar */}
          <ProjectSidebar
            show={showSidebar}
            handleClose={toggleSidebar}
            contentData={contentData}
            onSelectChapter={selectChapter}
          />

          {/* Main Content */}
          <Col lg={9} md={8} className="p-4 d-flex flex-column">
            <Content
              chapter={selectedChapter}
              selectedSection={selectedSection}
              onSelectSection={setSelectedSection}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Docs;
