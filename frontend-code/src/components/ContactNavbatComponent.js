import React from 'react';
import Navbar from './Navbar';

const ContactNavbatComponent = () => {
  return (
    <>
      <div className="ContactNavbatComponent"
      style={{ backgroundImage: `url("https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-hero-section-bg.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '750px',}}
      >

        <div>
        <Navbar />
        </div>

        <div className="contact-start"style={{ display: "flex", gap: "100px",marginLeft:"150px",marginTop:"150px" }}>


          <div className="text">

            <h1 style={{color:"white",fontSize: "3.3rem", fontWeight: "500", fontFamily: "sans-serif",textAlign:"center",marginTop:"100px"}}>
            Contact Us
            </h1>
            <p style={{color:"white",fontSize: "1.3rem",fontFamily: "sans-serif",textAlign:"center",width:"450px",letterSpacing:"0.5px"}}>
              We value your feedback and inquiries. Feel free to reach out to us .
            </p>
        
          </div>

          <div className="text-img">
          <img src="https://img.freepik.com/free-photo/conceptual-management-with-wooden-cubes-envelope_176474-10535.jpg?size=626&ext=jpg&ga=GA1.1.430224270.1704229904&semt=sph" alt=""style={{width:"650px", height:"400px", borderRadius:"10px"}} />
          </div>
       
        </div>



      </div>
    </>
  )
}

export default ContactNavbatComponent;