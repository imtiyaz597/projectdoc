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
        <Col lg={3} md={4} className="border-end sidebar pt-6 d-flex flex-column vh-100">
          <ListGroup className="overflow-auto" style = {{fontWeight : "500"}}>
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
        <Offcanvas show={show} style = {{width : "80%"}} onHide={handleClose}>
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
