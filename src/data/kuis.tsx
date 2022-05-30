import { shuffleArray } from "../utils/helper";
import appConfig from "../utils/appConfig";

import gambar1 from "../assets/images/Kuis/1.jpeg";
import gambar8 from "../assets/images/Kuis/8.jpg";
import gambar9 from "../assets/images/Kuis/9.jpg";
import gambar14 from "../assets/images/Kuis/14.jpg";
import gambar17 from "../assets/images/Kuis/17.png";
import gambar22 from "../assets/images/Kuis/22.jpg";
import gambar27 from "../assets/images/Kuis/27.jpg";

export interface Soal {
	id: number;
	soal: {
		gambar?: string;
		teks: JSX.Element | string;
	};
	pilihans: {
		id: number;
		teks: JSX.Element | string;
		isCorrect: boolean;
	}[];
	answer?: number;
}

export interface MinimizedKuisData {
	id: number;
	pilihans: number[];
	answer: number;
}

export const getSoalFromId = (id: number) => {
	const result = kuis.find((soal) => soal.id === id);
	if (!result) throw new Error("Kuis Not Found");
	return result;
};

export const getKuisesFromPart = (part: number) => {
	const kuises = kuis
		.filter((_, i) => i >= part * 10 && i < (part + 1) * 10)
		.map((kuis) => ({
			...kuis,
			pilihans: appConfig.kuis.shuffleAnswer
				? shuffleArray(kuis.pilihans)
				: kuis.pilihans, // Shuffle answer if configured so
		}));

	if (appConfig.kuis.shuffleQuestion) {
		// Shuffle kuises if configured so
		return shuffleArray(kuises);
	}

	return kuises;
};

export const getScore = (kuises: Soal[]) => {
	let score = 0;
	kuises.forEach((kuis) => {
		if (
			kuis.pilihans.find((pilihan) => pilihan.id === kuis.answer)
				?.isCorrect
		) {
			score++;
		}
	});
	return (score / kuises.length) * 100; //Save as 100 scale
};

export const getMinimizedKuisData = (kuises: Soal[]) => {
	return kuises.map((kuis) => ({
		id: kuis.id,
		pilihans: kuis.pilihans.map((pilihan) => pilihan.id),
		answer: kuis.answer,
	}));
};

export function rawDataToKuis(data: MinimizedKuisData[]): Soal[] {
	return data.map((x) => {
		return {
			...getSoalFromId(x.id),
			pilihans: x.pilihans.map(
				(idPilihan) =>
					getSoalFromId(x.id).pilihans.find(
						(pilihan) => pilihan.id === idPilihan
					)!
			),
			answer: x.answer,
		};
	});
}

const kuis: Soal[] = [
	{
		id: 1,
		soal: {
			teks: (
				<div className="">
					<p>Perhatikan tabel berikut:</p>
					<img src={gambar1} alt="Gambar 1" />
					<p>
						Karakteristik <em>Bryophyta</em> ditunjukkan oleh huruf
						…
					</p>
				</div>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: "A",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "B",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "C",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "D",
				isCorrect: true,
			},
		],
	},
	{
		id: 2,
		soal: {
			teks: (
				<p>
					<em>Bryophyta</em> terdiri dari 3 kelas, yaitu :
				</p>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Hepaticopsida, Anthoceropsida, Bryopsida</em>,
				isCorrect: true,
			},
			{
				id: 1,
				teks: <em>Hepaticopsida, Pteridophyta, Anthoceropsida</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Anthoceropsida, Monopsida, Bryopsida</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Dyopsida, Hepaticopsida, Bryopsida</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 3,
		soal: {
			teks: (
				<p>
					Yang merupakan kelompok <em>Bryophyta</em> yang memiliki
					struktur mirip dengan tumbuhan adalah …
				</p>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryopsida</em>,
				isCorrect: true,
			},
			{
				id: 1,
				teks: <em>Hepaticopsida</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Bryophyta</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Anthoceropsida</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 4,
		soal: {
			teks: (
				<p>
					Reproduksi jantan pada <em>Bryophyta</em> disebut … dan
					memproduksi … yang menjadi gamet.
				</p>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: "Antheridium, spermatozoid",
				isCorrect: true,
			},
			{
				id: 1,
				teks: "Antheridium, ovum",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Arkegonium, spora",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Arkegonium, spermatozoid",
				isCorrect: false,
			},
		],
	},
	{
		id: 5,
		soal: {
			teks: "Bagian lumut yang berbentuk benang-benang  halus tumbuh ke arah bawah dari pangkal batangnya disebut …",
		},
		pilihans: [
			{
				id: 0,
				teks: "Hifa",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "Rizoid",
				isCorrect: true,
			},
			{
				id: 2,
				teks: "Sporangium",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Algal",
				isCorrect: false,
			},
		],
	},
	{
		id: 6,
		soal: {
			teks: "Lumut yang mempunyai sebutan tumbuhan perintis ialah …",
		},
		pilihans: [
			{
				id: 0,
				teks: "Lumut kerak",
				isCorrect: true,
			},
			{
				id: 1,
				teks: "Lumut hati",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Lumut sejati",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Lumut daun",
				isCorrect: false,
			},
		],
	},
	{
		id: 7,
		soal: {
			teks: (
				<p>
					<em>Bryophyta</em> dapat dianggap sebagai tumbuhan karena
					memiliki beberapa ciri yang sama. Namun perbedaan utamanya
					adalah …
				</p>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: "Lumut mempunyai proses fotosintesis yang sederhana",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "Lumut mempunyai struktur yang sederhana",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Lumut tidak mempunyai jaringan pembuluh",
				isCorrect: true,
			},
			{
				id: 3,
				teks: "Lumut bisa menyerap dan mineral secara langsung",
				isCorrect: false,
			},
		],
	},
	{
		id: 8,
		soal: {
			teks: (
				<div>
					<img src={gambar8} alt="Gambar Lumut" />
					<p>Gambar lumut diatas merupakan genus …</p>
				</div>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryum</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Rhodobyrum</em>,
				isCorrect: true,
			},
			{
				id: 2,
				teks: <em>Dicranum</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Polytrichum</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 9,
		soal: {
			teks: (
				<div>
					<img src={gambar9} alt="Gambar" />
					<p>Bagian seta ditunjuk pada nomor …</p>
				</div>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: "1",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "2",
				isCorrect: true,
			},
			{
				id: 2,
				teks: "3",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "4",
				isCorrect: false,
			},
		],
	},
	{
		id: 10,
		soal: {
			teks: "Sore itu Dodi bermain di belakang rumah dan menemukan lumut dibawah pohon. Lumut itu memiliki ciri-ciri tangkai daun tidak bercabang, tingginya paling tinggi 5cm, daun tersusun dalam roset 18-55 helai dan mempunyai daun melebar di bagian tengah, kemudian mengerucut di bagian ujung. Lumut yang ditemukan Dodi merupakan lumut genus …",
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryum</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Fissidens</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Rhodobryum</em>,
				isCorrect: true,
			},
			{
				id: 3,
				teks: <em>Polytrichum</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 11,
		soal: {
			teks: "Lumut yang bisa digunakan sebagai obat bius adalah …",
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Fissidens</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Polytrichum</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Bryum</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Rhodobryum</em>,
				isCorrect: true,
			},
		],
	},
	{
		id: 12,
		soal: {
			teks: "Spora pada lumut berkecambah untuk membentuk …",
		},
		pilihans: [
			{
				id: 0,
				teks: "Protonema",
				isCorrect: true,
			},
			{
				id: 1,
				teks: "Hifa",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Protalum",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Gemmae",
				isCorrect: false,
			},
		],
	},
	{
		id: 13,
		soal: {
			teks: (
				<p>
					Kebanyakan <em>Bryophyta</em> hanya memiliki tinggi beberapa
					cm saja karena tidak mempunyai …
				</p>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: "Organ reproduksi",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "Jaringan pembuluh",
				isCorrect: true,
			},
			{
				id: 2,
				teks: "Daun",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Batang",
				isCorrect: false,
			},
		],
	},
	{
		id: 14,
		soal: {
			teks: (
				<div>
					<img src={gambar14} alt="Gambar Lumut" />
					<p>Gambar lumut diatas merupakan genus …</p>
				</div>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryum</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Rhodobyrum</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Dicranum</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Polytrichum</em>,
				isCorrect: true,
			},
		],
	},
	{
		id: 15,
		soal: {
			teks: "Lumut ini termasuk dalam spesies lumut tertinggi karena dapat tumbuh 30 cm hingga 70 cm. Lumut yang dimaksud adalah …",
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryum</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Rhodobyrum</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Dicranum</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Polytrichum</em>,
				isCorrect: true,
			},
		],
	},
	{
		id: 16,
		soal: {
			teks: (
				<p>
					Berikut merupakan habitat dari{" "}
					<em>Polytrichum, kecuali …</em>
				</p>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: "Pinggir sungai",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "Kayu kering",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Lumpur",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Batang pohon",
				isCorrect: true,
			},
		],
	},
	{
		id: 17,
		soal: {
			teks: (
				<div>
					<img src={gambar17} alt="Gambar" />
					<p>Bagian yang merupakan tudung kotak spora adalah…</p>
				</div>
			),
		},
		pilihans: [
			{
				id: 0,
				teks: "Sporofit",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "Operkulum",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Kalipatra",
				isCorrect: true,
			},
			{
				id: 3,
				teks: "Sporongium",
				isCorrect: false,
			},
		],
	},
	{
		id: 18,
		soal: {
			teks: <div>
                <p>Perhatikan pernyataan berikut :</p>
                <ul>
                    <li>1) Bahan pembuat kasur</li>
                    <li>2) Obat penyakit hepatitis</li>
                    <li>3) Obat penyakit TBC</li>
                    <li>4) Sebagai bahan bakar</li>
                </ul>
                <p>Dari beberapa pernyataan diatas, yang <em>bukan</em> manfaat dari <em>Polytrichum</em> adalah …</p>
            </div>,
		},
		pilihans: [
			{
				id: 0,
				teks: "1",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "2",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "3",
				isCorrect: true,
			},
			{
				id: 3,
				teks: "4",
				isCorrect: false,
			},
		],
	},
	{
		id: 19,
		soal: {
			teks: <div>
                <p>Perhatikan pernyataan berikut :</p>
                <ol className="list-decimal pl-4">
                    <li>Tumbuh hingga 1400 mdpl</li>
                    <li>Daun berwarna hijau tua dan di bagian bawah batang berwarna coklat kehitaman</li>
                    <li>Tangkai kapsul bewarna merah</li>
                    <li>Tinggi lumut 3-7 cm</li>
                </ol>
                <p>Dari pernyataan diatas, yang merupakan ciri dari <em>Polytrichum</em> adalah …</p>
            </div>,
		},
		pilihans: [
			{
				id: 0,
				teks: "1, 2, dan 3",
				isCorrect: true,
			},
			{
				id: 1,
				teks: "1 dan 2",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "2 dan 3",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "4 saja",
				isCorrect: false,
			},
		],
	},
	{
		id: 20,
		soal: {
			teks: <p>Organ reproduksi seksual <em>Polytrichum</em> adalah …</p>,
		},
		pilihans: [
			{
				id: 0,
				teks: "Androecium dan Gynoecium",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "Anteridium dan Arkegonium",
				isCorrect: true,
			},
			{
				id: 2,
				teks: "Gemma",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Sporangium",
				isCorrect: false,
			},
		],
	},
	{
		id: 21,
		soal: {
			teks: "Lumut yang mempunyai sebutan lumut haicap adalah …",
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Rhodobryum</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Fissidens</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Dicranum</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Polytrichum</em>,
				isCorrect: true,
			},
		],
	},
	{
		id: 22,
		soal: {
			teks: <div>
                <img src={gambar22} alt="Gambar Lumut" />
                <p>Gambar lumut diatas merupakan genus …</p>
            </div>,
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryum</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Rhodobryum</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Fissidens</em>,
				isCorrect: true,
			},
			{
				id: 3,
				teks: <em>Polytrichum</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 23,
		soal: {
			teks: "Lumut yang persebarannya hampir di seluruh belahan bumi dan umumnya pada batuan lembab di area pegunungan …",
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryum</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Rhodobryum</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Fissidens</em>,
				isCorrect: true,
			},
			{
				id: 3,
				teks: <em>Polytrichum</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 24,
		soal: {
			teks: "Lumut yang mempunyai kemiripan dengan pakis adalah …",
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryum</em>,
				isCorrect: false,
			},
			{
				id: 1,
				teks: <em>Rhodobyrum</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Fissidens</em>,
				isCorrect: true,
			},
			{
				id: 3,
				teks: <em>Polytrichum</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 25,
		soal: {
			teks: <p><em>Fissidens</em> termasuk dalam kelas …</p>,
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Bryopsida</em>,
				isCorrect: true,
			},
			{
				id: 1,
				teks: <em>Hepaticopsida</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Anthoceropsida</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Bryophyta</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 26,
		soal: {
			teks: <div>
                <p>Perhatikan pernyataan berikut :</p>
                <ol className="list-decimal pl-4">
                    <li>Panjang batang dapat mencapai 12 cm</li>
                    <li>Panjang batang 1 – 8 cm</li>
                    <li>Sporangium berbentuk kapsul, dan merunduk</li>
                    <li>Sporangium berbentuk lonjong dan elastis</li>
                </ol>
                <p>Dari beberapa pernyataan diatas yang merupakan ciri dari <em>Fissidens</em> adalah …</p>
            </div>,
		},
		pilihans: [
			{
				id: 0,
				teks: "1 dan 4",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "1 dan 3",
				isCorrect: true,
			},
			{
				id: 2,
				teks: "2 saja",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Tidak ada yang benar",
				isCorrect: false,
			},
		],
	},
	{
		id: 27,
		soal: {
			teks: <div>
                <img src={gambar27} alt="Gambar Siklus Hidup" />
                <p>Gambar diatas merupakan siklus hidup dari …</p>
            </div>,
		},
		pilihans: [
			{
				id: 0,
				teks: <em>Fissidens</em>,
				isCorrect: true,
			},
			{
				id: 1,
				teks: <em>Marchantia</em>,
				isCorrect: false,
			},
			{
				id: 2,
				teks: <em>Campylopus</em>,
				isCorrect: false,
			},
			{
				id: 3,
				teks: <em>Rhodobryum</em>,
				isCorrect: false,
			},
		],
	},
	{
		id: 28,
		soal: {
			teks: "Pada tahap meiosis, tempat penghasil spora adalah …",
		},
		pilihans: [
			{
				id: 0,
				teks: "Sporangium",
				isCorrect: true,
			},
			{
				id: 1,
				teks: "Rhizoid",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Zigot",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Protonema",
				isCorrect: false,
			},
		],
	},
	{
		id: 29,
		soal: {
			teks: "Organ reproduksi betina pada lumut dilindungi oleh modifikasi daun yang disebut …",
		},
		pilihans: [
			{
				id: 0,
				teks: "Haustorium",
				isCorrect: false,
			},
			{
				id: 1,
				teks: "Seta",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Parisaeta",
				isCorrect: true,
			},
			{
				id: 3,
				teks: "Rizoid",
				isCorrect: false,
			},
		],
	},
	{
		id: 30,
		soal: {
			teks: "Anteredium dan arkegonium dihasilkan pada fase …",
		},
		pilihans: [
			{
				id: 0,
				teks: "Gametofit",
				isCorrect: true,
			},
			{
				id: 1,
				teks: "Sporofit",
				isCorrect: false,
			},
			{
				id: 2,
				teks: "Meiosis",
				isCorrect: false,
			},
			{
				id: 3,
				teks: "Fertilisasi",
				isCorrect: false,
			},
		],
	},
];

export default kuis;
