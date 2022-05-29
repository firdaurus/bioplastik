import { shuffleArray } from "../utils/helper"
import appConfig from "../utils/appConfig"

export interface Soal {
    id: number,
    soal: {
        gambar?: string,
        teks: JSX.Element | string,
    },
    pilihans: {
        id: number,
        teks: JSX.Element | string,
        isCorrect: boolean
    }[],
    answer?: number,
}

export interface MinimizedKuisData {
    id: number,
    pilihans: number[],
    answer: number,
}

export const getKuisesFromPart = (part: number) => {
    const kuises = kuis.filter((_, i) => (i >= part*10 && i < (part+1)*10))
        .map(kuis => ({
            ...kuis,
            pilihans: appConfig.kuis.shuffleAnswer ? shuffleArray(kuis.pilihans) : kuis.pilihans, // Shuffle answer if configured so
        }))
    
    if (appConfig.kuis.shuffleQuestion){
        // Shuffle kuises if configured so
        return shuffleArray(kuises);
    }

    return kuises;
}

export const getScore = (kuises: Soal[]) => {
    let score = 0;
    kuises.forEach(kuis => {
        if (kuis.pilihans.find(pilihan => pilihan.id === kuis.answer)?.isCorrect){
            score++;
        }
    })
    return (score / kuises.length) * 100; //Save as 100 scale
}

export const getMinimizedKuisData = (kuises: Soal[]) => {
    return kuises.map(kuis => ({
        id: kuis.id,
        pilihans: kuis.pilihans.map(pilihan => pilihan.id),
        answer: kuis.answer,
    }))
}

const kuis: Soal[] = [
    {
        id: 1,
        soal: {
            teks: "Ini Soal 1"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 2,
        soal: {
            teks: "Ini Soal 2"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 3,
        soal: {
            teks: "Ini Soal 3"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 4,
        soal: {
            teks: "Ini Soal 4"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 5,
        soal: {
            teks: "Ini Soal 5"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 6,
        soal: {
            teks: "Ini Soal 6"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 7,
        soal: {
            teks: "Ini Soal 7"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 8,
        soal: {
            teks: "Ini Soal 8"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 9,
        soal: {
            teks: "Ini Soal 9"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 10,
        soal: {
            teks: "Ini Soal 10"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 11,
        soal: {
            teks: "Ini Soal 11"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 12,
        soal: {
            teks: "Ini Soal 12"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 13,
        soal: {
            teks: "Ini Soal 13"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 14,
        soal: {
            teks: "Ini Soal 14"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 15,
        soal: {
            teks: "Ini Soal 15"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 16,
        soal: {
            teks: "Ini Soal 16"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 2,
                teks: "Pilihan C",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 3,
                teks: "Pilihan D",
                isCorrect: !Math.floor(Math.random()*2)
            }
        ],
    },
    {
        id: 17,
        soal: {
            teks: "Ini Soal 17"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 18,
        soal: {
            teks: "Ini Soal 18"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 19,
        soal: {
            teks: "Ini Soal 19"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 20,
        soal: {
            teks: "Ini Soal 20"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 21,
        soal: {
            teks: "Ini Soal 21"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 22,
        soal: {
            teks: "Ini Soal 22"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 23,
        soal: {
            teks: "Ini Soal 23"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 24,
        soal: {
            teks: "Ini Soal 24"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 25,
        soal: {
            teks: "Ini Soal 25"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 26,
        soal: {
            teks: "Ini Soal 26"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 27,
        soal: {
            teks: "Ini Soal 27"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 28,
        soal: {
            teks: "Ini Soal 28"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 29,
        soal: {
            teks: "Ini Soal 29"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
    {
        id: 30,
        soal: {
            teks: "Ini Soal 30"
        },
        pilihans: [
            {
                id: 0,
                teks: "Pilihan A",
                isCorrect: !Math.floor(Math.random()*2)
            },
            {
                id: 1,
                teks: "Pilihan B",
                isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 2,
                    teks: "Pilihan C",
                    isCorrect: !Math.floor(Math.random()*2)
                },
                {
                    id: 3,
                    teks: "Pilihan D",
                    isCorrect: !Math.floor(Math.random()*2)
                }
        ],
    },
]

export default kuis