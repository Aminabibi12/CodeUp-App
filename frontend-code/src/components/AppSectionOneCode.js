import React from 'react';
import Navbar from "./Navbar";
import AppOneSection from "./AppOneSection";


const AppSectionOneCode = () => {


const AppOnebackgroundStyle = {
    backgroundImage: `url("https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '750px',
    width:"100%"
  };

  return (
    <>
      <div className="appSection-one" style={AppOnebackgroundStyle}>
        <Navbar />
        <AppOneSection />
      </div>
    </>
  )
}

export default AppSectionOneCode;