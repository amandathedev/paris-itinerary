import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import questions, { checkAnswer } from '../utils/questions';
import Modal from './Modal';
import '../App.scss'; // Use the same SCSS file

const Day4 = () => {
  const [revealed, setRevealed] = useState(
    JSON.parse(localStorage.getItem('day4_revealed')) || [false, false, false, false, false]
  );
  const [userAnswers, setUserAnswers] = useState(["", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = value;
    setUserAnswers(newUserAnswers);
  };

  const revealItem = useCallback((index) => {
    const newRevealed = revealed.map((item, i) => (i === index ? true : item));
    setRevealed(newRevealed);
    localStorage.setItem('day4_revealed', JSON.stringify(newRevealed));
  }, [revealed]);

  const handleSubmit = (index) => {
    if (checkAnswer('day4', index, userAnswers[index])) {
      revealItem(index);
    } else {
      setModalMessage("Incorrect answer. Try again!");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const currentImage = `${process.env.PUBLIC_URL}/images/day-4.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="overlays">
        {questions.day4.map((question, index) => (
          !revealed[index] && (
            <div
              key={index}
              className={`overlay overlay-${index}`}
            >
              <div className="question">{question.question}</div>
              <input
                type={question.type === 'number' ? 'number' : 'text'}
                value={userAnswers[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <button onClick={() => handleSubmit(index)}>Submit</button>
            </div>
          )
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/day-3')} className="nav-button prev-button">←</button>
        <button onClick={() => navigate('/day-5')} className="nav-button next-button">→</button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} message={modalMessage} />
    </div>
  );
};

export default Day4;
