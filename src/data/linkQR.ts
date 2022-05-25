import Materi from './materi/Materi';
import Anthoceros from './materi/Anthoceros';

interface LinkQR {
    hash: string,
    genus: string,
    materi: Materi,
}

const linkQR: LinkQR[] = [
    {
        hash: "ac436b64",
        genus: "Anthoceros",
        materi: Anthoceros,
    },
]

export const getMateri = (genus: string) => {
    const materi = linkQR.find(m => m.genus === genus);
    if (materi) {
        return materi.materi;
    }
    throw new Error("Genus tidak ditemukan!");
}

export default linkQR;