import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.scss'; // Use the same SCSS file

const Day8 = () => {
  const navigate = useNavigate();
  const currentImage = `${process.env.PUBLIC_URL}/images/day-8.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/day-7')} className="nav-button prev-button">←</button>
      </div>
    </div>
  );
};

export default Day8;
