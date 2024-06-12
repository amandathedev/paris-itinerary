import React from 'react';

const Header = ({ day, date }) => {
  return (
    <header className="header">
      <div className="header-left">Paris</div>
      <div className="header-center">Day {day}</div>
      <div className="header-right">{date}</div>
    </header>
  );
};

export default Header;
