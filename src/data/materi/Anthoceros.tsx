import Materi from './Materi'

class Anthoceros extends Materi {
    
    name = 'Anthoceros'

    classification = {
        kingdom: 'Plantae',
        division: 'Athocerotophyta',
        class: 'Anthocerotopsida',
        order: 'Anthocerotales',
        family: 'Anthocerotaceae',
        genus: 'Anthoceros',
        species: 'Anthoceros sp.',
        author: '(Mulyadi, 2014)',
    }

    createContent(){
        
        return <div>
            Aku content
        </div>
    }
}

export default new Anthoceros()