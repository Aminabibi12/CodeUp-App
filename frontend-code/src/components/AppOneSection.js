import React from 'react';
import { useState } from 'react';

export const AppOneSection = () => {

  const [isHovered, setHovered] = useState(false);

  const navButtonStyle = {
    backgroundColor: isHovered ? 'white' : 'orange',
    width: "150px",
    height: "40px",
    fontSize: "1rem",
    marginTop: "20px",
    
    color: isHovered ? 'black' : 'white',
    borderRadius: "25px",
    transition: "background-color 0.3s, color 0.3s", 
    cursor: "pointer",
    
  };


  const AppOneContainerStyle = {
    display: "flex",
    gap:"80px",
    marginTop: "150px",
    paddingRight: "100px",
    paddingLeft: "100px",
    marginLeft:"20px"
    
  };

  const AppOneTextStyle = {
    width: "500px",
    paddingBottom: "40px",
   
  };

  const AppOneHeadingStyle = {
    fontFamily:"sans-serif",
    color: "white",
    fontSize: "3.3rem",
    letterSpacing: "2px",
     fontWeight:"500"
    
  }; 


  const AppOneImageStyle = {
    width: "500px",
    
  };

  const AppOneParagraphStyle = {
    fontFamily:"sans-serif",
    color: "white",
    fontSize: "1.2rem",

  };

  return (
    <>
      <div className="appOne-container" style={AppOneContainerStyle}>

        <div className="appOne-text" style={AppOneTextStyle}>

          <h1 style={AppOneHeadingStyle}>
            Complete Python Masterclass for Web Development
          </h1>

          <p style={AppOneParagraphStyle}>
            Welcome to our Python course! In this course, you'll learn the fundamentals
            of Python programming, including syntax, data types, control structures,
            and more.Are you looking to enhance your Python skills?
            This course has something for everyone.
          </p>

           <button style={navButtonStyle}
          onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >Start Course
          </button>

        </div>

        <div className="appOne-image" style={AppOneImageStyle}>

         <video
          style={{
            width: "700px",
            height: "auto",
            display: "block",
            margin: "auto",
              marginTop: "20px",
            borderRadius:"10px"
          }}
          controls
          loop
          autoPlay // Add the autoPlay attribute for automatic playback
        >
          <source src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_preview/_import_61542e0a4b3c31.69469786.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        </div>

      </div>
    </>
  )
}

export default AppOneSection;