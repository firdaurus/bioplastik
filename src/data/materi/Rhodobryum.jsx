import Materi from './Materi'

class Rhodobryum extends Materi {
    
    name = 'Rhodobryum'

    classification = {
        kingdom: 'Plantae',
        division: 'Bryophyta',
        class: 'Bryopsida',
        order: 'Bryales',
        family: 'Bryaceae',
        genus: 'Rhodobryum',
    }

    createContent(){
        
        return <div>
            Aku content
        </div>
    }
}

export default new Rhodobryum()