import React, { useState } from 'react';
import questions, { checkAnswer } from '../utils/questions';
import '../App.scss'; // Use the same SCSS file

const Day2 = () => {
  const [revealed, setRevealed] = useState([false, false, false, false, false]);
  const [userAnswers, setUserAnswers] = useState(["", "", "", "", ""]);

  const handleInputChange = (index, value) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = value;
    setUserAnswers(newUserAnswers);
  };

  const handleSubmit = (index) => {
    if (checkAnswer('day2', index, userAnswers[index])) {
      setRevealed(revealed.map((item, i) => (i === index ? true : item)));
    } else {
      alert("Incorrect answer. Try again!");
    }
  };

  const currentImage = `${process.env.PUBLIC_URL}/images/day-2.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="overlays">
        {revealed.map((isRevealed, index) => (
          !isRevealed && (
            <div key={index} className={`overlay overlay-${index}`}>
              <div className="question">{questions.day2[index].question}</div>
              <input
                type={questions.day2[index].type === 'number' ? 'number' : 'text'}
                value={userAnswers[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <button onClick={() => handleSubmit(index)}>Submit</button>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Day2;
