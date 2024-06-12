import React from 'react';
import '../App.scss';

const Day0 = () => {
  const currentImage = `${process.env.PUBLIC_URL}/images/day-0.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
    </div>
  );
};

export default Day0;
