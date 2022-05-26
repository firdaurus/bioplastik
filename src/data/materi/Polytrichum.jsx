import Materi from './Materi'

class Polytrichum extends Materi {
    
    name = 'Polytrichum'

    classification = {
        kingdom: 'Plantae',
        division: 'Bryophyta',
        class: 'Bryopsida',
        order: 'Polytrichales',
        family: 'Polytrichaceae',
        genus: 'Polytrichum',
    }

    content = {
        Deskripsi: (<div>
            <img src={gambarFissidens} alt="Ini Gambar" />
            <label className="blablabla">Gambar 1. Anthoceros</label>
        </div>),

        Habitat: (<div>
            <img src={gambarFissidens} alt="Ini Gambar" />
            <label className="blablabla">Gambar 1. Anthoceros</label>
        </div>),

        Referensi: (<div>
            <img src={gambarFissidens} alt="Ini Gambar" />
            <label className="blablabla">Gambar 1. Anthoceros</label>
        </div>),
    }
}

export default new Polytrichum()