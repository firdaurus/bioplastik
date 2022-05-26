import Materi from './Materi'

import gambarFissidens from '../../assets/images/fissidens.jpg'

class Anthoceros extends Materi {
    
    name = 'Anthoceros'

    classification = {
        kingdom: 'Plantae',
        division: 'Bryophyta',
        class: 'Bryopsida',
        order: 'Polytrichales',
        family: 'Polytrichaceae',
        genus: 'Anthoceros',
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

export default new Anthoceros()