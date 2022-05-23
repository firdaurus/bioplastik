interface NodeContent {
    text: string,
    to: number,
    genus?: string,
}

interface Node {
    id: number,
    content: NodeContent[]
}

interface KunciDeterminasi {
    data: Node[],
    getNode: (id: number) => NodeContent[],
    getBackwardNodeIdFrom: (id: number) => number,
}

const kunciDeterminasi: KunciDeterminasi = {
    data: [
        {
            id: 1,
            content: [
                {
                    text: "Inti sel tidak dilindungi membran",
                    to: 2,
                },
                {
                    text: "Inti sel dilindungi membran",
                    to: 3,
                },
            ]
        },
        {
            id: 2,
            content: [
                {
                    text: "Memiliki alat gerak (flagel)",
                    genus: "Bakteri",
                    to: 0,
                },
                {
                    text: "Memiliki pigmen warna",
                    genus: "Ganggang biru",
                    to: 0,
                },
            ]
        },
        {
            id: 3,
            content: [
                {
                    text: "Memiliki banyak sel (multiselular)",
                    to: 4,
                },
                {
                    text: "Umumnya bersel satu",
                    genus: "Protozoa",
                    to: 0,
                },
            ],
        },
        {
            id: 4,
            content: [
                {
                    text: "Tumbuhan yang berspora",
                    to: 5,
                },
                {
                    text: "Tumbuhan yang tidak berspora",
                    genus: "Zea mays",
                    to: 0,
                },
            ]
        },
        {
            id: 5,
            content: [
                {
                    text: "Tumbuhan yang tidak berbatang jelas",
                    to: 6,
                },
                {
                    text: "Tumbuhan yang berbatang jelas",
                    genus: "Suplir",
                    to: 0,
                },
            ]
        },
        {
            id: 6,
            content: [
                {
                    text: "Lumut dengan gametofit berupa talus",
                    to: 7,
                },
                {
                    text: "Lumut dengan gametofit berupa batang dan daun",
                    to: 8,
                },
            ]
        },
        {
            id: 7,
            content: [
                {
                    text: "Sprofit dengan kapsul memanjang seperti tanduk",
                    genus: "Anthoceros",
                    to: 0,
                },
                {
                    text: "Gametofit terdiri dari jantan dan betina, memiliki tangkai dan struktur seperti payung",
                    genus: "Marchantia",
                    to: 0,
                },
            ]
        },
        {
            id: 8,
            content: [
                {
                    text: "Daun tidak panjang, kurang dari 10mm, Daun menutupi hampir setengah batangnya, tangkai sporofit panjang dengan kapsul",
                    genus: "Polytrichum",
                    to: 0,
                },
                {
                    text: "Daun panjang, berbentuk lancet, membentuk roset, batang keras",
                    genus: "Rhodobryum",
                    to: 0,
                },
                {
                    text: "Daun panjang seperti jarum. Pada bagian ujung batang terdapat tumpukan daun seperti mangkuk, kadang keluar sporofit",
                    genus: "Campylopus",
                    to: 0,
                },
                {
                    text: "Daun tersusun melingkari batang, melebar dan memadat di bagian pangkal batang. Sporofit keluar dari tengah batang",
                    genus: "Bryum",
                    to: 0,
                },
                {
                    text: "Daun terdapat dalam 2 baris menyirip disisi kanan dan kiri Batang",
                    genus: "Fissidens",
                    to: 0,
                },
                {
                    text: "Daun tersusun melingkari batang, lebih dari setengah batang, pada 1 batang muncul sporofit lebih dari 2, dengan bentuk kapsul bulat atau lonjong",
                    genus: "Dicranum",
                    to: 0,
                },
            ]
        }
    ],

    getNode: (id: number) => {
        const result =  kunciDeterminasi.data.find(node => node.id === id);
        if (!result) throw new Error(`Node with id ${id} not found`);
        return result.content;
    },

    getBackwardNodeIdFrom: (id: number) => {
        return kunciDeterminasi.data.find(node => node.content.find(content => content.to === id))?.id || 0;
    }
}

export default kunciDeterminasi;
