
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '../App'; 

export const Routing = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
       

        {/* <Route path="/AllCourses" element={<AllCoursesComponent />} />
        <Route path="/About" element={<AboutComponent />} />
        <Route path="/Contact" element={<ContactComponent />} />
       */}
      </Routes>
    </BrowserRouter>
  );
};
