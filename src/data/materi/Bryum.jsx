import Materi from './Materi'

class Bryum extends Materi {
    
    name = 'Bryum'

    classification = {
        kingdom: 'Plantae',
        division: 'Bryophyta',
        class: 'Bryopsida',
        order: 'Bryales',
        family: 'Bryaceae',
        genus: 'Bryum',
    }

    createContent(){
        
        return <div>
            Aku content
        </div>
    }
}

export default new Bryum()