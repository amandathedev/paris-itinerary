import React from 'react';
import Activity from './Activity';

const Itinerary = ({ activities }) => {
  return (
    <div className="itinerary">
      {activities.map((activity, index) => (
        <Activity
          key={index}
          title={activity.title}
          description={activity.description}
          image={activity.image}
        />
      ))}
    </div>
  );
};

export default Itinerary;
