import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CaptureScan from './pages/CaptureScan';
import KunciDeterminasi from './pages/KunciDeterminasi';
import Loading from './pages/Loading';
import Materi from './pages/Materi';
import Nilai from './pages/Nilai';
import Salah from './pages/Salah';

import './index.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<KunciDeterminasi />} />
        <Route path="/salah" element={<Salah />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/loading" element={<Loading />} /> {/* TODO: Remove this */}
        <Route path="/nilai" element={<Nilai />} />
        <Route path="/qr/:hash" element={<CaptureScan />} />
      </Routes>
    </Router>
  );
}

export default App;
