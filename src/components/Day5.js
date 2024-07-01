import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import questions, { checkAnswer } from '../utils/questions';
import Modal from './Modal';
import '../App.scss'; // Use the same SCSS file

const Day5 = () => {
  const [revealed, setRevealed] = useState(
    JSON.parse(localStorage.getItem('day5_revealed')) || [false, false, false, false, false]
  );
  const [showInputs, setShowInputs] = useState([false, false, false, false, false]);
  const [userAnswers, setUserAnswers] = useState(["", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [geolocationFailed, setGeolocationFailed] = useState([false, false, false, false, false]);
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = value;
    setUserAnswers(newUserAnswers);
  };

  const revealItem = useCallback((index) => {
    const newRevealed = revealed.map((item, i) => (i === index ? true : item));
    setRevealed(newRevealed);
    localStorage.setItem('day5_revealed', JSON.stringify(newRevealed));
  }, [revealed]);

  const handleSubmit = (index) => {
    if (checkAnswer('day5', index, userAnswers[index])) {
      revealItem(index);
    } else {
      setModalMessage("Incorrect answer. Try again!");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTapOverlay = (index) => {
    setShowInputs(showInputs.map((item, i) => (i === index ? true : item)));
  };

  const currentImage = `${process.env.PUBLIC_URL}/images/day-5v2.png`;

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          questions.day5.forEach((question, index) => {
            if (question.type === "geolocation") {
              const distance = Math.sqrt(
                Math.pow(position.coords.latitude - question.location.latitude, 2) +
                Math.pow(position.coords.longitude - question.location.longitude, 2)
              );
              if (distance < question.location.radius / 100000) {
                revealItem(index);
              }
            }
          });
        },
        () => {
          setGeolocationFailed(geolocationFailed.map((item, i) => questions.day5[i].type === "geolocation" ? true : item));
        }
      );
    }
  }, [revealItem, geolocationFailed]);

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="overlays">
        {questions.day5.map((question, index) => (
          !revealed[index] && (
            <div
              key={index}
              className={`overlay overlay-${index}`}
              onClick={() => handleTapOverlay(index)}
            >
              <div className="question">{question.question}</div>
              {(showInputs[index] || question.type !== 'geolocation') && (
                <>
                  <input
                    type={question.type === 'number' ? 'number' : 'text'}
                    value={userAnswers[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <button onClick={() => handleSubmit(index)}>Submit</button>
                </>
              )}
            </div>
          )
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/day-4')} className="nav-button prev-button">←</button>
        <button onClick={() => navigate('/day-6')} className="nav-button next-button">→</button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} message={modalMessage} />
    </div>
  );
};

export default Day5;
