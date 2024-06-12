import React, { useState } from 'react';
import './App.scss';
import activities from './activities';

const App = () => {
  const [currentDay, setCurrentDay] = useState('day-2'); // Default to Day 2
  const [revealed, setRevealed] = useState([false, false, false, false, false]); // Track revealed states

  const handleDayChange = (day) => {
    setCurrentDay(day);
    setRevealed([false, false, false, false, false]); // Reset revealed states for new day
  };

  const revealItem = (index) => {
    setRevealed(revealed.map((item, i) => (i === index ? true : item)));
  };

  const currentImage = `${process.env.PUBLIC_URL}/images/${currentDay}.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="overlays">
        {revealed.map((isRevealed, index) => (
          !isRevealed && (
            <div
              key={index}
              className={`overlay overlay-${index}`}
              onClick={() => revealItem(index)}
            >
              Click to reveal
            </div>
          )
        ))}
      </div>
      <div className="manual-override">
        <button onClick={() => handleDayChange('day-2')}>Day 2</button>
        <button onClick={() => handleDayChange('day-3')}>Day 3</button>
        <button onClick={() => handleDayChange('day-4')}>Day 4</button>
        <button onClick={() => handleDayChange('day-5')}>Day 5</button>
        <button onClick={() => handleDayChange('day-6')}>Day 6</button>
        <button onClick={() => handleDayChange('day-7')}>Day 7</button>
      </div>
    </div>
  );
};

export default App;
