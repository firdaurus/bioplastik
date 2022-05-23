import React from 'react';
// import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KunciDeterminasi from './pages/KunciDeterminasi';
import Salah from './pages/Salah';
import Materi from './pages/Materi';
import Loading from './pages/Loading';
import Nilai from './pages/Nilai';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KunciDeterminasi />} />
        <Route path="/salah" element={<Salah />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/nilai" element={<Nilai />} />
      </Routes>
    </Router>
  );
}

export default App;
