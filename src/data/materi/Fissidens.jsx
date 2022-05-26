import Materi from './Materi'

class Fissidens extends Materi {
    
    name = 'Fissidens'

    classification = {
        kingdom: 'Plantae',
        phylum: 'Bryophyta',
        class: 'Bryopsida',
        order: 'Dicranales',
        family: 'Fissidentaceae',
        genus: 'Fissidens',
    }

    createContent(){
        
        return <div>
            Aku content
        </div>
    }
}

export default new Fissidens()