import React from 'react';
import AppSectionOneCode from "./components/AppSectionOneCode";
import AppSectionTwoCode from "./components/AppSectionTwoCode";
import AppSectionThreeCode from "./components/AppSectionThreeCode";
import AppSectionFourCode from "./components/AppSectionFourCode";
import AppSectionFiveCode from "./components/AppSectionFiveCode";
import MembershipComponent from "./components/MembershipComponent";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import "./components/App.css";


const App = () => {

  return (
    <div className="app">
   
      <AppSectionOneCode />
      <AppSectionTwoCode />
      <AppSectionThreeCode />
      <AppSectionFourCode />
      <AppSectionFiveCode />
      < MembershipComponent />
      <Footer />
      <CopyRight />
    </div>
  );
};


export default App;