// // import React from 'react';
// // import { ListGroup, Card } from 'react-bootstrap';
// // import { Link } from 'react-scroll';

// // const InThisArticle = ({ sections }) => {
// //   return (
// //     <Card className="p-3">
// //       <Card.Title>In This Article</Card.Title>
// //       <ListGroup variant="flush">
// //         {sections.map((section) => (
// //           <ListGroup.Item key={section.id}>
// //             <Link to={section.id} smooth={true} duration={500}>
// //               {section.title}
// //             </Link>
// //           </ListGroup.Item>
// //         ))}
// //       </ListGroup>
// //     </Card>
// //   );
// // };

// // export default InThisArticle;



// import React from 'react';
// import { ListGroup, Card } from 'react-bootstrap';
// import { Link } from 'react-scroll';

// const InThisArticle = ({ sections }) => {
//   return (
//     <Card className="p-3">
//       <Card.Title>In This Article</Card.Title>
//       <ListGroup variant="flush">
//         {sections.map((section) => (
//           <ListGroup.Item key={section.id}>
//             <Link 
//               to={section.id} 
//               smooth={true} 
//               duration={500} 
//               containerId="content-scroll-container" // Targets the scrolling container
//               offset={-50} // Adjust based on navbar height
//             >
//               {section.title}
//             </Link>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </Card>
//   );
// };

// export default InThisArticle;



import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import { Link } from "react-scroll";

const InThisArticle = ({ sections }) => {
  return (
    <Card className="p-3">
      <Card.Title>In This Article</Card.Title>
      <ListGroup variant="flush">
        {sections.map((section) => (
          <ListGroup.Item key={section.id}>
            <Link
              to={section.id}
              smooth={true}
              duration={500}
              containerId="content-scroll-container"
              offset={-50}
            >
              {section.title}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default InThisArticle;

