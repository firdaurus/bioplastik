import Materi from "./Materi";
import gambar1 from "../../assets/images/Fissidens/1.jpg";
import gambar2 from "../../assets/images/Fissidens/2.jpg";

class Fissidens extends Materi {
  name = "Fissidens";

  classification = {
    kingdom: "Plantae",
    divisio: "Bryophyta",
    classis: "Bryopsida",
    ordo: "Dicranales",
    familia: "Fissidentaceae",
    genus: "Fissidens",
  };

  coverImage = {
    img: gambar1,
    caption: (
      <div className="flex flex-col items-center">
        <span>
          Lumut <em>Fissidens</em>
        </span>
        <span>(Suzuki dan Iwatsuki, 2013)</span>
      </div>
    ),
  };

  section = {
    Deskripsi: (
      <p>
        Genus <em>Fissidens</em> termasuk dalam keluarga Fissidentaceae. Genus
        ini memiliki ciri morfologi seperti: tumbuh dengan tegak atau menjalar
        pada tanah yang teduh dan lembab, di batuan yang lembab, di dalam hutan,
        di permukaan tebing atau tepi sungai. Panjang batang dapat mencapai 12
        cm. Fissidens biasanya hidup secara berkelompok membentuk semak dan
        bentuknya mirip pakis. Batang dari Fissidens ini tumbuh tegak dengan
        daun yang tersusun rapat. Susunan daun membentuk 2 baris di sisi kiri
        dan kanan tangkai. Di setiap helai daun kecil, ujungnya meruncing.
        Sedangkan di sisi adaksialnya terdapat duplikat daun berbentuk perahu
        dengan panjang sekitar 2/3 dari panjang daunnya. Fissidens juga memiliki
        daun yang berwarna hijau kekuningan hingga coklat emas. Sporangium dari
        Fissidens ini berbentuk kapsul, agak merunduk dengan tangkai yang lurus.
        Lumut dari genus ini dapat dimanfaatkan sebagai antibakteri serta juga
        dapat melegakan pernapasan (Erzerberger, 2016).
      </p>
    ),
    Habitat: (
      <p>
        Menurut Eddy (1988), suku ini hanya mempunyai satu marga atau genus
        yaitu Fissidens. Marga ini terdiri dari beberapa ratus jenis yang
        tersebar diseluruh belahan dunia dan ditemukan dalam beberapa tipe
        habitat. Fissidens ditemukan tumbuh pada substrat tanah, batu, pasir
        akar pohon dan kulit pohon. Tumbuhan ini banyak ditemukan tumbuh di batu
        dengan persebaran Fissidens hampir ada di seluruh belahan bumi, di
        Indonesia ekologi dan persebaran umumnya ditemukan pada batuan lembab di
        area pegunungan, persebarannya di daerah dan kawasan Malesia yang hanya
        ditemukan di Jawa dan Filipina, dan juga dari kepulauan Galapagos hingga
        samudra Pasifik. Fissidens tumbuh tersebar, rapi, hingga dapat tumbuh
        berkelompok, dengan tinggi 3-6 mm. Lumut{" "}
        <em>Fissidens intromarginatulus</em>
        tumbuh tegak dengan sesekali terlihat batang terjadi percabangan 2-3
        cabang, duduk daun berdekatan atau agak berjauhan dan lanset (Eddy,
        1988).
      </p>
    ),
    "Siklus Hidup": (
      <div className="flex flex-col items-center">
        <p>
          Sama seperti siklus hidup lumut pada umumnya, hanya saja terdapat
          sedikit perbedaan pada <em>Fissidens</em> mempunyai sporangium berbentuk
          kapsul, agak merunduk dan bertangkai lurus. Siklus hidup dimulai dari
          spora yang tumbuh menjadi protonema. Kemudian protonema akan
          menghasilkan gametofit. Pada generasi gametofit ini menghasilkan
          anteridium dan arkegonium. Anteridium menghasilkan sel sperma akan
          bergabung dengan arkegonium yang menghasilkan sel telur sehingga
          terjadi fertilisasi membentuk zigot. Zigot merupakan tahap awal
          terbentuknya generasi sporofit yang akan tumbuh menjadi tangkai,
          kapsul di bagian ujungnya dan sporofit dewasa yang tersusun dari kaki
          untuk pelekat pada gametofit yang terbentuk dari pembelahan zigot.
          Sporangium merupakan tempat penghasil spora melalui meiosis. Siklus
          hidup lumut dikatakan lengkap apabila spora telah dewasa dan terbebas
          dari sporangium (Hasan &amp; Ariyanti, 2004).
        </p>
        <div>
            <img src={gambar2} alt="Siklus Hidup Fissidens"/>
            <p className="text-center text-sm text-gray-800">
                Gambar  Siklus hidup <em>Fissidens</em> (sumber: Gembong, 2003)
            </p>
        </div>
      </div>
    ),
    "Daftar Pustaka": (
        <>
            <p>Eddy, A. 1988. <em>A Handbook of Malesian Mossesvolume 1 Spagnales to Dicranales.</em> London: British Musium (Natural History). </p>
            <p>Erzerberger, Peter. 2016. <em>The Genus Fissidens (Fissidentaceae, Bryophyta) In Hungary.</em> Studia Botanica Hungarica. 47 (1). DOI: 10.17110/StudBot.2016.47.1.41. </p>
            <p>Gembong, T. 2003. <em>Taksonomi Tumbuhan (Scyzophyta, Thallophyta, Bryophyta, Pteridophyta).</em> Yogyakarta: UGM Press. </p>
            <p>Hasan, M &amp; Ariyanti, N.S. 2004. <em>Mengenal Bryophyta (Lumut) Tanam Nasional Gunung Gede Pangrango Volum 1.</em> Balai Tanam Nasional Gunung Gede Pangrango. Cibodas. </p>
            <p>Suzuki dan Iwatsuki. 2013. <em>Collections of Fissidens (Fissidentaceae, Bryopsida)</em> Made by Messrs. T. Kamiyama and K. Shiina in Laos. Hattoria 4: 47–70. </p>
            <p>Tim Pudak Scientific. 2014. <em>Buku Deskripsi dan Kunci Determinasi Bryophyta.</em> Bandung: Pudak Scientific.</p>
        </>
    )
  };
}

export default new Fissidens();
