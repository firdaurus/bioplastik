import Materi from './materi/Materi';
import Anthoceros from './materi/Anthoceros';
import Bryum from './materi/Bryum';
import Campylopus from './materi/Campylopus';
import Rhodobryum from './materi/Rhodobryum';
import Dicranum from './materi/Dicranum';
import Fissidens from './materi/Fissidens';
import Marchantia from './materi/Marchantia';
import Polytrichum from './materi/Polytrichum';

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
    },
    { 
        hash: "f9481c95",
        genus: "Campylopus",
        materi: Campylopus
    },
    { 
        hash: "0ba71c9d",
        genus: "Dicranum",
        materi: Dicranum
    },
    { 
        hash: "9cec5302",
        genus: "Fissidens",
        materi: Fissidens
    },
    { 
        hash: "d5d53076",
        genus: "Marchantia",
        materi: Marchantia
    }, 
    { 
        hash: "34c0df48",
        genus: "Polytrichum",
        materi: Polytrichum,
    }, 
    { 
        hash: "a5772ff3",
        genus: "Rhodobryum",
        materi: Rhodobryum,
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
