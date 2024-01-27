import React from 'react';

const logos = [
  'https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/233_Node_Js_logo-128.png',
  'https://cdn2.iconfinder.com/data/icons/well-known-1/1024/Java-128.png',
  'https://cdn1.iconfinder.com/data/icons/soleicons-line-vol-1/64/reactjs_javascript_library_atom_atomic_react-128.png',
  'https://cdn2.iconfinder.com/data/icons/programming-50/64/206_programming-python-coding-128.png',
  'https://cdn3.iconfinder.com/data/icons/linecons-social-media/512/socialmedia_html5-128.png',
  'https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-1/256/angular-logo-light-128.png',
  'https://cdn0.iconfinder.com/data/icons/phosphor-thin-vol-2/256/file-vue-thin-128.png',
  'https://cdn3.iconfinder.com/data/icons/file-set-volume-1/512/Artboard_6-128.png',
];

const AppSectionTwo = () => {
  const sectionTwoContainerStyle = {
    display: 'flex',
    height: '200px',
    gap: '100px',
    marginLeft: '110px',
  };

  const imageSectionStyle = {
    width: '60px',
    height: '60px',
    marginTop: '50px',
  };

  return (
    <div className="sectionTwo-container" style={sectionTwoContainerStyle}>
      {logos.map((logo, index) => (
        <div key={index} className={`sectionTwo-img${index + 1}`}>
          <img src={logo} alt={`Logo ${index + 1}`} style={imageSectionStyle} />
        </div>
      ))}
    </div>
  );
};

export default AppSectionTwo;
