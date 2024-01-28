import React from 'react';
import Navbar from './Navbar';

const AllCoursesNavbar = () => {

  const AllCoursesbackgroundStyle = {
    backgroundImage: `url("https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px',
  };

  return (
    <div className="AllCoursesNavbar" style={AllCoursesbackgroundStyle}>
      <div className="all-courses-navbar">
        <Navbar />
      </div>

      <div className="all-courses-Heading"
        style={{ display: "flex",gap:"100px", marginLeft:"100px", marginTop: "100px" }}>

        <div className="allCourseText" style={{  }}>
          <h2 style={{
            fontSize: "3rem",
            fontFamily: "sans-serif",
            color: "white", textAlign: "center", fontWeight: "500", letterSpacing: "1px"
          }}>
            All Course
          </h2>
          <p style={{
            fontSize: "1.2rem",
            fontFamily: "sans-serif",
            color: "white", textAlign: "center", fontWeight: "500", letterSpacing: "0.5px", width: "500px"
          }}>
            Welcome to our collection of diverse and comprehensive courses designed to enhance your skills and knowledge. Whether you are a beginner or an experienced professional, we have something for everyone. Dive into the world of coding with our comprehensive course covering key concepts and tools.
          </p>
        </div>

        <div className="allCourseImg" style={{ width: "650px", height: "400px",borderRadius:"10px" }} >
          <img src="https://www.theschoolrun.com/sites/theschoolrun.com/files/article_images/what_is_a_programming_language.jpg" alt="courses" style={{ width: "650px", height: "400px", borderRadius: "10px" }} />
        </div>

      </div>
    </div>
  );
}

export default AllCoursesNavbar;
