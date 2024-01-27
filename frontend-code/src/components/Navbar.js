import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const baseNavStyle = {
    marginRight: '40px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontFamily: 'sans-serif',
    color: 'white',
  };

  const containerStyle = {
    display: 'flex',
    gap: '500px',
    marginLeft: '100px',
    paddingTop: '20px',
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const navStyle = (item) => ({
    ...baseNavStyle,
    color: hoveredItem === item ? 'orange' : 'white',
    transition: 'color 0.3s',
  });

  const navButtonStyle = {
    backgroundColor: hoveredItem === 'button' ? 'white' : 'orange',
    marginTop: '20px',
    width: '150px',
    height: '40px',
    fontSize: '1rem',
    color: hoveredItem === 'button' ? 'black' : 'white',
    borderRadius: '25px',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
  };

  return (
    <nav>
      <div className="container" style={containerStyle}>
        <div className="logo" style={{ display: 'flex', gap: '10px', marginLeft: '35px' }}>
          <div className="logo-img" style={{ paddingTop: '20px' }}>
            <img src="https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-flat-icons/128/web-code.png" alt="" style={{ width: '30px', height: '30px' }} />
          </div>
          <div className="logo-p" style={{ fontFamily: 'sans-serif', color: 'white' }}>
            <h2 style={{ letterSpacing: '2px' }}>CodeUp</h2>
          </div>
        </div>

        <div className="navbar-start">
          {['home', 'allCourses', 'about', 'contact'].map((item) => (
            <Link
              key={item}
              to={`/${item === 'home' ? '' : item}`}
              className="navbar-item"
              style={navStyle(item)}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <button
            style={navButtonStyle}
            onMouseEnter={() => handleMouseEnter('button')}
            onMouseLeave={handleMouseLeave}
          >
            Start Learning
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;