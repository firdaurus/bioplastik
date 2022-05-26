import Materi from './Materi'

class Camphylopus extends Materi {
    
    name = 'Camphylopus'

    classification = {
        kingdom: 'Plantae',
        phylum: 'Bryophyta',
        class: 'Bryopsida',
        order: 'Dicranales',
        family: 'Dicranaceae',
        genus: 'Camphylopus',
        author: '(Sopacua, dkk. 2020)',
    }

    createContent(){
        
        return <div>
            Aku content
        </div>
    }
}

export default new Camphylopus()