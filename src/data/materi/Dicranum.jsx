import Materi from './Materi'

class Dicranum extends Materi {
    
    name = 'Dicranum'

    classification = {
        kingdom: 'Plantae',
        division: 'Bryophyta',
        class: 'AMusci',
        order: 'Dicranales',
        family: 'Dicranaceae',
        genus: 'Dicranum',
        species: 'Dicranum sp.',
        author: '(Storey, 2010)',
    }

    createContent(){
        
        return <div>
            Aku content
        </div>
    }
}

export default new Dicranum()