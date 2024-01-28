import React from 'react';
import { useState } from 'react';

const CourseCard = ({ title, description, price, imgSrc, index, hoverStates, handleHover }) => {
  const cardBodyStyle = {
    width: "350px",
    height: "500px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const cardImgStyle = {
    width: "350px",
    height: "250px",
  };

  const cardHeadingStyle = {
    paddingTop: "10px",
    textAlign: "center",
    fontSize: "1.2rem"
  };

  const cardTextStyle = {
    paddingTop: "10px",
    textAlign: "center",
  };

  return (
    <div className="card" style={cardBodyStyle}>
      <img src={imgSrc} className="card-img-top" alt="..." style={cardImgStyle} />
      <div className="card-body">
        <h5 className="card-title" style={cardHeadingStyle}>{title}</h5>
        <p className="card-text" style={cardTextStyle}>{description}</p>
        <div style={{ display: "flex", gap: "150px", marginLeft: "20px" }}>
          <div>
            <p style={{ fontSize: "1.5rem", color: "gray" }}>
              ${price}
            </p>
          </div>
          <div>
            <button
              className="enroll-button"
              style={{
                marginTop: "20px",
                width: "100px",
                height: "35px",
                borderRadius: "10px",
                border: ".2px solid black",
                backgroundColor: hoverStates[index] ? "white" : "#0F52BA",
                color: hoverStates[index] ? "black" : "#fff",
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(index)}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllCoursesCards = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false, false, false, false]);

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

const coursesData = [
  {
    title: "Introduction to Machine Learning",
    description: "Explore the fundamentals of machine learning, covering key algorithms and applications to develop.",
    price: 2000,
    imgSrc: "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?size=626&ext=jpg&ga=GA1.2.430224270.1704229904&semt=ais"
  },
  {
    title: "Web Development with JavaScript",
    description: "Master the essential technologies for building modern websites and Mobile Applications interactivity using JavaScript.",
    price: 1500,
    imgSrc: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062004.jpg?size=626&ext=jpg&ga=GA1.2.430224270.1704229904&semt=ais"
  },
  {
    title: "Data Science for Beginners",
    description: "Dive into the world of data science, acquiring skills in data analysis, visualization, and interpretation.",
    price: 2500,
    imgSrc: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg?size=626&ext=jpg&ga=GA1.2.430224270.1704229904&semt=ais"
  },
  {
    title: "Introduction to Artificial Intelligence",
    description: "Delve into the ethical considerations surrounding artificial intelligence, exploring the responsible deployment.",
    price: 3000,
    imgSrc: "https://img.freepik.com/premium-photo/double-exposure-abstract-programming-language-hologram-with-hands-typing-laptop-background-research-development-concept_258654-5302.jpg?size=626&ext=jpg&ga=GA1.2.430224270.1704229904&semt=ais"
  },
  {
    title: "HTML5 and CSS for Beginners",
    description: "Essential technologies for building modern websites, from structuring content with HTML to styling with CSS.",
    price: 1000,
    imgSrc: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.2.430224270.1704229904&semt=ais"
  },
  {
    title: "Java Programming Essentials",
    description: "Develop practical skills by creating applications and understanding Java's role in web development and mobile apps.",
    price: 2200,
    imgSrc: "https://img.freepik.com/free-photo/software-developer-programming-firewall-security-multiple-monitors-learning-new-user-interface-developing-application-cloud-server-with-binary-code-html-script-terminal-window_482257-50251.jpg?size=626&ext=jpg&ga=GA1.2.430224270.1704229904&semt=ais"
  },
 
];

  return (
    <div className="main-corseCards-box" style={{ marginTop: "150px", marginBottom: "150px", fontFamily: "sans-serif" }}>
      <div className="card-group-1" style={{ display: "flex", marginLeft: "140px", gap: "50px" }}>
        {coursesData.slice(0, 3).map((course, index) => (
          <CourseCard
            key={index}
            index={index}
            hoverStates={hoverStates}
            handleHover={handleHover}
            {...course}
          />
        ))}
      </div>

      <div className="card-group-2" style={{ display: "flex", marginLeft: "140px", gap: "50px", marginTop: "150px" }}>
        {coursesData.slice(3).map((course, index) => (
          <CourseCard
            key={index + 3}
            index={index + 3}
            hoverStates={hoverStates}
            handleHover={handleHover}
            {...course}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCoursesCards;
