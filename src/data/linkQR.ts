import Materi from './materi/Materi';
import Anthoceros from './materi/Anthoceros';
import Bryum from './materi/Bryum';

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
    { 
        hash: "f7a2c341",
        genus: "Bryum",
        materi: Bryum
    }
]

export const getMateri = (genus: string) => {
    const materi = linkQR.find(m => m.genus === genus);
    if (materi) {
        return materi.materi;
    }
    throw new Error("Genus tidak ditemukan!");
}

export default linkQR;