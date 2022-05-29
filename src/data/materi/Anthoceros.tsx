import Materi from "./Materi";

import gambarAnthoceros from "../../assets/images/Anthoceros/1.jpg";

class Anthoceros extends Materi {
	name = "Anthoceros";

	classification = {
		taxonomy: {
			Kingdom: "Plantae",
			Divisi: "Bryophyta",
			Kelas: "Bryopsida",
			Ordo: "Polytrichales",
			Famili: "Polytrichaceae",
			Genus: "Anthoceros",
			Spesies: "Anthoceros sp.",
		},
		author: "Mulyadi, 2014",
	};

	coverImage = {
		img: gambarAnthoceros,
		caption: "(Sumber: plantlet.org)",
	};

	sections = {
		Deskripsi: (
			<>
				<p className="blablabla">
					Anthoceros terdiri dari 200 spesies. Spesies ini tersebar
					luas di seluruh dunia, baik di daerah tropis dan beriklim
					sedang di dunia. Sekitar 25 spesies telah dilaporkan dari
					India. Kashyap melaporkan lima spesies dari Himalaya Barat.
					Mereka terjadi pada ketinggian 5000 - 8000ft. Spesies
					penting adalah A. Himalayensis A. erectus, A. chambensis.
				</p>
				<p>
					Spesies ini termasuk ke daam familia Anthoceratocea (Lumut
					tanduk) yang bentuk tubuhnya memanjang, rizoid yang panjang
					dan kasar bentuk tubuh terlihat jelas dan hidup berkoloni di
					pohon kelapa yang lembab yang dekat dengan sungai, jenis ini
					menempel di pohon tersebut sebagai epifit pada tumbuhan lain
					yang tidak merusak habitat maupun makanan yang diserap oleh
					tumbuhan yang ditempatinya.
				</p>
			</>
		),

		Habitat: (
			<>
				<p className="blablabla">
					Spesies Anthoceros lebih menyukai tempat yang teduh dan
					lembab. Mereka tumbuh di sepanjang tepi sungai, parit,
					sebagian besar lereng bukit. Dalam satu koloni terdapat
					beberapa individu yang menempel di pohon tersebut. Jenis ini
					ditemukan di daerah mendaki menempel pada salah satu pohon
					kelapa yang ada di lokasi tersebut. Selain itu, mereka tidak
					tahan dengan kondisi kering.
				</p>
			</>
		),

		Referensi: (
			<>
				<p>
					Reddy, S.M. (1996). <em>University Botany I: (Algae, Fungi,
					Bryophyta and Pteridophyta), Volume 1.</em> New Delhi: New Age
					International.
				</p>
				<p>
					Mulyadi, Hasanuddin. (2014). <em>Botani Tumbuhan Rendah.</em> Banda
					Aceh: Syiah Kuala University Press.
				</p>
			</>
		),
	};
}

export default new Anthoceros();
