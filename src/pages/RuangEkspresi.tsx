import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

import Header from "../components/Header";

//TODO: Ganti warna jadi

const customIcons: {
	[index: string]: {
		icon: React.ReactElement;
		label: string;
	};
} = {
	1: {
		icon: <SentimentVeryDissatisfiedIcon sx={{ fontSize: 50 }} />,
		label: "Very Dissatisfied",
	},
	2: {
		icon: <SentimentDissatisfiedIcon sx={{ fontSize: 50 }} />,
		label: "Dissatisfied",
	},
	3: {
		icon: <SentimentSatisfiedIcon sx={{ fontSize: 50 }} />,
		label: "Neutral",
	},
	4: {
		icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 50 }} />,
		label: "Satisfied",
	},
	5: {
		icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 50 }} />,
		label: "Very Satisfied",
	},
};

function IconContainer(props: IconContainerProps) {
	const { value, ...other } = props;
	return <span {...other}>{customIcons[value].icon}</span>;
}

export default function RuangEkspresi() {

	const navigate = useNavigate();

	const [rating, setRating] = useState(3);
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		setLoading(true);
		const toastId = toast.loading("Mengirim...", { position: 'bottom-right' });
		try {
			await axios.post(process.env.REACT_APP_API_HOST + "/ruang_ekspresi/create", {
				rating,
				message,
			});
			navigate(-1);
			toast.update(toastId, { render: 'Terima kasih!', type: 'success', isLoading: false, autoClose: 5000, draggable: true, closeOnClick: true });
		} catch (e: any){
			if (e.response){
				toast.update(toastId, { render: `Error: ${ e.response.data?.message ?? `Terjadi kesalahan pada server (${ e.response.status })`}`, type: 'error', isLoading: false, autoClose: 5000, draggable: true, closeOnClick: true });
			}
			else {
				toast.update(toastId, { render: `Terjadi kesalahan. Silakan coba lagi"}`, type: 'error', isLoading: false, autoClose: 5000, draggable: true, closeOnClick: true });
			}
		}
		finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-primary flex flex-col">
			<Header shadow />
			<div className="w-full flex-grow grid place-items-center p-10 montserrat">
				<div className="flex flex-col gap-5 items-center text-white">
					<p className="font-medium text-3xl text-center">
						Ruang Ekspresi
					</p>
					<p className="font-medium text-sm text-center">
						Kamu dapat memberikan pesan ataupun kesan setelah kamu
						menyelesaikan kegiatan dalam perangkat pembelajaran ini.
					</p>
					<Rating
						name="highlight-selected-only size-large"
						value={rating}
						onChange={(e, newValue) =>
							newValue && setRating(newValue)
						}
						IconContainerComponent={IconContainer}
						highlightSelectedOnly
						size="large"
						disabled={loading}
					/>
					<textarea
						value={message}
						disabled={loading}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Tuliskan kesan dan pesanmu di sini"
						className="placeholder:italic bg-gray-100 w-full h-48 p-3 montserrat placeholder:text-gray-400 text-black text-sm rounded-md focus:outline-none disabled:opacity-80 disabled:cursor-not-allowed"
					/>
					<div className="flex place-items-end justify-between w-full">
						<button
							className="bg-white mt-8 mb-8 text-primary px-6 py-1 rounded-lg shadow-md disabled:opacity-80"
							disabled={loading}
							onClick={(e) => navigate(-1)}
						>
							Kembali
						</button>
						<button
							className="bg-orange-500 mt-8 mb-8 text-white px-6 py-1 rounded-lg shadow-md disabled:opacity-80"
							disabled={loading}
							onClick={handleSubmit}
						>
							{loading ? "Menyimpan..." : "Submit"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
