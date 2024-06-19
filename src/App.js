import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Day0 from './components/Day0';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import Day5 from './components/Day5';
import Day6 from './components/Day6';
import Day7 from './components/Day7';
import Day8 from './components/Day8';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/day-0" element={<Day0 />} />
        <Route path="/day-1" element={<Day1 />} />
        <Route path="/day-2" element={<Day2 />} />
        <Route path="/day-3" element={<Day3 />} />
        <Route path="/day-4" element={<Day4 />} />
        <Route path="/day-5" element={<Day5 />} />
        <Route path="/day-6" element={<Day6 />} />
        <Route path="/day-7" element={<Day7 />} />
        <Route path="/day-8" element={<Day8 />} />
        <Route path="/" element={<Day0 />} />
      </Routes>
    </Router>
  );
};

export default App;
