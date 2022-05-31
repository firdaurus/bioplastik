import { titleCase, slugToTitle } from '../../utils/helper';

interface Taxonomy {
    taxonomy: {
        [key:string]: string,
    }
    author?: string,
}

export interface MateriSection {
    [key:string]: JSX.Element
}

abstract class Materi {

    abstract coverImage: {
        img: string,
        caption: string | JSX.Element,
    };
    abstract name: string;
    abstract classification: Taxonomy;
    abstract sections: MateriSection;

    getSectionNames(){
        return [
            'Taksonomi',
            ...Object.keys(this.sections),
        ];
    }

    getSectionJSX(sectionName: string){
        return this.sections[titleCase(slugToTitle(sectionName))];
    }
}

export default Materi