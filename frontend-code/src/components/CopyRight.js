import React from 'react';

const CopyRight = () => {
  return (
    <div className="footer-end" style={footerEndStyle}>
      {copyrightLinks.map((link, index) => (
        <p key={index} style={linkStyle}>
          {link.text}
        </p>
      ))}
    </div>
  );
};

const footerEndStyle = {
  backgroundColor: 'black',
  height: '80px',
  borderTop: '.5px solid white',
  color: 'white',
  display: 'flex',
  gap: '50px',
  paddingLeft: '500px',
  paddingTop: '50px',
  fontFamily: 'sans-serif',
};

const linkStyle = {
  fontSize: '.9rem',
};

const copyrightLinks = [
  { text: 'All rights reserved by CodeUp.' },
  { text: 'Privacy' },
  { text: 'Security' },
  { text: 'Cookies' },
];

export default CopyRight;
