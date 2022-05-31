import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import DetailMateri from './components/DetailMateri';
import ListSections from './components/ListSections';
import CaptureScan from './pages/CaptureScan';
import KunciDeterminasi from './pages/KunciDeterminasi';
import Loading from './pages/Loading';
import Materi from './pages/Materi';
import Nilai from './pages/Nilai';
import Salah from './pages/Salah';
import Kuis from './pages/Kuis';
import KunciJawaban from './pages/KunciJawaban';
import RuangEkspresi from './pages/RuangEkspresi';

import './index.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<KunciDeterminasi />} />
        <Route path="/salah" element={<Salah />} />
        <Route path="/materi" element={<Materi />}>
          <Route index element={<ListSections />} />
          <Route path=":sectionName" element={<DetailMateri />} />
        </Route>
        <Route path="/loading" element={<Loading />} /> {/* TODO: Remove this */}
        <Route path="/nilai" element={<Nilai />} />
        <Route path="/qr/:hash" element={<CaptureScan />} />
        <Route path="/kuis" element={<Kuis />} />
        <Route path="/kunci-jawaban" element={<KunciJawaban />} />
        <Route path="/ruang-ekspresi" element={<RuangEkspresi />} />
      </Routes>
    </Router>
  );
}

export default App;
