import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import {
	Soal,
	getScore,
	getKuisesFromPart,
	getMinimizedKuisData,
} from "../data/kuis";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { saveScore, saveLatestKuisData } from "../redux/slices/dataSlice";

export default function Kuis() {
	const dispatch = useAppDispatch();
	const kuisPart = useAppSelector((state) => state.partSoal);
	const navigate = useNavigate();

	const [kuises, setKuises] = useState<Soal[]>([]);

	useEffect(() => {
		if (kuisPart < 0) {
			//If the user is not logged in, redirect to home page
			navigate("/", { replace: true });
			return;
		} else {
			setKuises(getKuisesFromPart(kuisPart));
		}
	}, [kuisPart, navigate]);

	const handleSelectAnswer = (questionId: number, answerId: number) => {
		setKuises((prev) => {
			return prev.map((kuis) => {
				if (kuis.id === questionId) {
					kuis.answer = answerId;
				}
				return kuis;
			});
		});
	};
	const handleBack = () => {}; //TODO: Implement this
	const handleSubmit = () => {
		let score = getScore(kuises);

		dispatch(saveScore(score));
		dispatch(saveLatestKuisData(getMinimizedKuisData(kuises))); //Save the latest kuis data
		navigate("/nilai");
	};

	return (
		<div className="flex flex-col gap-2">
			<Header />
			<span className="font-bold text-2xl underline text-center mt-4">
				KUIS
			</span>
			<div className="flex flex-col px-6 select-none">
				{kuises.map((kuis, i) => (
					<div
						key={i}
						className="w-full py-10 px-4 border-b border-gray-300 flex flex-col items-start"
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
									return (
										<div key={j} className="flex">
											{/* <p>{abjad[j]}.&nbsp;{pilihan}</p> */}
											<input
												onChange={() =>
													handleSelectAnswer(
														kuis.id,
														pilihan.id
													)
												} //TODO: Implement onChange event
												type="radio"
												id={`${i}_${j}`}
												name={`soal_${i}`}
												value={j}
												className="mt-1 mr-2"
											/>
											<label htmlFor={`${i}_${j}`}>
												{pilihan.teks}
											</label>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-between px-6 pb-4">
				<button
					className="text-orange-600 mt-8 mb-8 border border-orange-600 px-6 py-1 rounded-lg shadow-md"
					onClick={handleBack}
				>
					Kembali
				</button>
				<button
					className="text-white mt-8 mb-8 bg-primary px-6 py-1 rounded-lg shadow-md"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
			{/* <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleWarna}>Ubah Warna</button>
            <button onClick={handleVisibility}>{isVisible ? 'Sembunyikan' : 'Tampilkan'}</button>
            <span className={`text-2xl text-${warna}-700 ${isVisible ? '' : 'hidden'}`}>{count}</span> */}
		</div>
	);
}
