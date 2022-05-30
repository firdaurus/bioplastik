import Materi from "./Materi";
import gambar1 from "../../assets/images/Dicranum/1.png";
import gambar2 from "../../assets/images/Dicranum/2.png";

class Dicranum extends Materi {
  name = "Dicranum";

  classification = {
    kingdom: "Plantae",
    phylum: "Bryophyta",
    class: "Bryopsida",
    order: "Dicranales",
    family: "Dicranaceae",
    genus: "Dicranum",
    author: "(Sopacua, dkk. 2020)",
  };

  coverImage = {
    img: gambar1,
    caption: "(Sumber: Sopacua, dkk. 2020)",
  };

  section = {
    Deskripsi: (
      <div className="flex flex-col items-center">
        <p>
          Spesies dari genus <em>Dikranum</em> biasanya dikenali dengan
          ukurannya yang biasanya besar dan daunnya yang sempit, lanset yang
          sedikit banyak secara bertahap menyempit ke arah puncak daun, costa
          tunggal yang panjang, dan pada sebagian besar spesies kelompok alar
          yang berdiferensiasi baik. Daunnya mungkin lurus, tetapi seringkali
          homomallous hingga falcate, dan warnanya sebagian besar hijau agak
          dalam dan jernih. Anggota dari beberapa genus lain dari keluarga
          Dicranaceae juga relatif besar, dan secara dangkal mirip dengan
          <em>Dikranum</em> spesies dalam kebiasaan. Sebagian besar spesies
          <em>Dikranodontium, Campylopus dan Paraleucobryum</em> memiliki costae
          yang lebih luas daripada kebanyakan spesies <em>Dikranum</em>, dan di
          samping itu anatomi costa berbeda (Hedenäs, L. &amp; I. Bisang. 2004)
        </p>
        <p>
          <em>Dicranum sp</em> merupakan salah satu spesies dari genus{" "}
          <em>Dikranum</em> termasuk ke dalam kelas Musci, memiliki bentuk tubuh
          kormus. Arah tumbuhnya vertikal, bentuk sporofit berupa kapsul,
          percabangan bebas, bentuk daun jarum memiliki urat daun. Kemunculan
          sporofit di ujung kormus. Spesies ini memiliki ciri khas daun
          terkadang bercabang dua. Menurut Yudianto (1992), bentuk luar tubuhnya
          seperti ulat bulu, akibat keadaan padatnya daun-daun yang seperti
          jarum, daun-daun muda di ujung cabang seolah-olah bersatu. Sporogonium
          dibentuk di ujung cabang.
        </p>
      </div>
    ),
    Habitat: (
      <>
        <p>
          Lumut dalam genus <em>Dicranum</em> memiliki karateristik daun warna
          hijau kekuningan, tumbuh mengelompok membentuk massa yang besar,
          padat. Sporofit dengan kapsul berbentuk bulat atau lonjong. Biasa
          tumbuh sebagai epifit pada pohon, pada ketinggian 1.300 – 1.500 m dpl
          (Tim Pudak, 2014)
        </p>
        <p>
          Dicranum adalah genus besar yang pada dasarnya banyak ditemukan di
          Holarctic. Lebih dari 90 spesies saat ini diterima dan sekitar 30
          spesies tercatat untuk Eropa. Spesies Dicranum tumbuh di berbagai
          habitat, membentuk jumbai atau bantalan tomentose yang lebat, dan
          mudah dikenali (Lang, 2014).
        </p>
      </>
    ),
    "Sikus Hidup": (
      <div className="flex flex-col items-center">
        <div>
          <img src={gambar2} alt="sikulus hidup dicranum" />
          <p>Siklus Hidup Lumut Daun</p>
          <p>(Sumber gambar: Campbell, 2008)</p>
        </div>
        <p>
          Reproduksi aseksual khusus kurang ada atau sebagai kelompok. Kondisi
          seksual dioicous atau pseudomonoicous. Tanaman jantan sebesar tanaman
          betina atau lebih kerdil dan epifit pada rizoid batang tanaman betina.
          Daun perigonial bulat telur, cekung, runcing pendek; daun perichaetial
          berbelit-belit-selubung, tiba-tiba subulate atau jarang daun interior
          secara bertahap meruncing. Seta soliter atau hingga 6 per
          perichaetium, halus, memanjang, tegak, memutar saat kering, kuning,
          coklat atau kemerahan. Kapsul tegak atau miring, silindris, lurus atau
          lengkung, halus, lurik atau beralur jika kering, anulus dari 1-3 baris
          sel yang biasanya besar, sulung atau persisten, kadang-kadang
          berdiferensiasi tidak jelas; operculum long-rostrate, lurus atau
          melengkung; peristom tunggal, 16 gigi, membelah 1/3 sampai 1/2
          panjangnya menjadi 2 (jarang 3), membelah, bergaris-garis vertikal di
          bawah, papil di atas, coklat kemerahan. Spora bulat, papil halus.
          Calyptra cucullate, halus, telanjang, menutupi sebagian besar kapsul,
          fugacious (Allen, B. 1998).
        </p>
      </div>
    ),
    "Daftar Pustaka": (
      <>
        <p>
          Allen, B. 1998. <em>Genus Dicranum (Musci: Dicranaceae)</em> di Maine.
          Evansia 15(2).
        </p>
        <p>
          Campbell, Reece; dkk. 2008. <em>Biologi Edisi Kedelapan Jilid 2,</em>{" "}
          Jakarta : Penerbit Erlangga.
        </p>
        <p>
          Hedenäs, L. &amp; I. Bisang. 2004.{" "}
          <em>Key to European Dicranum species.</em>
          Herzogia 17: 179-197.
        </p>
        <p>
          Lang, A.S. 2014.{" "}
          <em>
            Filogeni dan delimitasi spesies dalam genus lumut Dicranum Hedw.
          </em>{" "}
          Tesis. Dari <a>https://hdl.handle.net/1887/28984</a>
        </p>
        <p>
          Sopacua, Gledys; dkk. 2020.{" "}
          <em>
            Inventarisasi Tumbuhan Lumut Di Kawasan Air Potang-Potang Negeri
            Itawaka Kabupaten Maluku Tengah.
          </em>{" "}
          Jurnal Ilmiah Wahana Pendidikan. Vol. 6, No. 4, Desember 2020. Dari
          <a>https://jurnal.unibrah.ac.id/index.php/JIWP</a>
        </p>
        <p>
          Tim Pudak. 2014.{" "}
          <em>Buku Deskripsi dan Kunci Determinasi Bryophyta.</em> Pudak
          Scientific: Jawa Barat.
        </p>
        <p>
          Yudianto, S.A. (1992). <em>Pengantar Cryptogamae (Sistematik Tumbuhan
          Rendah).</em> Bandung: Tarsito.
        </p>
      </>
    ),
  };
}

export default new Dicranum();
