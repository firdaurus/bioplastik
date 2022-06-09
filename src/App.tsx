import { Suspense, lazy } from "react";
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
import Loading from "./pages/Loading";

import "./index.css";

const Login = lazy(() => import("./pages/admin/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));

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
			<Route path="/loading" element={<Loading />} />

			<Route path="/login" element={
				<Suspense fallback={<Loading />}>
					<Login />
				</Suspense>
			} />

			<Route path="/admin" element={<RequireAuth />}>
				<Route index element={<Navigate to="/admin/dashboard" replace />} />
				<Route path="dashboard" element={
					<Suspense fallback={<Loading />}>
						<Dashboard />
					</Suspense>
				} />
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