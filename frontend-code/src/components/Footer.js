import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <div className="row" style={rowStyle}>
          <div className="col-md-3">
            <div className="footer-log" style={footerLogStyle}>
              <div className="footer-img">
                <img src="https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-flat-icons/128/web-code.png" alt="logo" style={logoStyle} />
              </div>
              <div className="footer-heading" style={footerHeadingStyle}>
                <h5>CodeUp</h5>
              </div>
            </div>
            <p>Follow us on Social Media!</p>
            {socialMediaIcons.map((icon, index) => (
              <img key={index} src={icon.url} alt={icon.alt} style={socialMediaIconStyle} />
            ))}
          </div>

          {footerColumns.map((column, index) => (
            <div key={index} className="col-md-3" style={column.style}>
              <h5 style={column.headingStyle}>{column.heading}</h5>
              {column.topics.map((topic, topicIndex) => (
                <p key={topicIndex} style={column.topicStyle}>{topic}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: 'black',
  color: 'white',
  height: '400px',
  fontFamily: 'sans-serif',
  fontSize: '1.2rem',
};

const containerStyle = {
  display: 'flex',
  gap: '100px',
};

const rowStyle = {
  display: 'flex',
  gap: '80px',
  paddingTop: '80px',
  marginLeft: '200px',
};

const footerLogStyle = {
  display: 'flex',
  gap: '5px',
};

const logoStyle = {
  width: '35px',
  height: '35px',
  marginTop: '40px',
};

const footerHeadingStyle = {
  fontSize: '2rem',
  letterSpacing: '2px',
};

const socialMediaIcons = [
  { url: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png', alt: 'Facebook' },
  { url: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-128.png', alt: 'Instagram' },
  { url: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-128.png', alt: 'Twitter' },
  { url: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-128.png', alt: 'YouTube' },
];

const socialMediaIconStyle = {
  width: '22px',
  height: '22px',
  marginTop: '30px',
  marginLeft: '22px',
};

const footerColumns = [
  {
    heading: 'Learning Path',
    style: { marginLeft: '80px' },
    headingStyle: { fontSize: '1.6rem', letterSpacing: '1px' },
    topics: ['Web Development', 'Mobile Development', 'Machine Learning', 'Data Science'],
    topicStyle: { fontSize: '1rem' },
  },
  {
    heading: 'Topics',
    headingStyle: { fontSize: '1.6rem', letterSpacing: '1px' },
    topics: ['HTML', 'Java', 'Python', 'JavaScript'],
    topicStyle: { fontSize: '1rem' },
  },
  {
    heading: 'Get In Touch',
    headingStyle: { fontSize: '1.6rem', letterSpacing: '1px' },
    topics: ['Barcelona, Catalunya , Spain', 'ES 80918, Spain.', '+34 456 784 905', 'codeup@gmail.com'],
    topicStyle: { fontSize: '1rem' },
  },
];

export default Footer;
