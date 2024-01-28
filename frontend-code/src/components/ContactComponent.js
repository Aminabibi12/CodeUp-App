import React from 'react';
import ContactNavbatComponent from './ContactNavbatComponent';
import ContactForm  from './ContactForm';
import MembershipComponent from './MembershipComponent';
import Footer from './Footer';
import CopyRight from './CopyRight';

const ContactComponent = () => {
  return (
    <>
      <div style={{ height: "100%", overflowY: "auto" }}>

        <ContactNavbatComponent />
        <ContactForm />
        <MembershipComponent />
        <Footer />
        <CopyRight />

      </div>
    </>
  )
}

export default ContactComponent;