import Materi from "./Materi";

import gambar1 from "../../assets/images/Campylopus/1.png";
import gambar2 from "../../assets/images/Campylopus/2.png";
import gambar3 from "../../assets/images/Campylopus/3.png";

class Camphylopus extends Materi {
	name = "Camphylopus";

	classification = {
		taxonomy: {
			kingdom: "Plantae",
			phylum: "Bryophyta",
			class: "Bryopsida",
			order: "Dicranales",
			family: "Dicranaceae",
			genus: "Camphylopus",
			author: "(Sopacua, dkk. 2020)",
		},
	};

	coverImage = {
		img: gambar2,
		caption: "(Sumber: Afrida Khairani Manurung. 2019)",
	};

	section = {
		Deskripsi: (
			<div className="flex flex-col items-center">
				{/* Gambar 1 */}
				<div>
					<img src={gambar1} alt="Gambar 1" />
					<p className="text-center text-sm text-gray-800">
						Sumber: Sri Lilis Herlianty. 2018
					</p>
				</div>

				{/* Gambar 2 */}
				<div>
					<img src={gambar2} alt="Gambar 2" />
					<p className="text-center text-sm text-gray-800">
						Sumber: Afrida Khairani Manurung. 2019
					</p>
				</div>

				<p>
					Genus Campylopus adalah genus yang besar dan taksonomi
					kelompok kompleks yang terdistribusi di seluruh dunia. Frahm
					(1987) menganggap bahwa genus ini berasal dari wilayah
					subantartika di dunia; dalam hal jumlah spesies, kelompoknya
					paling banyak terdiversifikasi di Amerika Tengah dan
					Selatan.
				</p>
				<p>
					Lumut ini mempunyai batang yang agak tegar sekitar 7 mm dan
					berbentuk serabut banyak, berwarna hijau muda-kekuningan.
					Bentuk daunnya (lancecolate) yaitu berbentuk seperti ujung
					tombak, sempit dan meruncing dari dasar daun. Ujung daunnya
					lancip dengan tepi daun rata, serta susunan daunnya
					berselang seling. Lumut ini biasanya disebut lumut gambut
					yang dapat mengoksidasi daerah sekitarnya dan pada umumnya
					banyak ditemukan di rawa-rawa. Lumut ini pada saat
					penelitian ditemukan membentuk rumpun di tanah. Lumut ini
					terdiri dari kelompok kecil yang lembut.
				</p>

				{/* Gambar C */}
				<div className="flex flex-col items-center">
					<img src={gambar3} alt="" />
				</div>

				<p>
					Selain itu, menurut Storey (2010), Morfologi dari
					<em>Campylopus</em>
					sp bentuk sporofit seperti tiang yaitu memanjang ke arah
					atas, dan arah tumbuhnya vertikal dan berkormus. Bentuk
					daunnya seperti jarum tidak berurat dan melingkar dan tidak
					memiliki pola percabangan dan memiliki ciri khas sendiri
					yaitu mirip benang terpilin. Daun-daun serupa jarum bersifat
					keras dan daun-daun mudanya di ujung seolah-olah bersatu
					serupa jarum pula, tetapi beberapa cabang, daun-daun di
					ujung membentuk bangun cawan, sedangkan di bagian bawahnya
					daun-daun itu merapat dengan batangnya.
				</p>
			</div>
		),

		Habitat: (
			<p>
				Genus Campylopus memiliki luas rentang garis lintang antara 65°N
				(Alaska) dan dan 65°S (Kepulauan Sandwich Selatan) dan rentang
				ketinggian yang sangat besar antara permukaan laut dan
				ketinggian lebih dari 4500 m. Spesies ini hidup pada berbagai
				jenis yang berbeda substrat seperti pasir miskin nutrisi, humic
				tanah, gambut, batu, kayu busuk dan hidup. (Schuster. 1984)
			</p>
		),

		Referensi: (
			<>
				<p>
					Frahm, J.-P,. &amp; S.R. Gradstein. 1987.
					<em>
						The genera Bryohumbertia and Campylopus (Musci) in the
						Guianas.
					</em>
					Cryptogamie, Bryologie et Lichenologie 8(4):291-388.
				</p>
				<p>
					Khairani Manurung, Afrida. 2019.
					<em>Taksonomi Organisme Tingkat Rendah.</em> Fakultas
					Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri
					Medan.
				</p>
				<p>
					Lilis Herlianty, Sri. 2018.
					<em>
						Menelusuri Keanekaragaman Hayati sebagai Penyokong
						Kehidupan.
					</em>
					Direktorat Pembinaan Pendidikan Keaksaraan dan
					Kesetaraan-Ditjen Pendidikan Anak Usia Dini dan Pendidikan
					Masyarakat-Kementerian Pendidikan dan Kebudayaan.
				</p>
				<p>
					Schuster, R.M. 1984.{" "}
					<em>Phytogeography of European Campylopusspecies.</em>{" "}
					Proceeding of the Third Meeting of Bryologists from Central
					and Eastern Europe, Praha, pp. 191-212.
				</p>
				<p>
					Storey, Malcolm. 2010. <em>Campylopus atrovirens.</em> [online].
					Tersedia: http://www.bioimages.org.uk/html/p4/p46498.php [10
					Mei 2022]
				</p>
			</>
		),
	};
}

export default new Camphylopus();
