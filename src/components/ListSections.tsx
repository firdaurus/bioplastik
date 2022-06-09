import { Link, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

import { useMateri } from "../pages/Materi";
import { slugify } from "../utils/helper";

export default function ListSections() {
    const navigate = useNavigate();
	const { materi } = useMateri();

    function handleClickKuis(){
        navigate('/kuis')
    }

    function handleClickRuangEkspresi(){
        navigate('/ruang-ekspresi')
    }

	return (
		<div>
			{materi.getSectionNames().map((sectionName, i) => (
				<Link
					key={i}
					to={slugify(sectionName)}
					className="bg-primary mt-5 flex items-center justify-between text-2xl text-white p-4 font-medium rounded-lg"
				>
					<p>{sectionName}</p>
					<BsChevronRight width={"2rem"} />
				</Link>
			))}
			<div className="flex justify-around gap-3">
				<button
					className="text-white w-full mt-8 mb-8 bg-green-500 px-6 py-1 rounded-lg shadow-md"
					onClick={handleClickRuangEkspresi}
				>
					Ruang Ekspresi
				</button>
				<button
					className="text-white w-full mt-8 mb-8 bg-orange-500 px-6 py-1 rounded-lg shadow-md"
					onClick={handleClickKuis}
				>
					Kuis
				</button>
			</div>
		</div>
	);
}
