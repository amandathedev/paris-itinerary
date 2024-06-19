import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.scss';

const Day7 = () => {
  const navigate = useNavigate();
  const currentImage = `${process.env.PUBLIC_URL}/images/day-7.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/day-6')} className="nav-button prev-button">← Previous</button>
        <button onClick={() => navigate('/day-8')} className="nav-button next-button">Next →</button>
      </div>
    </div>
  );
};

export default Day7;
