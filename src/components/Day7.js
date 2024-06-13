import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questions, { checkAnswer } from '../utils/questions';
import Modal from './Modal';
import '../App.scss'; // Use the same SCSS file

const Day7 = () => {
  const [revealed, setRevealed] = useState([false, false, false, false, false]);
  const [userAnswers, setUserAnswers] = useState(["", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = value;
    setUserAnswers(newUserAnswers);
  };

  const handleSubmit = (index) => {
    if (checkAnswer('day7', index, userAnswers[index])) {
      revealItem(index);
    } else {
      setModalMessage("Incorrect answer. Try again!");
      setShowModal(true);
    }
  };

  const revealItem = (index) => {
    setRevealed(revealed.map((item, i) => (i === index ? true : item)));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const currentImage = `${process.env.PUBLIC_URL}/images/day-7.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="overlays">
        {revealed.map((isRevealed, index) => (
          !isRevealed && (
            <div
              key={index}
              className={`overlay overlay-${index} ${isRevealed ? 'hide' : ''}`}
            >
              <div className="question">{questions.day7[index].question}</div>
              <input
                type={questions.day7[index].type === 'number' ? 'number' : 'text'}
                value={userAnswers[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <button onClick={() => handleSubmit(index)}>Submit</button>
            </div>
          )
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/day-6')} className="nav-button prev-button">← Previous</button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} message={modalMessage} />
    </div>
  );
};

export default Day7;
