interface Taxonomy {
    kingdom: string,
    division: string,
    class: string,
    order: string,
    family: string,
    genus: string,
    species?: string,
    author?: string,
}

interface Section {
    [key:string]: JSX.Element
}

abstract class Materi {

    coverImage?: string;
    abstract name: string;
    abstract classification: Taxonomy;
    abstract content: Section;

    protected render(): JSX.Element{
        return <div>Halloooo</div>;
    }
}

export default Materi