import Materi from "./Materi";
import gambar1 from "../../assets/images/Polytrichum/1.jpg";
import gambar2 from "../../assets/images/Polytrichum/2.png";

class Polytrichum extends Materi {
	name = "Polytrichum";

	classification = {
		taxonomy: {
			kingdom: "Plantae",
			division: "Bryophyta",
			class: "Bryopsida",
			order: "Polytrichales",
			family: "Polytrichaceae",
			genus: "Polytrichum",
		},
	};

	coverImage = {
		img: gambar1,
		caption: (
			<div className="flex flex-col items-center">
				<span>
					<em>Lumut Polytrichum</em>
				</span>
				<span>(Sumber: Landry, 2010)</span>
			</div>
		),
	};

	sections = {
		Deskripsi: (
			<>
				<p>
					<em>Polytrichum</em> sp. memiliki bentuk tubuh tegak
					menyerupai tanaman tingkat tinggi dengan batang keras,
					ditutupi daun semu pada hampir setengah batangnya.
					Sporogonium dari <em>Polytrichum</em> sp. berbentuk lonjong
					bersifat elastis membentuk koloni yang luas dan membentuk
					benang dengan panjang batang 1-8 cm. Sporogonium atau kapsul
					yang belum matang ditutupi oleh kaliptra yang berambut
					berwarna kuning kecoklatan dengan tangkai kapsul yang
					berwarna merah. Kapsul yang sudah matang bersudut dan
					memiliki 4 sisi. Spora berwarna coklat dikeluarkan oleh
					kapsul yang sudah matang. Talus pada <em>Polytrichum</em>{" "}
					sp. berbentuk seperti jarum dan berwarna hijau karena
					habitatnya berada di zona amphibious.
					<em>Polytrichum</em> sp. juga memiliki kaliptra seta yang
					merupakan tangkai kaliptra serta rizoid yang menyerupai
					seperti akar.
				</p>
				<p>
					Menurut Fu, Peng (2009), <em>Polytrichum</em> sp. disebut
					juga sebagai lumut
					<em>hair cap</em> atau lumut rambut yang tersebar di daerah
					tropis. Tidak hanya itu, jenis ini umumnya juga ditemukan di
					daerah yang cerah dengan sedikit naungan, sehingga dapat
					menahan paparan sinar matahari, karena
					<em>Polytrichum</em> umumnya berada di tanah organik dengan
					kelembaban yang terus menerus, sehingga biasanya{" "}
					<em>Polytrichum</em> sp. banyak ditemukan di pinggir sungai,
					tanah liat, batuan, kayu-kayu kering, lumpur serta gundukan
					pasir. <em>Polytrichum</em> sp. memiliki tinggi hingga
					mencapai 1.400 m dpl.
				</p>
				<p>
					<em>Polytrichum</em> sp. ini dapat dimanfaatkan sebagai
					bahan pembuat kasur yang memiliki nilai ekonomi yang cukup
					tinggi sebagai tanaman hias. Tidak hanya itu,{" "}
					<em>Polytrichum</em> sp. juga dapat dimanfaatkan sebagai
					obat demam dan penyakit radang hati atau hepatitis, sebagai
					bahan bakar (<em>sphagnum</em>) atau atap rumah. Sedangkan
					manfaat bagi lingkungan adalah mampu menyobek struktur batu
					menjadi tanah, berperan dalam ketersediaan air dan mencegah
					banjir dalam ekosistem hutan. Selain itu, tumbuhan ini juga
					digunakan untuk menjaga tanah dari erosi dan kekeringan pada
					musim kemarau.
				</p>
			</>
		),
		Habitat: (
			<p>
				Polytrichum tersebar di daerah tropis, khususnya tanah humus
				lembab dan tanah mineral di dekat air. tumbug gingga ketinggian
				1.400m dpl. Polytrichum umumnya tumbuh di tanah, tebing-tebing
				basah, dan di atas batu cadas.
			</p>
		),
		"Siklus Hidup": (
			<div className="flex flex-col items-center">
				<p>
					Polytrichum bereproduksi sama seperti jenis lumut lainnya
					yaitu melalui dua tahapan sporofit dan gametofit. Tahapan
					reproduksinya dimulai dari spora yang berkembang menjadi
					protonema. Protonema kemudian berkembang dengan pemisahan
					cabang-cabangnya yang menjadi lumut muda. Pada lumut muda
					ini terdapat gametofit yang menghasilkan arkegonium dan
					antheridium. Arkegonium penghasil sel induk dan antheridium
					penghasil sel sperma akan bergabung menjadi satu sehingga
					terjadi fertilisasi membentuk zigot. Zigot merupakan tahap
					awal terbentuknya generasi sporofit yang akan tumbuh menjadi
					tangkai, kapsul di bagian ujungnya dan sporofit dewasa yang
					tersusun dari kaki untuk pelekat pada gametofit yang
					terbentuk dari pembelahan zigot. Sporangium merupakan tempat
					penghasil spora melalui meiosis. Polytrichum mempunyai sifat
					dioecious yang artinya organ reproduksinya yang berupa
					arkegonium dan anteridium berada terpisah pada tumbuhan yang
					berbeda. Polytrichum mempunyai bentuk arkegonium seperti
					labu dengan tangkai yang sangat pendek yang mengandung sel
					induk, sedangkan mempunyai anteridium berbentuk seperti gada
					dengan tangkai pendek yang didalamnya terdapat sel sperma.
				</p>
				<div>
					<img src={gambar2} alt="Gambar Siklus hidup Polytrichum" />
					<p className="text-center text-sm text-gray-800">
						Gambar siklus hidup <em>Polytrichum</em> (sumber:
						Hasanuddin &amp; Mulyadi, 2015)
					</p>
				</div>
			</div>
		),
		"Daftar Pustaka": (
			<>
				<p>
					Fu, Peng. et al. 2009.{" "}
					<em>
						Constituents of the Moss Polytrichum commune. J. Nat.
						Prod.
					</em>{" "}
					<a
						className="link"
						href="https://doi.org/10.1021/np800830v"
					>
						https://doi.org/10.1021/np800830v
					</a>
				</p>
				<p>
					Hasanuddin &amp; Mulyadi. 2015.{" "}
					<em>Botani Tumbuhan Rendah.</em> Banda Aceh: USK Press.{" "}
					<a
						className="link"
						href="https://doi.org/10.1590/S0031-901020150002000000"
					>
						https://doi.org/10.1590/S0031-901020150002000000
					</a>
				</p>
				<p>
					Landry, Louis-M. 2010.{" "}
					<em>Polytrichum sp. Photo Database.</em> (Online){" "}
					<a
						className="link"
						href="https://calphotos.berkeley.edu/cgi/img_query?enlarge=0000+0000+0610+0505"
					>
						https://calphotos.berkeley.edu/cgi/img_query?enlarge=0000+0000+0610+0505.
					</a>{" "}
					diakses pada 27 Juni 2021.{" "}
				</p>
				<p>
					Tim Pudak Scientific. 2014.{" "}
					<em>Buku Deskripsi dan Kunci Determinasi Bryophyta.</em>{" "}
					Bandung: Pudak Scientific.
				</p>
			</>
		),
	};
}

export default new Polytrichum();
