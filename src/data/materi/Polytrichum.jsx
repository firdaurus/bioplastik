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
            <label className="blablabla">Gambar 1. Anthoceros</label>
        </div>),

        Habitat: (<div>
            <label className="blablabla">Gambar 1. Anthoceros</label>
        </div>),

        Referensi: (<div>
            <label className="blablabla">Gambar 1. Anthoceros</label>
        </div>),
    }
}

export default new Polytrichum()