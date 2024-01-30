import React, { useState, useEffect } from 'react';

const NumberCounter = ({ entity, targetNumber, imageUrl }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < targetNumber) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 20);
    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
  
     <div style={{ textAlign: 'center', margin: '10px',fontFamily:"sans-serif"}}>

    
        <img src={imageUrl} alt={entity} style={{ width: '100px', height: '100px' }} />
      
      <p style={{fontSize:"2.5rem",fontWeight:"700"}}>{count} +</p>
      <h2 style={{color:"gray"}}>{entity}</h2>
      </div>
    
  );
};

const CounterComponent = () => {

  return (



    <div className="counter-container"style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop:"100px" }}>
      <div className="counters"style={{ display: 'flex' , gap:"200px" }}>
        <NumberCounter entity="Students" targetNumber={5000} imageUrl="https://cdn-icons-png.flaticon.com/128/3135/3135773.png" />
        <NumberCounter entity="Courses" targetNumber={185} imageUrl="https://cdn-icons-png.flaticon.com/128/3532/3532930.png" />
        <NumberCounter entity="Instructors" targetNumber={400} imageUrl="https://cdn-icons-png.flaticon.com/128/9721/9721094.png" />
      </div>
    </div>
  );
};

export default CounterComponent;
