import React from 'react';
import TestimoialHeading from "./TestimoialHeading";
import TestimonialsCards from "./TestimonialsCards";

const AppSectionFiveCode = () => {
  return (
    <>
      <div className="AppSectionFiveCodeContainer" style={{marginTop:"200px"}}>

        <div className="testimonials">
        <TestimoialHeading />
        </div>

        <div className="testimoialscardsDiv">
        <TestimonialsCards />
        </div>

      </div>
    </>
  )
}

export default AppSectionFiveCode;