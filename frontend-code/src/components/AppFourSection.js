import React from 'react';
import {useState} from 'react';
const AppFourSection = () => {

  const AppFourSectionContainerStyle = {
    display: "flex",
    gap: "100px",
    marginBottom: "80px",
    marginTop: "200px",
  };

  const [isHovered, setHovered] = useState(false);

  const navButtonStyle = {
    backgroundColor: isHovered ? 'white' : 'orange',
    marginTop: "20px",
    width: "150px",
    height: "40px",
    fontSize: "1rem",
    color: isHovered ? 'black' : 'white',
    borderRadius: "25px",
    transition: "background-color 0.3s, color 0.3s", 
    cursor: "pointer",
  };



  return (
    <>
      <div className="AppFourSectionContainer" style={AppFourSectionContainerStyle}>

        <div className="sectionFour-image" style={{ width: "550px", height: "auto", marginLeft:"100px" }}>

          <img src="https://img.freepik.com/free-photo/people-generating-images-using-artificial-intelligence-laptop_23-2150794314.jpg?w=1480&t=st=1706047854~exp=1706048454~hmac=f616fe380d038e0aaee173c3565cbe9148a5cbefb206412aefd045834885f773" alt=""
            style={{
              width: "550px",
              height: "auto",
              display: "block",
              margin: "auto",
              marginTop: "40px",
              marginBottom: "100px",
              borderRadius:"10px"
            }}
           />

        </div>

        <div className="sectionFour-text" style={{ width: "550px", height: "400px" }}>

        <h2 style={{fontFamily: "sans-serif", fontSize: "3rem", fontWeight:"500"
          }}>
            Getting Started With Python 3 for Beginner
          </h2>

       <p style={{ fontFamily: "sans-serif", letterSpacing: "1px",  fontSize: "1.2rem" }}>
            Learn Python Like a Pro. From The Basics All The Way to Creating your own Apps and Games!.This Python For Beginners Course Teaches You The Python Language Fast. Start your coding journey with Python courses and tutorials. From basic to advanced projects, grow your Python skills at CodeUp.
          </p>

          <button style={navButtonStyle}
          onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >View Course
          </button>

        </div>

      </div>
    </>
  )
}

export default AppFourSection;