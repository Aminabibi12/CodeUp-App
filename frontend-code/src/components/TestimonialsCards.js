import React from 'react';

const TestimonialCard = ({ backgroundColor, imageSrc, alt, content, author }) => {
  return (
    <div className="testimonial-card" style={{ width: "400px", height: "450px", backgroundColor }}>
      <div className="testimonial-image" style={{ width: "250px", height: "180px", marginTop: "10px" }}>
        <img
          src={imageSrc}
          alt={alt}
          style={{ height: "150px", width: "150px", borderRadius: "75px", objectFit: "cover", marginLeft: "120px" }}
        />
      </div>
      <p style={{ textAlign: "center", color: "white", fontFamily: "sans-serif", fontSize: "1.2rem" }}>
        {content}
      </p>
      <h5 style={{ textAlign: "center", color: "white", fontFamily: "sans-serif", fontSize: "1.8rem" }}>
        {author}
      </h5>
    </div>
  );
};

const TestimonialsCards = () => {
  const testimonialsData = [
    {
      backgroundColor: "#c58ef3",
      imageSrc: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a00f9926b1c35fc1a187a1f1/fgfg.jpg",
      alt: "Nat Reynolds",
      content: "I am honored to be part of this incredible coding institute as a tutor. The collaborative learning environment encourages meaningful discussions, and the enthusiasm of the students.",
      author: "Nat Reynolds",
    },
    {
      backgroundColor: "#f27b93",
      imageSrc: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/2ef5a8d109bb59e2a45b40a6/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg",
      alt: "Celia Almeda",
      content: "I can't express how grateful I am for choosing this coding institute. The supportive learning environment and dedicated mentors have made a significant impact on my coding journey.",
      author: "Celia Almeda",
    },
    {
      backgroundColor: "#46d0a0",
      imageSrc: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d63bd1b5785c5462a62e7c8f/dssd.jpg",
      alt: "Paul Smith",
      content: "As a beginner in coding, I was initially overwhelmed by the vast world of programming. The step-by-step approach, clear explanations, and practical examples helped me build a strong foundation.",
      author: "Paul Smith",
    },
  ];

  return (
    <div className="testimonials-container" style={{ display: "flex", marginTop: '100px', marginLeft: '70px', marginBottom: "100px", gap: "50px" }}>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialsCards;
