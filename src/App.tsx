import React from 'react';
// import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import KunciDeterminasi from './pages/KunciDeterminasi'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>aaa</div>} />
      </Routes>
    </Router>
  );
}

export default App;
