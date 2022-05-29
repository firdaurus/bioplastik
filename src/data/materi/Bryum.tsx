import Materi from "./Materi";

import gambarBryum from "../../assets/images/Bryum/Bryum.png";
import gambarA from "../../assets/images/Bryum/a.png";
import gambarB from "../../assets/images/Bryum/b.png";
import gambarC from "../../assets/images/Bryum/c.png";
import gambarSiklusHidup from "../../assets/images/Bryum/siklusHidup.png";

class Bryum extends Materi {
	name = "Bryum";

	classification = {
		taxonomy: {
			Kingdom: "Plantae",
			Divisio: "Bryophyta",
			Classis: "Bryopsida",
			Ordo: "Bryales",
			Familia: "Bryaceae",
			Genus: "<em>Bryum</em>",
		},
	};

	coverImage = {
		img: gambarBryum,
		caption: <em>Gambar Lumut Bryum <br /> (Tim Pudak Scientific. 2014)</em>,
	};

	sections = {
		Deskripsi: (
			<p>
				<em>Bryum</em> merupakan tumbuhan lumut yang sangat mudah
				dijumpai. Batanya tinggi sekitar 1-3cm, dan daunnya lebar
				sekitar 2-5mm. Lumut ini memiliki warna hijau muda sampai hujau
				tua. Ketika akan berubah warna menjadi kekuningan. Talusnya
				berwarna hijau tua, uhung talusnya meruncing dan teksturnya
				halus. Tumbuh tegak, tinggi mencapai 4 cm, daun di ujung batang
				tersusun rapat. Tumbuh membentuk massa yang tebal, hidup di
				permukaan tanah, yang berhumus, batuan, pada tebing, atau lahan
				terbuka, di tempat yang lembab. Daun berwarna hijau pucat sampai
				hijau tua, tersusun melingkari batang, padat, berbentuk oval
				atau lancet. Sporangium berbentuk kapsul yang tegak ke atas atau
				sedikit melengkung. Tangkai atau seta melengkung, halus.
			</p>
		),

		Habitat: (
			<p>
				Bryum dapat tumbuh diatas tanah-tanah yang gundul yang peiodik
				mengalami masa kekeringan, bahkan diatas pasir yang bergerakpun
				tumbuhan ini dapat hidup. Lumut ini juga dapat pula kita temukan
				diantara rumput-rumpt, diatas cadas, pada batang-batang dan
				cabang-cabang, bahkan ada yang pada daun-daun,pohon-pohon, di
				rawa-rawa, tetapi jarang didalam air. Lumut daun atau lumut
				sejati dapat ditemukan di daerah kutub, tropis atau gurun.
			</p>
		),

		"Siklus Hidup": (
			<>
				<p>
					Ketika menjalani reproduksi seksual, sebagian besar lumut
					menghasilkan gametangia di ujung batang gametofit (Gbr. a).
					Gametangia sering dipisahkan dan ditahan tegak lurus oleh
					filamen yang disebut <em>paraphyses</em> (Gbr. b). Beberapa
					jenis lumut menghasilkan antheridia dan arckegonia pada
					tanaman yang terpisah. Jenis lain memiliki keduanya dalam
					satu tanaman, baik bersama-sama atau pada bagian tanaman
					yang terpisah.
				</p>
				<div className="flex flex-col items-center">
					{/* Gambar A */}
					<div>
						<img src={gambarA} alt="Gambar A" />
						<p className="text-center text-sm text-gray-800">
							Gambar A
						</p>
					</div>

					{/* Gambar B */}
					<div>
						<img src={gambarB} alt="Gambar B" />
						<p className="text-center text-sm text-gray-800">
							Gambar B
						</p>
					</div>

					{/* Gambar C */}
					<div>
						<img src={gambarC} alt="Gambar C" />
						<p className="text-center text-sm text-gray-800">
							Gambar C
						</p>
					</div>
				</div>
				<p>
					Antheridia menghasilkan sperma matang ketika ada air. Setiap
					sel sperma dilengkapi oleh dua flagel. Di beberapa lumut
					terdapat daun yang menyebar mengelilingi kepala antheridial
					seperti kelopak bunga. dan berfungsi sebagai tutup penyiprat
					air, menggunakan air tetesan hujan untuk mengeluarkan dan
					menyebarkan sperma. Sperma bisa tetap bertahan selama 6 jam
					dan berenang hingga 50 cm. Sel-sel sperma beberapa lumut,
					seperti <em>Bryum capillare</em>, pada kesempatan langka
					dapat melekat di serangga yang tertarik pada kepala
					antheridial, dikarenakan warnanya yang merah dan kuning atau
					akibat sekresi dari parafrase.
				</p>
				<p>
					Setiap archegonium memiliki leher yang panjang, daerah perut
					yang menebal itu mengelilingi sel telur tunggal, dan
					memiliki tangkai yang panjang (Gbr. 22.15c). Ketika telur
					sudah matang, leher akan terbuka dan membentuk suatu kanal.
					Akibat tertarik oleh adanya zat kimia yang dipancarkan oleh
					sel telur, sperma kemudian berenang ke bawah kanal menuju
					sel telur. Air diperlukan untuk membawa sperma dari
					antheridium ke sel telur, dan daun-daun yang tersusun di
					sekitar kepala archegonial dan antheridial membantu
					mempertahankan air di atas gametangia. Ketika sel sperma
					mencapai sel telur, sperma akan membuahi sel telur, dan
					membentuk sel zigot yang diploid.
				</p>

                {/* Gambar C */}
                <div className="flex flex-col items-center">
					<div>
						<img src={gambarSiklusHidup} alt="Gambar Siklus Hidup" />
						<p className="text-center text-sm text-gray-800">
							Gambar Siklus Hidup
						</p>
					</div>
                </div>
			</>
		),
        "Daftar Pustaka": (
            <>
                <p>
                Tim Pudak Scientific. 2014. <em>Buku Deskripsi dan Kunci Determinasi Bryophyta</em>. Bandung: Pudak Scientific.
                </p>
            </>
        ),
	};
}

export default new Bryum();
