import React from 'react';

const Activity = ({ title, description, image }) => {
  return (
    <div className="activity">
      <div className="activity-image">
        <img src={image} alt={title} />
      </div>
      <div className="activity-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Activity;
