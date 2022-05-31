import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useMateri } from "../pages/Materi";
import { titleCase, slugToTitle } from "../utils/helper";

export default function DetailMateri() {
	const navigate = useNavigate();
	const { sectionName } = useParams();
	const { materi } = useMateri();

	const handleClickBack = () => {
		navigate(-1);
	};

	return (
		<div className="mt-8">
			{sectionName === "taksonomi" ? (
				<div className="flex flex-col gap-4">
					<p className="border-b border-gray-400 font-semibold text-xl">
						Taksonomi
					</p>
					<div className="mt-1 grid grid-cols-10">
						{Object.entries(materi.classification.taxonomy).map(
							(tingkatan) => (
								<>
									<span className="col-span-2">
										{tingkatan[0]}
									</span>
									<span className="col-start-3 col-end-4 text-center">
										:
									</span>
									<span className="col-start-4 col-end-11" dangerouslySetInnerHTML={{ __html: tingkatan[1]}} />
								</>
							)
						)}

						{/* Author */}
            {
              materi.classification.author && <>
                <span className="col-span-2"></span>
                <span className="col-start-3 col-end-4 text-center"></span>
                <span className="col-start-4 col-end-11">
                  ({materi.classification.author})
                </span>
              </>
            }
					</div>
				</div>
			) : sectionName ? <div className="select-none tracking-wide flex flex-col gap-4">
        <h3 className="border-b border-gray-400 font-semibold text-xl tracking-normal">{ titleCase(slugToTitle(sectionName)) }</h3>
        { materi.getSectionJSX(sectionName) }
      </div>
      : (
				<Navigate to="/materi" />
			)}
			{/* Navigation */}
			<div className="flex justify-around gap-3">
				<button
					className="text-white w-full mt-8 mb-8 bg-green-500 px-6 py-1 rounded-lg shadow-md"
					onClick={handleClickBack}
				>
					Kembali
				</button>
			</div>
		</div>
	);
}
