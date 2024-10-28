import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import OurCourses from "./Components/OurCourses/OurCourses";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter is imported here
import "./App.css";
import AboutUs from "./Pages/About/AboutUs";
import Home from "./Components/Home/Home";
import ContactUs from "./Pages/Contact/ContactUs";
import WebDesigning from "./Pages/WebDesigning/WebDesigning";
import DiplomaCourses from "./Pages/DiplomaCourses/DiplomaCourses";
import UnivercityCourse from "./Pages/UnivercityCourse/UnivercityCourse";
import ComputerCourse from "./Components/ComputerCourse/ComputerCourse";
import Gallery from "./Pages/Gallery/Gallery";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/our-courses" element={<OurCourses />} /> */}
          <Route path="/computer-courses" element={<ComputerCourse />} />
          <Route path="/our-courses/:id" element={<WebDesigning />} />
          <Route path="/our-courses/diploma-courses" element={<DiplomaCourses/>} />
          <Route path="/university-courses" element={<UnivercityCourse/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
