import React from 'react';
import { useState } from 'react';

const MembershipComponent = () => {

  const [isHovered, setHovered] = useState(false);

  const navButtonStyle = {
    backgroundColor: isHovered ? 'white' : 'orange',
    marginTop: "20px",
    width: "200px",
    height: "40px",
    fontSize: "1rem",
    color: isHovered ? 'black' : 'white',
    borderRadius: "25px",
    transition: "background-color 0.3s, color 0.3s", 
    cursor: "pointer",
  };

  return (
    <>

      <div className="membership-container" style={{ backgroundImage: `url("https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-cta-section-bg.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',textAlign:"center", marginTop:"200px", paddingTop:"100px" }}>

        <h1 style={{fontFamily:"sans-serif",
    color: "white",
    fontSize: "3.3rem",
    letterSpacing: "2px",
          fontWeight: "500"
        }}>
     
        All Access Membership
        </h1>

        <p style={{fontFamily:"sans-serif",
    color: "white",
    fontSize: "1.2rem",
    letterSpacing: "1px",
         
        }}>
        Elevate your experience and Amplify your coding journey with exclusive resources and unparalleled support.
        </p>

        <button style={navButtonStyle}
          onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >Subscribe & Save
          </button>

      </div>
     
    </>
  )
}

export default MembershipComponent;