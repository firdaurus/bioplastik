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

    createContent(){
        
        return <div>
            Aku content
        </div>
    }
}

export default new Polytrichum()