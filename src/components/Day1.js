import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.scss'; // Use the same SCSS file

const Day1 = () => {
  const currentImage = `${process.env.PUBLIC_URL}/images/day-1.png`;
  const navigate = useNavigate();

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      {/* No overlays for Day 1, but we can add trivia or other content later */}
      <div className="navigation-buttons">
        <button onClick={() => navigate('/')} className="nav-button prev-button">← Previous</button>
        <button onClick={() => navigate('/day-2')} className="nav-button next-button">Next →</button>
      </div>
    </div>
  );
};

export default Day1;
