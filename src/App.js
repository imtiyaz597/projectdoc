// import 'bootstrap/dist/css/bootstrap.min.css';

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Banner from "./components/Banner";
// import Benefit from "./components/Benefit";
// import Preparation from "./components/Preparation";
// import Whychooseus from "./components/Whychooseus";
// import Trainer from "./components/Trainer";
// import Testimonial from "./components/Testimonial";
// import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";
// import Training from "./components/Training"; // Training page
// import MockExam from "./components/MockExam"; // Mock exam page
// import About from "./components/About"; // About us page

// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Contactus from "./components/Contactus";
// import PrivacyPolicy from "./components/Privacy Policy";
// import TermsAndConditions from "./components/TermsAndConditions";
// import RefundPolicy from "./components/Refund Policy"; 
// import JoinNowForm from './components/Joinnow';
// import WhatsAppChat from "./components/Whatsappchat"; // WhatsApp Chat component
// import FlashMain from "./FlashcardApp/FlashMain";



// import PMPExamPrep from './components/Services/TrainingServices/PMPExamPrep';
// import Workshop from './components/Services/Workshop/Workshop';
// import ManagingRisk from './components/Services/Workshop/ManagingRisk';
// import AgileApproach from './components/Services/Workshop/AgileApproach';
// import Traditional from './components/Services/Workshop/Traditional';
// import CareerDevelopment from './components/Services/CareerDevelopment/CareerDevelopment';
// import Resume from './components/Services/CareerDevelopment/Resume';
// import Interview from './components/Services/CareerDevelopment/Interview';
// import TrainingServices from './components/Services/TrainingServices/TrainingServices';
// import ProjectFoundation from './components/Services/TrainingServices/ProjectFoundation';
// import DocHome from './components/ProjectDocs/pages/DocHome';
// import Docs from './components/ProjectDocs/pages/Docs';
// import ProjectSidebar from './components/ProjectDocs/ProjectSidebar';
// import ProjectNavbar from './components/ProjectDocs/ProjectNavbar';



// function App() {
  
//   return (
//     <div className="App">
    

//       <BrowserRouter>
//         {/* Navbar will be visible on all pages */}
//         <Navbar />

//         {/* Routes for all pages */}
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <Banner />
//                 <Benefit />
//                 <Preparation />
//                 <Whychooseus />
//                 <Trainer />
//                 <Testimonial />
//                 <FAQ />
//                 <Contact />
//                 <Footer />
//               </>
//             }
//           />

//           {/* Individual Pages */}
//           <Route path="/training" element={<Training />} /> 
//           <Route path="/mock-exam" element={<MockExam />} />
          
//           <Route path="/flashcards" element={<FlashMain />} />
        
//           {/* <Route path="/flashcards" element={<FlashMain />} /> */}
//         <Route path="/agile" element={<FlashMain />} />
//         <Route path="/domain" element={<FlashMain />} />
//         <Route path="/process-groups" element={<FlashMain />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contactus />} />
//           {/* <Route path = '/services' element={<Services/>} /> */}
//           <Route path="/training-services" element={<TrainingServices/>} />
//         <Route path="/project-foundation" element={<ProjectFoundation/>} />
//         <Route path="/pmp-exam-prep" element={<PMPExamPrep />} />

//         <Route path="/workshop" element={<Workshop />} />
//         <Route path="/workshop/managing-risk" element={<ManagingRisk />} />
//         <Route path="/workshop/agile-approach" element={<AgileApproach />} />
//         <Route path="/workshop/traditional" element={<Traditional />} />

//         <Route path="/career-development" element={<CareerDevelopment />} />
//         <Route path="/career-development/resume" element={<Resume />} />
//         <Route path="/career-development/interview" element={<Interview />} />
        
//           <Route path="/login" element={<Login />} />
//           <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
//           <Route path="/termsandconditions" element={<TermsAndConditions />} />
//           <Route path="/refundpolicy" element={<RefundPolicy />} />
//           <Route path="/join-us" element={<JoinNowForm />} /> 


//           <Route
//         path="/docs"
//         element={
//           <>
//             <ProjectNavbar />
//             <div style={{ display: "flex", width: "100%" }}>
//               <ProjectSidebar />
//               <div style={{ flexGrow: 1, padding: "20px" }}>
//                 <DocHome />
//               </div>
//             </div>
//           </>
//         }
//       />

//       {/* Individual Chapter Pages */}
//       <Route
//         path="/docs/:slug"
//         element={
//           <>
//             <ProjectNavbar />
//             <div style={{ display: "flex", width: "100%" }}>
//               <ProjectSidebar />
//               <div style={{ flexGrow: 1, padding: "20px" }}>
//                 <Docs />
//               </div>
//             </div>
//           </>
//         }
//       />

//           {/* Catch-All Redirect */}
//           <Route path="*" element={<Hero />} /> {/* Invalid route goes to home */}
//         </Routes>

//         {/* WhatsApp Chat Button */}
//         <WhatsAppChat />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Benefit from "./components/Benefit";
import Preparation from "./components/Preparation";
import Whychooseus from "./components/Whychooseus";
import Trainer from "./components/Trainer";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Training from "./components/Training"; 
import MockExam from "./components/MockExam"; 
import About from "./components/About"; 
import Footer from "./components/Footer";
import Login from "./components/Login";
import Contactus from "./components/Contactus";
import PrivacyPolicy from "./components/Privacy Policy";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/Refund Policy"; 
import JoinNowForm from "./components/Joinnow";
import WhatsAppChat from "./components/Whatsappchat"; 
import FlashMain from "./FlashcardApp/FlashMain";
import PMPExamPrep from "./components/Services/TrainingServices/PMPExamPrep";
import Workshop from "./components/Services/Workshop/Workshop";
import ManagingRisk from "./components/Services/Workshop/ManagingRisk";
import AgileApproach from "./components/Services/Workshop/AgileApproach";
import Traditional from "./components/Services/Workshop/Traditional";
import CareerDevelopment from "./components/Services/CareerDevelopment/CareerDevelopment";
import Resume from "./components/Services/CareerDevelopment/Resume";
import Interview from "./components/Services/CareerDevelopment/Interview";
import TrainingServices from "./components/Services/TrainingServices/TrainingServices";
import ProjectFoundation from "./components/Services/TrainingServices/ProjectFoundation";

import ProjectNavbar from "./components/ProjectDocs/ProjectNavbar";
import Docs from "./components/ProjectDocs/pages/Docs";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Routes for all pages */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banner />
                <Benefit />
                <Preparation />
                <Whychooseus />
                <Trainer />
                <Testimonial />
                <FAQ />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Individual Pages */}
          <Route path="/training" element={<Training />} /> 
          <Route path="/mock-exam" element={<MockExam />} />
          <Route path="/flashcards" element={<FlashMain />} />
          <Route path="/agile" element={<FlashMain />} />
          <Route path="/domain" element={<FlashMain />} />
          <Route path="/process-groups" element={<FlashMain />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/training-services" element={<TrainingServices />} />
          <Route path="/project-foundation" element={<ProjectFoundation />} />
          <Route path="/pmp-exam-prep" element={<PMPExamPrep />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/managing-risk" element={<ManagingRisk />} />
          <Route path="/workshop/agile-approach" element={<AgileApproach />} />
          <Route path="/workshop/traditional" element={<Traditional />} />
          <Route path="/career-development" element={<CareerDevelopment />} />
          <Route path="/career-development/resume" element={<Resume />} />
          <Route path="/career-development/interview" element={<Interview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/join-us" element={<JoinNowForm />} />

          {/* Documentation Pages */}
          <Route path="/docs" element={<Navigate to="/docs/:chapterId" />} />
          <Route
            path="/docs/:chapterId"
            element={
              <>
                {/* <ProjectNavbar /> */}
                <Docs />
              </>
            }
          />

          {/* Catch-All Redirect */}
          <Route path="*" element={<Hero />} />
        </Routes>

        {/* WhatsApp Chat Button */}
        <WhatsAppChat />
      </Router>
    </div>
  );
}

export default App;
