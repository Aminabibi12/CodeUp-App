import React from 'react';
import AboutHeaderAndNavbar from "./AboutHeaderAndNavbar";
import AboutUsTextComponent from "./AboutUsTextComponent";
import IsntructorsComponent from "./IsntructorsComponent";
import CounterHeading from "./CounterHeading";
import CounterComponent from "./CounterComponent";
import MembershipComponent from "./MembershipComponent";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

const AboutComponent = () => {
  return (
    <>
      <div className="AboutComponent-Container" style={{ height: "100%", overflowY: "auto" }}>

        <AboutHeaderAndNavbar />
        <AboutUsTextComponent />
        <IsntructorsComponent />
        <CounterHeading />
        <CounterComponent />
        <MembershipComponent />
        <Footer />
        <CopyRight />

      </div>
    </>
  )
}

export default AboutComponent;