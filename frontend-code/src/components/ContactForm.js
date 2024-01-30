import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '1100px',
    height: '600px',
    marginLeft: '150px',
    marginTop: '200px',
    backgroundColor: '#fff',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
    padding: '20px',
    background: 'linear-gradient(to right, #fff 50%, #dddddd 50%, #fff 80%)',
    fontFamily: 'sans-serif',
  };

  const formPageStyle = {
    flex: '1',
  };

  const formFieldsStyle = {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  };

  const formInputStyle = {
    border: '.5px solid gray',
    marginLeft: '10px',
    width: '300px',
    height: '40px',
  };

  const [isHovered, setHovered] = useState(false);

  const navButtonStyle = {
    backgroundColor: isHovered ? 'white' : 'orange',
    marginTop: '20px',
    width: '120px',
    height: '40px',
    fontSize: '1rem',
    color: isHovered ? 'black' : 'white',
    borderRadius: '25px',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  return (
    <div className="form-main-box" style={formContainerStyle}>
      <div className="form-box" style={{ ...formPageStyle, marginRight: '20px' }}>
        <h1>Contact Us!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-name"style={formFieldsStyle}>
            <label htmlFor="name" style={{ fontWeight: '600', marginLeft: '10px', marginBottom: '10px' }}>
              Name
            </label>
            <input
              style={formInputStyle}
              type="text"
              id="name"
              name="name"
          
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-email" style={formFieldsStyle}>
            <label htmlFor="email" style={{ fontWeight: '600', marginLeft: '10px', marginBottom: '10px' }}>
              Email
            </label>
            <input
              style={formInputStyle}
              type="email"
              id="email"
              name="email"
             
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-message"style={formFieldsStyle}>
            <label htmlFor="message" style={{ fontWeight: '600', marginBottom: '10px', marginLeft: '10px' }}>
              Message
            </label>
            <textarea
              style={{ width: '500px', height: '200px', marginLeft: '10px', border: '.5px solid gray' }}
              id="message"
              name="message"
              
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className='form-button'
            style={navButtonStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="second-page-form" style={formPageStyle}>
        <h1 style={{ marginLeft: '100px' }}>Approach Us</h1>
        <div className="second-page-form-h">
          <h2 style={{ fontWeight: '600', marginBottom: '10px', marginLeft: '100px',marginTop:"55px" }}>Address</h2>
          <img
            src="https://cdn4.iconfinder.com/data/icons/navigation-98/512/23_Location_map_pin_mark_navigation-128.png"
            alt="Location"
            style={{ width: '35px', marginBottom: '10px', marginLeft: '50px' }}
          />
          <p style={{ marginLeft: '100px', fontWeight: '600' }}>ES 80918, Barcelona Spain.</p>
        </div>

        <div style={formFieldsStyle}>
          <div className="second-page-form-h"> 
            <h2 style={{ fontWeight: '600', marginBottom: '10px', marginLeft: '100px' }}>Call Us</h2>

            <img
              src="https://cdn0.iconfinder.com/data/icons/business-and-finance-colorful-hand-drawn-set/99/telephone-128.png"
              alt="Phone"
              style={{ width: '35px', marginBottom: '10px', marginLeft: '50px' }}
            />
            <p style={{ marginLeft: '100px', marginBottom: '10px', fontWeight: '600' }}>+34 456 784 905</p>
          </div>
        </div>

        <div style={formFieldsStyle}>
          <h2 style={{ fontWeight: '600', marginBottom: '10px', marginLeft: '100px' }}>Email Us</h2>
          <img
            src="https://cdn0.iconfinder.com/data/icons/essentials-bright-fill/60/013_-_Mail-128.png"
            alt="Email"
            style={{ width: '35px', marginBottom: '10px', marginLeft: '50px' }}
          />
          <p style={{ marginLeft: '100px', marginBottom: '10px', fontWeight: '600' }}>codeup@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
