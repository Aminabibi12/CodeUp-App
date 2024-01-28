import React from 'react';

const IsntructorsComponent = () => {
  const instructors = [
    {
      name: 'John Aston',
      role: 'Web Development Instructor',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-instructor-1.jpg',
    },
    {
      name: 'Erika Mina',
      role: 'Mobile Development Instructor',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-instructor-4.jpg',
    },
    {
      name: 'Amy Rose',
      role: 'Machine Learning Instructor',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-instructor-2.jpg',
    },
    {
      name: 'Adrian Cruz',
      role: 'Data Science Instructor',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-coding-course-instructor-3.jpg',
    },
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '100px',
    marginTop: '100px',
  };

  const instructorCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  };

  const instructorImageStyle = {
    height: '250px',
    width: '250px',
    borderRadius: '125px',
  };

  const instructorTextStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: 'gray',
  };

  return (
    <div className="IsntructorsComponent-container" style={containerStyle}>
      <div className="head-text">
        <h1 style={{ fontFamily: 'sans-serif', fontSize: '3.3rem', letterSpacing: '1px', fontWeight: '500', textAlign: 'center' }}>
          Meet The Instructors
        </h1>
      </div>
      <div className="instructors" style={{ display: 'flex', gap: '70px', marginTop: '50px' }}>
        {instructors.map((instructor, index) => (
          <div key={index} className={`Img-${index + 1}`} style={instructorCardStyle}>
            <img src={instructor.image} alt="" style={instructorImageStyle} />
            <h2 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>{instructor.name}</h2>
            <p style={instructorTextStyle}>{instructor.role}</p>
            <div className="instructor-icon" style={{ display: 'flex', gap: '20px'}}>
              <div className="facebook">
                <img src="https://img.icons8.com/?size=100&id=118467&format=png" alt="" style={{ width: '25px', height: '25px' }} />
              </div>
              <div className="twitter">
                <img src="https://img.icons8.com/?size=100&id=8824&format=png" alt="" style={{ width: '25px', height: '25px' }} />
              </div>
              <div className="youtube">
                <img src="https://img.icons8.com/?size=100&id=37326&format=png" alt="" style={{ width: '25px', height: '25px' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsntructorsComponent;
