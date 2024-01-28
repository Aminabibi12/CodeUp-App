import React from 'react';
import Navbar from "./Navbar";

const AboutHeaderAndNavbar = () => {
  return (
    <>
      <div className="AboutHeaderAndNavbar-contaier"
        style={{
          backgroundImage: `url("https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg")`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
          height: '700px',
          marginBottom: "100px",
        }}
      >

        <div className="about-avbar">

        <Navbar />

        </div>

        

        <div className="aboutus-video" style={{ display: "flex", gap: "50px", marginLeft: "55px",marginTop:"100px" }}>

          <div className="abotUs-headig" style={{width:"550px"}}>

        

           <h2
            style={{
              fontFamily: "sans-serif",
              color: "white",
              fontSize: "2.3rem",
              letterSpacing: "2px",
              fontWeight: "500",
              textAlign: "center", 
              marginTop:"120px"
            }}
          >
         Explore More About Us!
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              color: "white",
              fontSize: "1.3rem",
              letterSpacing: ".5px",
              marginTop:"50px"
            }}
          >
         Uncover the essence of who we are and what drives us, as we share our journey and commitment to excellence.Explore our mission and values, dedicated to delivering exceptional educational environment. 
          </p>
         </div>
          
        <div className="aboutus-video">
          <video
            style={{
              width: "650px",
              height: "auto",
              display: "block",
              margin: "auto",
              marginTop: "50px",
              marginBottom: "100px",
              borderRadius:"10px"
            }}
            controls
            loop 
            autoPlay
          >
            <source src="https://v4.cdnpk.net/videvo_files/video/free/video0474/large_preview/_import_61f37fbe1a7438.79705979.mp4" type="video/mp4" />
           
          </video>

           </div>
         
        </div>

      </div>
    </>
  )
}

export default AboutHeaderAndNavbar;