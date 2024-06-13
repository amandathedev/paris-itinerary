import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questions, { checkAnswer } from '../utils/questions';
import Modal from './Modal';
import '../App.scss'; // Use the same SCSS file

const Day2 = () => {
  const [revealed, setRevealed] = useState([false, false, false, false, false]);
  const [userAnswers, setUserAnswers] = useState(["", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (questions.day2[0].type === "geolocation") {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const { latitude: targetLat, longitude: targetLng, radius } = questions.day2[0].location;

        const distance = getDistanceFromLatLonInKm(latitude, longitude, targetLat, targetLng);
        if (distance <= radius / 1000) {
          revealItem(0);
        }
      });
    }
  }, []);

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  }

  const handleInputChange = (index, value) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = value;
    setUserAnswers(newUserAnswers);
  };

  const handleSubmit = (index) => {
    if (checkAnswer('day2', index, userAnswers[index])) {
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

  const currentImage = `${process.env.PUBLIC_URL}/images/day-2.png`;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="overlays">
        {revealed.map((isRevealed, index) => (
          !isRevealed && (
            <div
              key={index}
              className={`overlay overlay-${index} ${isRevealed ? 'hide' : ''}`}
            >
              <div className="question">{questions.day2[index].question}</div>
              {questions.day2[index].type !== "geolocation" && (
                <>
                  <input
                    type={questions.day2[index].type === 'number' ? 'number' : 'text'}
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
        <button onClick={() => navigate('/day-1')} className="nav-button prev-button">← Previous</button>
        <button onClick={() => navigate('/day-3')} className="nav-button next-button">Next →</button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} message={modalMessage} />
    </div>
  );
};

export default Day2;
