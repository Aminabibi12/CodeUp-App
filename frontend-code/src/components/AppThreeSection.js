import React from 'react';

const AppThreeSection = () => {
  return (
    <div className="sectionThreeContainer" style={sectionThreeStyle}>
      <div className="section3Image">
        <img
          src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-featured-review-figure-img.png"
          alt=""
          style={{ width: '100%' }}
        />
      </div>

      <div className="section3Text" style={section3TextStyle}>
        <p style={section3TitleStyle}>WHAT OUR HAPPY STUDENTS SAY</p>

        <h2 style={section3SubtitleStyle}>
          The beginning was challenging, but the masterclass provided a supportive learning environment, encouraging collaboration, and offering mentorship. The masterclass not only provided technical knowledge but also fostered a sense of community, mentorship, and confidence.
        </h2>

        <p style={section3AuthorStyle}>Elina Miles</p>
        <p style={section3RoleStyle}>Student</p>
      </div>
    </div>
  );
};

const sectionThreeStyle = {
  display: 'flex',
  marginTop: '80px',
  marginLeft: '150px',
  marginBottom: '50px',
  gap: '180px',
};

const section3TextStyle = {
  height: '600px',
  width: '480px',
  marginTop: '50px',
  fontFamily: 'sans-serif',
  wordSpacing: '3px',
  letterSpacing: '1px',
};

const section3TitleStyle = {
  marginTop: '40px',
  fontFamily: 'sans-serif',
  fontSize: '1.6rem',
  fontWeight: '500',
};

const section3SubtitleStyle = {
  marginTop: '60px',
  fontFamily: 'sans-serif',
  fontSize: '1.3rem',
  letterSpacing: '.5px',
  
  
};

const section3AuthorStyle = {
  fontFamily: 'sans-serif',
  letterSpacing: '1px',
  fontWeight: 'bold',
  marginTop: '40px',
};

const section3RoleStyle = {
  fontFamily: 'sans-serif',
  letterSpacing: '1px',
  color: 'gray',
  marginTop: '40px',
};

export default AppThreeSection;
