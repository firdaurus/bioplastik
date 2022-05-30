import Materi from "./Materi";
import gambarRhodobryum from "../../assets/images/Rhodobryum/Rhodobryum.jpg";
import gambarSiklusHidup from "../../assets/images/Rhodobryum/SiklusHidup.png";

class Rhodobryum extends Materi {
	name = "Rhodobryum";

	classification = {
		taxonomy: {
			Kingdom: "Plantae",
			Divisio: "Bryophyta",
			Classis: "Bryopsida",
			Ordo: "Bryales",
			Familia: "Bryaceae",
			Genus: "Rhodobryum",
		},
	};

	coverImage = {
		img: gambarRhodobryum,
		caption: (
			<div>
				{/* <p className="font-semibold text-center italic">Lumut Rhodobryum</p> */}
				<p className="text-center">(Sumber: Azuelo. dkk, 2010)</p>
			</div>
		),
	};

	sections = {
		Deskripsi: (
			<p>
				Genus Rhodobryum tergolong sebagai tanaman besar dalam keluarga
				Bryaceae. Rhodobryum memiliki tinggi 1-5 cm dengan tangkai daun
				yang tidak bercabang. Panjang tangkai 4-10 mm, daun tersusun
				dalam roset antara 18-55 helai, biasanya lebih dari 20 helai.
				Daun melebar di bagian tengah, kemudian mengerucut di bagian
				ujung. Sporangium berbentuk kapsul. Lumut ini berkembangbiak
				secara aseksual melalui batang primernya yang seperti stolon.
				Terkadang juga dengan batang sekundernya. Lumut dari genus ini
				merupakan tanaman tahunan yang selalu berwarna hijau dan
				membentuk koloni. <em>Rhodobryum</em> ini cenderung bertahan di
				kondisi yang lembab, sehingga banyak tumbuh di tanah yang subur
				di hutan, sepanjang pinggir hutan, pada batang kayu lapuk, di
				bawah pohon, tanah di sekitar bebatuan atau pada batuan,
				kadang-kadang di karang pada ketinggian 0-3000 m dpl. Beberapa
				lumut dari genus ini banyak dimanfaatkan, misalnya{" "}
				<em>Rhodobryum giganteum</em> dan
				<em>Rhodobryum roseum</em> dalam bidang kesehatan digunakan
				untuk membantu mengatasi gangguan <em>cardiovascular</em> dan
				sistem saraf. Tidak hanya itu, biasanya juga digunakan untuk
				obat angin karena mengandung <em>volatile oils, lactones</em>{" "}
				dan <em>amino acids</em>.
			</p>
		),

		Habitat: (
			<>
				<p className="blablabla">
					Banyak tumbuh di tanah yang subur di hutan, sepanjang
					pinggir hutan, pada kayu lapuk, di bawah pohon, tanah di
					sekitar bebatuan atau pada batuan, kadang-kadang di karang,
					pada ketinggian 0 - 3.000 m dpl.
				</p>
			</>
		),

		"Siklus Hidup": (
			<>
				<p>
					Siklus hidup lumut <em>Rhodobryum</em> sama seperti siklus
					hidup secara umum. Terdapat sedikit perbedaan pada struktur
					daun yaitu melebar di bagian tengah dan mengerucut di ujung.
					Sporangium berbentuk kapsul. Siklus hidup dimulai dari spora
					yang tumbuh menjadi protonema. Kemudian protonema akan
					menghasilkan gametofit. Pada generasi gametofit ini
					menghasilkan anteridium dan arkegonium. Anteridium
					menghasilkan sel sperma akan bergabung dengan arkegonium
					yang menghasilkan sel telur sehingga terjadi fertilisasi
					membentuk zigot. Zigot merupakan tahap awal terbentuknya
					generasi sporofit yang akan tumbuh menjadi tangkai, kapsul
					di bagian ujungnya dan sporofit dewasa yang tersusun dari
					kaki untuk pelekat pada gametofit yang terbentuk dari
					pembelahan zigot. Sporangium merupakan tempat penghasil
					spora melalui meiosis. Siklus hidup lumut dikatakan lengkap
					apabila spora telah dewasa dan terbebas dari sporangium
					(Hasan &amp; Ariyanti, 2004).
				</p>
				<img src={gambarSiklusHidup} alt="Siklus Hidup" />
				<caption className="text-center">
					Gambar Siklus hidup <em>Rhodobryum</em> (sumber: Hasanuddin
					&amp; Mulyadi, 2015)
				</caption>
			</>
		),

		Referensi: (
			<>
				<p>
					Azuelo, Andrea., dkk. 2010. Diversity Ecological Status of
					Bryophytes in Mt. Kitanglad, Bukidnom.{" "}
					<em>Asian Journal of Biodiversity.</em> Vol. 1 No. 1. doi:{" "}
					<a className="underline text-blue-500" href="http://dx.doi.org/10.7828/ajob.v1i1.102">
						http://dx.doi.org/10.7828/ajob.v1i1.102
					</a>
					.
				</p>
				<p>
					Hasan, M &amp; Ariyanti, N.S. 2004.{" "}
					<em>
						Mengenal Bryophyta (Lumut) Tanam Nasional Gunung Gede
						Pangrango Volum 1.
					</em>{" "}
					Balai Tanam Nasional Gunung Gede Pangrango. Cibodas.
				</p>
				<p>
					Hasanuddin &amp; Mulyadi. 2015.{" "}
					<em>Botani Tumbuhan Rendah.</em> Banda Aceh: USK Press.
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

export default new Rhodobryum();
