import { Fragment, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

import { useAppSelector } from "../../redux/hooks";
import Header from "../../components/Dashboard/Header";

function createData(date: Date, rating: number, message: string) {
	return { date, rating, message };
}

function Row(props: { row: ReturnType<typeof createData> }) {
	const { row } = props;

	return (
		<Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell size="small" sx={{ width: 20 }}>
					{row.rating === 1 ? (
						<SentimentVeryDissatisfiedIcon
							sx={{ fontSize: 50, color: "#b91c1c" }}
						/>
					) : row.rating === 2 ? (
						<SentimentDissatisfiedIcon
							sx={{ fontSize: 50, color: "#fb923c" }}
						/>
					) : row.rating === 3 ? (
						<SentimentSatisfiedIcon
							sx={{ fontSize: 50, color: "#facc15" }}
						/>
					) : row.rating === 4 ? (
						<SentimentSatisfiedAltIcon
							sx={{ fontSize: 50, color: "#65a30d" }}
						/>
					) : (
						<SentimentVerySatisfiedIcon
							sx={{ fontSize: 50, color: "#16a34a" }}
						/>
					)}
				</TableCell>
				<TableCell>16 April 2022; 18:30:03</TableCell>
				<TableCell>{row.message}</TableCell>
			</TableRow>
		</Fragment>
	);
}

export default function Dashboard() {
	const token = useAppSelector((state) => state.auth.token);

	const [loading, setLoading] = useState(true);
	const [rows, setRows] = useState<ReturnType<typeof createData>[]>([]);

	const fetchData = useCallback(async () => {
		if (!token) return;
		try {
			setLoading(true);
			const response = await axios.get(
				`${process.env.REACT_APP_API_HOST}/ruang_ekspresi/all`,
				{
					headers: {
						Accept: "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setRows(
				response.data.map(
					(row: {
						createdAt: string;
						rating: number;
						message: string;
					}) =>
						createData(
							new Date(row.createdAt),
							row.rating,
							row.message
						)
				)
			);
		} catch (error: any) {
			let msg = "";
			if (error.response?.status) {
				msg = `Terjadi kesalahan pada server (${error.response.status}). Silakan coba lagi`;
			} else {
				msg = `Terjadi kesalahan. Silakan coba lagi.`
			}
			toast.error(msg, {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} finally {
			setLoading(false);
		}
	}, [token]);

	useEffect(() => {
		console.log('called')
		fetchData();
	}, [fetchData]);

	return (
		<div className="w-screen h-screen">
			<Header />
			<h1 className="text-xl font-bold mt-4 ml-4">Ruang Ekspresi</h1>
			<div className="px-4 mt-4">
				<TableContainer component={Card}>
					<Table>
						<TableHead>
							<TableRow sx={{ backgroundColor: "#d1d5db" }}>
								<TableCell />
								<TableCell>Tanggal</TableCell>
								<TableCell>Pesan</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{loading ? (
								<TableRow>
									<TableCell colSpan={3} align="center">
										Loading...
									</TableCell>
								</TableRow>
							) : rows.length === 0 ? (
								<TableRow>
									<TableCell colSpan={3} align="center">
										Tidak ada data
									</TableCell>
								</TableRow>
							) : (
								rows.map((row, i) => <Row key={i} row={row} />)
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
