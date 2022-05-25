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
    title: string,
    content: JSX.Element
}

abstract class Materi {

    coverImage?: string;
    abstract name: string;
    abstract classification: Taxonomy;
    protected content: Section[] = [];

    protected abstract createContent(): JSX.Element;

    protected render(): JSX.Element{
        return this.createContent();
    }
}

export default Materi