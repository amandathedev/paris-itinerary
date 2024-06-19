import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questions, { checkAnswer } from '../utils/questions';
import Modal from './Modal';
import '../App.scss'; // Use the same SCSS file

const Day3 = () => {
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
    if (checkAnswer('day3', index, userAnswers[index])) {
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

  const currentImage = `${process.env.PUBLIC_URL}/images/day-3.png`;

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        questions.day3.forEach((question, index) => {
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
      });
    }
  }, [revealItem]);

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="overlays">
        {questions.day3.map((question, index) => (
          !revealed[index] && (
            <div
              key={index}
              className={`overlay overlay-${index}`}
            >
              <div className="question">{question.question}</div>
              {question.type !== 'geolocation' && (
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
        <button onClick={() => navigate('/day-2')} className="nav-button prev-button">← Previous</button>
        <button onClick={() => navigate('/day-4')} className="nav-button next-button">Next →</button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} message={modalMessage} />
    </div>
  );
};

export default Day3;
