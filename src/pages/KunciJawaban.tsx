import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import { Soal, rawDataToKuis } from "../data/kuis";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearData } from "../redux/slices/dataSlice";
import appConfig from "../utils/appConfig";

const config = appConfig.kunciJawaban;

export default function KunciJawaban() {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const rawKuisData = useAppSelector((state) => state.latestKuisData);
	const scores = useAppSelector((state) => state.scores);

	const [kuises, setKuises] = useState<Soal[]>([]);

	useEffect(() => {
		if (rawKuisData.length < 1) {
			//If the user is not logged in, redirect to home page
			navigate("/", { replace: true });
			return;
		}

		setKuises(rawDataToKuis(rawKuisData));
	}, [rawKuisData, navigate]);

	const handleRetry = () => {}; //TODO: Implement this

	const handleExit = () => {
		dispatch(clearData());
		navigate("/", { replace: true }); //TODO: Redirect to thank you page
	};

	return (
		<div className="flex flex-col gap-2">
			<Header />
			<span className="font-bold text-2xl underline text-center mt-4">
				KUNCI JAWABAN
			</span>
			<p className="pl-8">Nilaimu adalah: <strong className="py-1 px-2 rounded-md bg-sky-800 text-white">{ [...scores].pop() }</strong></p>
			<div className="flex flex-col select-none">
				{kuises.map((kuis, i) => {
					const isCorrectAnswer = kuis.pilihans.find(
						(x) => x.id === kuis.answer
					)?.isCorrect;

					return (
						<div
							key={i}
							className={`w-full py-10 px-8 border-b border-gray-300 flex flex-col items-start ${
								isCorrectAnswer && config.highlightCorrectAnswer
									? "bg-green-100"
									: !isCorrectAnswer &&
									  config.highlightWrongAnswer
									? "bg-red-100"
									: ""
							}`}
						>
							{
								//Show question picture if any
								kuis.soal.gambar && (
									<img
										src={kuis.soal.gambar}
										alt="Gambar"
										className="object-scale-down object-left pl-6"
									/>
								)
							}
							<div className="flex gap-1">
								<span>{i + 1}.&nbsp;</span>
								<div className="flex  flex-col gap-1">
									<div className="text-justify">
										{kuis.soal.teks}
									</div>
									{kuis.pilihans.map((pilihan, j) => {
										const accentType =
											kuis.answer === pilihan.id
												? pilihan.isCorrect
													? "correct"
													: "wrong"
												: pilihan.isCorrect ? "correct" : "neutral";
										const isCorrectPilihan = pilihan.isCorrect;
										return (
											<div key={j} className="flex">
												{/* <p>{abjad[j]}.&nbsp;{pilihan}</p> */}
												<input
													type="radio"
													id={`${i}_${j}`}
													// name={`soal_${i}`}
													value={j}
													className={`mt-1 mr-2 ${
														accentType === "correct"
															? "accent-green-500"
															: accentType ===
															  "wrong"
															? "accent-red-500"
															: "accent-gray-700"
													}`}
													// disabled
													checked={
														(kuis.answer ===
														pilihan.id) || isCorrectPilihan
													}
												/>
												<label htmlFor={`${i}_${j}`} className={ isCorrectPilihan ? "font-semibold text-green-700" : accentType === "wrong" ? "text-red-700" : "" }>
													{pilihan.teks}
												</label>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex justify-between px-6 pb-4">
				<button
					className="text-orange-600 mt-8 mb-8 border border-orange-600 px-6 py-1 rounded-lg shadow-md"
					onClick={handleRetry}
				>
					Coba Lagi
				</button>
				<button
					className="text-white mt-8 mb-8 bg-primary px-6 py-1 rounded-lg shadow-md"
					onClick={handleExit}
				>
					Keluar
				</button>
			</div>
			{/* <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleWarna}>Ubah Warna</button>
            <button onClick={handleVisibility}>{isVisible ? 'Sembunyikan' : 'Tampilkan'}</button>
            <span className={`text-2xl text-${warna}-700 ${isVisible ? '' : 'hidden'}`}>{count}</span> */}
		</div>
	);
}
