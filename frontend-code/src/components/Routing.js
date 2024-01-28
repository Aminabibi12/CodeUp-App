import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App'; 
import AllCoursesComponent from "./AllCoursesComponent";
import AboutComponent from './AboutComponent';
import ContactComponent from "./ContactComponent";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/allCourses" element={<AllCoursesComponent />} />
      <Route path="/about" element={<AboutComponent />} />
      <Route path="/contact" element={<ContactComponent />} />
    </Routes>
  );
};

export default Routing;
