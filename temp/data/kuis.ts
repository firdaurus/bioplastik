import kuis1 from '../assets/kuis/kuis1.png'
import kuis8 from '../assets/kuis/kuis8.jpg'
import kuis9 from '../assets/kuis/kuis9.jpg'
import kuis14 from '../assets/kuis/kuis14.jpg'
import kuis17 from '../assets/kuis/kuis17.png'
import kuis18 from '../assets/kuis/kuis18.png'
import kuis19 from '../assets/kuis/kuis19.png'
import kuis22 from '../assets/kuis/kuis22.jpg'
import kuis26 from '../assets/kuis/kuis26.png'
import kuis27 from '../assets/kuis/kuis27.jpg'

const italic = [
    '<i>Anthoceropsida</i>',
    '<i>Bryophyta</i>',
    '<i>Bryopsida</i>',
    '<i>Bryum</i>',
    '<i>bukan</i>',
    '<i>Campylopus</i>',
    '<i>Dicranum</i>',
    '<i>Dyopsida</i>',
    '<i>Fissidens</i>',
    '<i>Hepaticopsida</i>',
    '<i>Monopsida</i>',
    '<i>Polytrichum</i>',
    '<i>Pteridophyta</i>',
    '<i>Rhidobryum</i>',
    '<i>Rhodobryum</i>',
    '<i>Rhodobyrum</i>',
    '<i>Marchantia</i>',
]

const a = 0
const b = 1
const c = 2
const d = 3

const kuis = {
    umum: [
        {
            soal: { 
                gambar: kuis1, 
                teks: 'Karakteristik <i>Bryophyta</i> ditunjukkan oleh huruf …',
            },
            pilihans: ['A', 'B', 'C', 'D'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: '<i>Bryophyta</i> terdiri dari 3 kelas, yaitu :',
            },
            pilihans: ['<i>Hepaticopsida</i>, <i>Anthoceropsida</i>, <i><i>Bryopsida</i></i>', '<i>Hepaticopsida</i>, <i>Pteridophyta</i>, <i>Anthoceropsida</i>', '<i>Anthoceropsida</i>, <i>Monopsida</i>, <i>Bryopsida</i>', '<i>Dyopsida</i>, <i>Hepaticopsida</i>, <i>Bryopsida</i>'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Yang merupakan kelompok <i>Bryophyta</i> yang memiliki struktur mirip dengan tumbuhan adalah …',
            },
            pilihans: ['<i>Bryopsida</i>', '<i>Hepaticopsida</i>', '<i>Bryophyta</i>', '<i>Anthoceropsida</i>'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Reproduksi jantan pada <i>Bryophyta</i> disebut … dan memproduksi … yang menjadi gamet.',
            },
            pilihans: ['Antheridium, spermatozoid', 'Antheridium, ovum', 'Arkegonium, spora', 'Arkegonium, spermatozoid'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Bagian lumut yang berbentuk benang-benang  halus tumbuh ke arah bawah dari pangkal batangnya disebut …',
            },
            pilihans: ['Hifa', 'Rizoid', 'Sporangium', 'Algal'],
            jawaban: b,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Lumut yang mempunyai sebutan tumbuhan perintis ialah …',
            },
            pilihans: ['Lumut kerak', 'Lumut hati', 'Lumut sejati', 'Lumut daun'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: '<i>Bryophyta</i>  dapat dianggap sebagai tumbuhan karena memiliki beberapa ciri yang sama. Namun perbedaan utamanya adalah …',
            },
            pilihans: ['Lumut mempunyai proses fotosintesis yang sederhana', 'Lumut mempunyai struktur yang sederhana', 'Lumut tidak mempunyai jaringan pembuluh', 'Lumut bisa menyerap dan mineral secara langsung'],
            jawaban: c,
        },
    ],
    rhodobryum: [
        {
            soal: {
                gambar: kuis8, 
                teks: 'Gambar lumut diatas merupakan genus …',
            },
            pilihans: ['<i>Bryum</i>', '<i>Rhodobyrum</i>', '<i>Dicranum</i>', '<i>Polytrichum</i>'],
            jawaban: b,
        },
        {
            soal: {
                gambar: kuis9, 
                teks: 'Bagian seta ditunjuk pada nomor …',
            },
            pilihans: ['1', '2', '3', '4'],
            jawaban: b,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Sore itu Dodi bermain di belakang rumah dan menemukan lumut dibawah pohon. Lumut itu memiliki ciri-ciri tangkai daun tidak bercabang, tingginya paling tinggi 5cm, daun tersusun dalam roset 18-55 helai dan mempunyai daun melebar di bagian tengah, kemudian mengerucut di bagian ujung. Lumut yang ditemukan Dodi merupakan lumut genus …',
            },
            pilihans: ['<i>Bryum</i>', '<i>Fissidens</i>', '<i>Rhidobryum</i>', '<i>Polytrichum</i>'],
            jawaban: c,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Lumut yang bisa digunakan sebagai obat bius adalah …',
            },
            pilihans: ['<i>Fissidens</i>', '<i>Polytrichum</i>', '<i>Bryum</i>', '<i>Rhodobryum</i>'],
            jawaban: d,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Spora pada lumut berkecambah untuk membentuk …',
            },
            pilihans: ['Protonema', 'Hifa', 'Protalum', 'Gemmae'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Kebanyakan <i>Bryophyta</i>  hanya memiliki tinggi beberapa cm saja karena tidak mempunyai …',
            },
            pilihans: ['Organ reproduksi', 'Jaringan pembuluh', 'Daun', 'Batang'],
            jawaban: b,
        },
    ],
    polytrichum: [
        {
            soal: {
                gambar: kuis14, 
                teks: 'Gambar lumut diatas merupakan genus …',
            },
            pilihans: ['<i>Bryum</i>', '<i>Rhodobyrum</i>', '<i>Dicranum</i>', '<i>Polytrichum</i>'],
            jawaban: d,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Lumut ini termasuk dalam spesies lumut tertinggi karena dapat tumbuh 30 cm hingga 70 cm. Lumut yang dimaksud adalah …',
            },
            pilihans: ['<i>Bryum</i>', '<i>Rhodobyrum</i>', '<i>Dicranum</i>', '<i>Polytrichum</i>'],
            jawaban: d,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Berikut merupakan habitat dari <i>Polytrichum</i>, kecuali …',
            },
            pilihans: ['Pinggir sungai', 'Kayu kering', 'Lumpur', 'Batang pohon'],
            jawaban: d,
        },
        {
            soal: {
                gambar: kuis17, 
                teks: 'Bagian yang merupakan tudung kotak spora adalah…',
            },
            pilihans: ['Sporofit', 'Operkulum', 'Kalipatra', 'Sporongium'],
            jawaban: c,
        },
        {
            soal: {
                gambar: kuis18, 
                teks: 'Dari beberapa pernyataan diatas, yang <i>bukan</i> manfaat dari <i>Polytrichum</i> adalah …',
            },
            pilihans: ['1', '2', '3', '4'],
            jawaban: c,
        },
        {
            soal: {
                gambar: kuis19, 
                teks: 'Dari pernyataan diatas, yang merupakan ciri dari <i>Polytrichum</i> adalah …',
            },
            pilihans: ['1, 2, dan 3', '1 dan 2', '2 dan 3', '4 saja'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Organ reproduksi seksual <i>Polytrichum</i> adalah …',
            },
            pilihans: ['Androecium dan Gynoecium', 'Anteridium dan Arkegonium', 'Gemma', 'Sporangium'],
            jawaban: b,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Lumut yang mempunyai sebutan lumut haicap adalah …',
            },
            pilihans: ['<i>Rhodobryum</i>', '<i>Fissidens</i>', '<i>Dicranum</i>', '<i>Polytrichum</i>'],
            jawaban: d,
        },
    ],
    fissidens: [
        {
            soal: {
                gambar: kuis22, 
                teks: 'Gambar lumut diatas merupakan genus …',
            },
            pilihans: ['<i>Bryum</i>', '<i>Rhodobryum</i>', '<i>Fissidens</i>', '<i>Polytrichum</i>'],
            jawaban: c,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Lumut yang persebarannya hampir di seluruh belahan bumi dan umumnya pada batuan lembab di area pegunungan …',
            },
            pilihans: ['<i>Bryum</i>', '<i>Rhodobryum</i>', '<i>Fissidens</i>', '<i>Polytrichum</i>'],
            jawaban: c,
        },
        {
            soal: {
                gambar: null, 
                teks: '<i>Fissidens</i> termasuk dalam kelas …',
            },
            pilihans: ['<i>Bryopsida</i>', '<i>Hepaticopsida</i>', '<i>Anthoceropsida</i>', '<i>Bryophyta</i>'],
            jawaban: a,
        },
        {
            soal: {
                gambar: kuis26, 
                teks: 'Dari beberapa pernyataan diatas yang merupakan ciri dari <i>Fissidens</i> adalah …',
            },
            pilihans: ['1 dan 4', '1 dan 3', '2 saja', 'Tidak ada yang benar'],
            jawaban: b,
        },
        {
            soal: {
                gambar: kuis27, 
                teks: 'Gambar diatas merupakan siklus hidup dari …',
            },
            pilihans: ['<i>Fissidens</i>', '<i>Marchantia</i>', '<i>Campylopus</i>', '<i>Rhodobryum</i>'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Pada tahap meiosis, tempat penghasil spora adalah …',
            },
            pilihans: ['Sporangium', 'Rhizoid', 'Zigot', 'Protonema'],
            jawaban: a,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Organ reproduksi betina pada lumut dilindungi oleh modifikasi daun yang disebut ...',
            },
            pilihans: ['Haustorium', 'Seta', 'Parisaeta', 'Rizoid'],
            jawaban: c,
        },
        {
            soal: {
                gambar: null, 
                teks: 'Anteredium dan arkegonium dihasilkan pada fase …',
            },
            pilihans: ['Gametofit', 'Sporofit', 'Meiosis', 'Fertilisasi'],
            jawaban: a,
        },
    ],
}

export default kuis
export {italic}
