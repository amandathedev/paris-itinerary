import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.scss';

const Day0 = () => {
  const currentImage = `${process.env.PUBLIC_URL}/images/day-0.png`;
  const navigate = useNavigate();

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/day-1')} className="nav-button next-button">→</button>
      </div>
    </div>
  );
};

export default Day0;
