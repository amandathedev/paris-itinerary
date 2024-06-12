import React from 'react';
import '../App.scss'; // Use the same SCSS file

const Day1 = () => {
  const currentImage = `${process.env.PUBLIC_URL}/images/day-1.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      {/* No overlays for Day 1, but we can add trivia or other content later */}
    </div>
  );
};

export default Day1;
