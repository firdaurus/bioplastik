import Materi from './Materi'

class Marchantia extends Materi {
    
    name = 'Marchantia'

    classification = {
        kingdom: 'Plantae',
        division: 'Athocerotophyta',
        class: 'Marchantiopsida',
        order: 'Marchantiales',
        family: 'Marchantiaceae',
        genus: 'Marchantia',
        species: 'Marchantia sp.',
        author: '(Siregar et al. 2013)',
    }

    createContent(){
        
        return <div>
            Aku content
        </div>
    }
}

export default new Marchantia()