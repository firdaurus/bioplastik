import { Navigate, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";

import DetailMateri from "./components/DetailMateri";
import ListSections from "./components/ListSections";
import CaptureScan from "./pages/CaptureScan";
import KunciDeterminasi from "./pages/KunciDeterminasi";
import Materi from "./pages/Materi";
import Nilai from "./pages/Nilai";
import Salah from "./pages/Salah";
import Kuis from "./pages/Kuis";
import KunciJawaban from "./pages/KunciJawaban";
import RuangEkspresi from "./pages/RuangEkspresi";

import Login from "./pages/admin/Login";

import "./index.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<KunciDeterminasi />} />
			<Route path="/salah" element={<Salah />} />
			<Route path="/materi" element={<Materi />}>
				<Route index element={<ListSections />} />
				<Route path=":sectionName" element={<DetailMateri />} />
			</Route>
			<Route path="/nilai" element={<Nilai />} />
			<Route path="/qr/:hash" element={<CaptureScan />} />
			<Route path="/kuis" element={<Kuis />} />
			<Route path="/kunci-jawaban" element={<KunciJawaban />} />
			<Route path="/ruang-ekspresi" element={<RuangEkspresi />} />

			<Route path="/login" element={<Login />} />

			<Route path="/admin" element={<RequireAuth />}>
				<Route path="dashboard" element={<div>Dashbaord</div>} />
			</Route>
		</Routes>
	);
}

function RequireAuth() {
	const token = useAppSelector((state) => state.auth.token);
	const location = useLocation();

	if (!token) {
		//Redirect to /login if unauthenticated
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
}

export default App;
