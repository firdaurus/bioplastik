import Materi from "./Materi";
import gambar1 from "../../assets/images/Marchantia/1.png";
import gambar2 from "../../assets/images/Marchantia/2.png";
import gambar3 from "../../assets/images/Marchantia/3.jpg";

class Marchantia extends Materi {
  name = "Marchantia";

  classification = {
    kingdom: "Plantae",
    division: "Bryophyta",
    class: "Marchantiopsida",
    order: "Marchantiales",
    family: "Marchantiaceae",
    genus: "Marchantia",
    species: "Marchantia sp.",
    author: "(Siregar et al. 2013)",
  };

  coverImage = {
    img: gambar1,
    caption: (
      <div className="flex flex-col items-center">
        <span>
          <em>Lumut Marchantia</em>
        </span>
        <span>(Sumber gambar: Endang, dkk, 2020)</span>
      </div>
    ),
  };

  section = {
    Deskripsi: (
      <>
        <p>
          Disebut <em>Hepaticopsida</em> karena berasal dari nama latin{" "}
          <em>“Hepaticae”</em> yang memiliki arti hati. Lumut kategori ini jika
          dilihat berdasarkan bentuk gametofitnya maka bentuknya menyerupai
          sebuah hati , misalnya dari genus <em>Marchantia.</em> Lumut hati
          memiliki dua macam bentuk gametofit yakni ada yang berbentuk talus{" "}
          <em>“taloid”</em> dan ada yang berbentuk menyerupai daun atau disebut{" "}
          <em>“filoid”</em> (Campbell, 2010).
        </p>
        <p>
          Menurut (Siregar, Ariati, &amp; Tjitrisoedirdjo, 2013), lumut yang
          tergolong kedalam familia Marchantiaceae memiliki ciri yang khas yaitu
          pada thallusnya. Thallus berukan hingga 5 cm, pori pada permukaan
          thallus menonjol, thallus berwarana hijau kusam. Bentuk tubuh berupa
          lembaran dan banyak lekukan. Pada talusnya terdapat bentuk
          sepertimangkuk (cekung), disebut gemma, pada bagian ini akan muncul
          anteridium (anteridiofor) ataupun arkegonium (arkegoniofor) yang
          bentuknya lebih terbuka. Spesies lumut dari Familia Marchantiaceae
          diantarabya yaitu, <em>Marchantia acaulis</em> dan{" "}
          <em>Marchantia sp.</em>
        </p>
        <p>
          <em>Marchantia L.</em> merupakan salah satu genera terbesar dalam ordo
          Marchantiales. Genus ini diwakili oleh 36 spesies yang ditemukan di
          dunia (Bischler-Causse 1998). Di Indonesia khususnya Sumatera, menurut
          penelitian yang ada Marchantia masih sangat langka. Herzog (1943)
          dalam Siregar (2013) pada penelitiannya tentang lumut hati dari
          Sumatera, mencatat 3 spesies: Marchantia, yaitu{" "}
          <em>M. emarginata, M. mucilaginosa,</em> dan <em>M. nitida.</em>
        </p>
      </>
    ),
    Habitat: (
      <p>
        <em>Marchantia L.</em> merupakan salah satu genera terbesar dalam ordo
        Marchantiales. Genus ini diwakili oleh 36 spesies yang ditemukan di
        dunia (Bischler-Causse 1998). Di Indonesia khususnya Sumatera, menurut
        penelitian yang ada Marchantia masih sangat langka. Herzog (1943) dalam
        Siregar (2013) pada penelitiannya tentang lumut hati dari Sumatera,
        mencatat 3 spesies: Marchantia,yaitu{" "}
        <em>M. emarginata, M. mucilaginosa,</em> dan
        <em>M. nitida.</em> Sebuah monografi Marchantia dari kawasan Asiatik dan
        Oseanik oleh Bischler-Causse (1989), yang mencantumkan 6 spesies dari
        Sumatera, yaitu:{" "}
        <em>
          M. acaulis, M. emarginata, M. geminata, M. miqueliana, M. paleaceae,
          dan M. treubii
        </em>{" "}
        (M. mucilaginosa adalah sinonim dari M. acaulisdan M. nitida adalah
        sinonim dari M. paleaceae).
      </p>
    ),
    "Siklus Hidup": (
      <div className="flex flex-col items-center">
        <div className="text-center text-sm text-gray-800">
          <img src={gambar2} alt="Marchantia acaulis" />
          <p>
            <em>Marchantia acaulis</em>
          </p>
          <p>
            The Liverwort Genus Marchantia (Marchantiaceae) of Mount Sibayak –
            Etti Sartina Siregar <em>et al. 2013</em>
          </p>
        </div>
        <div className="text-center text-sm text-gray-800">
          <img
            src={gambar3}
            alt="Skema metagenesis lumut hati Marchantia polymorpha"
          />
          <p>Skema metagenesis lumut hati Marchantia polymorpha</p>
          <a>
            https://learniseasy.com/wp-content/uploads/2018/08/skema-metagenesis-lumut-hati-1280-new.jpg
          </a>
        </div>
        <p>
          <em>Marchantia sp.</em> termasuk ke dalam kelas Hepaticae. Memiliki bentuk
          tubuh berupa thallus, arah tumbuh horizontal, bentuk sporofitnya
          mangkuk, percabangan dikotom, dan tidak memiliki daun. Kemunculan
          sporofit di permukaan thallus. Spesies ini memiliki ciri khas jumlah
          sporofit banyak dan tersebar di permukaan. Menurut Yudianto (1992),
          sporofit tersembunyi terletak di bagian permukaan bawah reseptakel
          betina. Reseptakel jantan (cawan antheridial) dan reseptakel betina
          (cawan archegonial) adalah terlihat jelas. Yang jantan serupa cawan
          dan yang betina serupa payung.
        </p>
        <p>
          Marchantia mampu bereproduksi secara seksual atau aseksual. Reproduksi
          seksual akan melibatkan sperma dari antheridia pada tanaman jantan
          membuahi ovum (sel telur) dalam archegonia dari tanaman
          betina.antheridia dan archegonia ditanggung atas batang gametophore
          khusus yang disebut antheridiophores dan archegoniophores,
          masing-masing. Ini ditanggung pada thalli terpisah; maka, tanaman
          dioicous. Kemudian setelah dibuahi, sel telur disebut zygote dan
          berkembang menjadi tanaman sporophyte kecil, yang tetap melekat pada
          tanaman gametofit lebih besar. sporofit menghasilkan spora yang
          berkembang menjadi tanaman gametofit hidup bebas Jantan dan Betina.
        </p>
        <p>
          Reproduksi aseksual berlangsung dengan cara gemmae, gumpalan diskoid
          sel yang secara genetik identik dengan induknya dan terkandung dalam
          struktur cangkir-seperti pada permukaan atas tanaman. Ini tersebar
          ketika hujan percikan ke dalam cangkir dan berkembang menjadi tanaman
          baru. reproduksi aseksual juga dapat terjadi ketika bagian yang lebih
          tua dari die tanaman dan cabang-cabang baru yang masih hidup
          berkembang menjadi tanaman yang terpisah.
        </p>
      </div>
    ),
    "Daftar Pustaka": (
        <>
            <p>Bischler-Causse H. 1989. <em>MarchantiaL.</em> Taksa Asiatik dan Oseanik.Bryophyt Biblioth38: 1-317.</p>
            <p>Campbell, Reece. 2010. <em>Biologi Edisi Kedelapan Jilid 2.</em> Jakarta: Erlangga.</p>
            <p>Endang, Titi; Jumiati; dan Dyah, Pramesthi I. A. 2020. <em>Inventarisasi Jenis-Jenis Lumut (Bryophyta) di Daerah Aliran Sungai Kabura-Burana Kecamatan Batauga Kabupaten Buton Selatan.</em> Jurnal Biologi Tropis, 20 (2): 161 – 172 dari <a>http://dx.doi.org/10.29303/jbt.v20i2.1807</a></p>
            <p>Siregar, E.S., Arianti, N.S. &amp; Tjitrosoedirdjo, S.S. (2013). <em>The Liverwort Genus Marchantia (Marchantiacea) of Mount Sibayak North Sumatra, Indonesia.</em> Jurnal Biotropia. 20 (2): 73-80. DOI: <a>https://dx.doi.org/10.11598/btb.2013.20.2.327.</a></p>
            <p>Yudianto, S.A. (1992). <em>Pengantar Cryptogamae (Sistematik Tumbuhan Rendah).</em> Bandung: Tarsito.</p>
            <p>Tim Pudak Scientific. 2014. <em>Buku Deskripsi dan Kunci Determinasi Bryophyta.</em> Bandung: Pudak Scientific.</p>
        </>
    )
  };
}

export default new Marchantia();
