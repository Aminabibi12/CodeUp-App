import React from 'react';
import AllCoursesNavbar from "./AllCoursesNavbar";
import AllCoursesCards from "./AllCoursesCards";
import AppFourSection from "./AppFourSection";
import MembershipComponent from "./MembershipComponent";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

const AllCoursesComponent = () => {
  return (
    <>
      <div className="courses-component" style={{ height: "100%", overflowY: "auto" }}>

        <AllCoursesNavbar />
        <AllCoursesCards />
        <AppFourSection />
         <MembershipComponent />
        <Footer />
        <CopyRight />
      

      </div>
    </>
  )
}

export default AllCoursesComponent;