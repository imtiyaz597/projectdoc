// import React from 'react';
// import { ListGroup, Offcanvas, Col } from 'react-bootstrap';
// import useWindowSize from './useWindowSize'; // Custom hook to detect screen size

// const NAVBAR_HEIGHT = 56; // Adjust based on actual navbar height

// const ProjectSidebar = ({ show, handleClose, contentData, onSelectChapter }) => {
//   const screenWidth = useWindowSize(); // Get current screen width
//   const isMobile = screenWidth < 992; // Bootstrap 'lg' breakpoint (992px)

//   return (
//     <>
//       {/* Always visible on desktop, positioned below navbar */}
//       {!isMobile ? (
//         <Col
//           lg={3} md={4}
//           className="border-end sidebar"
//           style={{ 
//             padding: "10px",
//             height: `calc(100vh - ${NAVBAR_HEIGHT + 10}px)`, // Adjust height
//             overflowY: 'auto',
//             position: 'fixed',
//             top: NAVBAR_HEIGHT + 140, // Push below navbar with padding
//             left: 0,
//             width: '25%', // Sidebar width
//             backgroundColor: '#f8f9fa' // Light gray background
//           }}
//         >
//           <h5>Chapters</h5>
//           <ListGroup>
//             {contentData.map((chapter) => (
//               <ListGroup.Item
//                 key={chapter.id}
//                 action
//                 onClick={() => {
//                   onSelectChapter(chapter.id); // Select chapter
//                   setTimeout(() => {
//                     if (typeof window !== "undefined") {
//                       window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling
//                     }
//                   }, 0);
//                 }}
//               >
//                 {chapter.title}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//       ) : (
//         // Offcanvas (collapsible) on mobile
//         <Offcanvas show={show} onHide={handleClose} backdrop="true">
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Chapters</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <ListGroup>
//               {contentData.map((chapter) => (
//                 <ListGroup.Item
//                   key={chapter.id}
//                   action
//                   onClick={() => {
//                     onSelectChapter(chapter.id);
//                     setTimeout(() => {
//                       if (typeof window !== "undefined") {
//                         window.scrollTo({ top: 0, behavior: "smooth" });
//                       }
//                     }, 0);
//                   }}
//                 >
//                   {chapter.title}
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Offcanvas.Body>
//         </Offcanvas>
//       )}
//     </>
//   );
// };

// export default ProjectSidebar;


// import React, { useState } from "react";
// import { ListGroup, Offcanvas, Col } from "react-bootstrap";
// import useWindowSize from "./useWindowSize"; // Custom hook to detect screen size

// const NAVBAR_HEIGHT = 56; // Adjust based on actual navbar height

// const ProjectSidebar = ({ show, handleClose, contentData, onSelectChapter }) => {
//   const screenWidth = useWindowSize(); // Get current screen width
//   const isMobile = screenWidth < 992; // Bootstrap 'lg' breakpoint (992px)

//   const [selectedChapter, setSelectedChapter] = useState(null);

//   const handleChapterClick = (chapter) => {
//     setSelectedChapter(chapter);
//     onSelectChapter(chapter.id);
//     setTimeout(() => {
//       if (typeof window !== "undefined") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     }, 0);
//   };

//   return (
//     <>
//       {!isMobile ? (
//         <Col
//           lg={3}
//           md={4}
//           className="border-end sidebar"
//           style={{
//             padding: "10px",
//             height: `calc(100vh - ${NAVBAR_HEIGHT + 10}px)`,
//             overflowY: "auto",
//             position: "fixed",
//             top: NAVBAR_HEIGHT + 140,
//             left: 0,
//             width: "25%",
//             backgroundColor: "#f8f9fa",
//           }}
//         >
//           <h5>Chapters</h5>
//           <ListGroup>
//             {contentData.map((chapter) => (
//               <ListGroup.Item
//                 key={chapter.id}
//                 action
//                 active={selectedChapter?.id === chapter.id}
//                 onClick={() => handleChapterClick(chapter)}
//               >
//                 {chapter.title}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//       ) : (
//         <Offcanvas show={show} onHide={handleClose} backdrop="true">
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Chapters</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <ListGroup>
//               {contentData.map((chapter) => (
//                 <ListGroup.Item
//                   key={chapter.id}
//                   action
//                   active={selectedChapter?.id === chapter.id}
//                   onClick={() => handleChapterClick(chapter)}
//                 >
//                   {chapter.title}
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Offcanvas.Body>
//         </Offcanvas>
//       )}
//     </>
//   );
// };

// export default ProjectSidebar;


import React, { useState } from "react";
import { ListGroup, Offcanvas, Col } from "react-bootstrap";
import useWindowSize from "./useWindowSize";

const ProjectSidebar = ({ show, handleClose, contentData, onSelectChapter }) => {
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 992;

  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
    onSelectChapter(chapter.id);
  };

  return (
    <>
      {!isMobile ? (
        <Col lg={3} md={4} className="border-end sidebar pt-12 d-flex flex-column vh-100">
          <ListGroup className="overflow-auto">
            {contentData.map((chapter) => (
              <ListGroup.Item
                key={chapter.id}
                action
                active={selectedChapter?.id === chapter.id}
                onClick={() => handleChapterClick(chapter)}
              >
                {chapter.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      ) : (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Body>
            <ListGroup>
              {contentData.map((chapter) => (
                <ListGroup.Item
                  key={chapter.id}
                  action
                  onClick={() => handleChapterClick(chapter)}
                >
                  {chapter.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default ProjectSidebar;
