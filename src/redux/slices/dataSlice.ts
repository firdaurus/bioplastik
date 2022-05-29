import { createSlice } from '@reduxjs/toolkit';

import linkQR from '../../data/linkQR';
import { MinimizedKuisData } from '../../data/kuis'

export interface DataState {
    genus: string, // Genus obtained from latest scan
    partSoal: number, // Part of question obtained from randomizing (3 parts)
    scores: number[], // Score of answered question
    latestKuisData: MinimizedKuisData[], // Latest kuis data
}

const initialState: DataState = {
    genus: "",
    partSoal: -1,
    scores: [],
    latestKuisData: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setGenus: (state, action) => {
            state.genus = action.payload
        },

        setGenusFromHash: (state, action) => {
            const hash: string = action.payload;
            const data = linkQR.find(materi => materi.hash === hash)
            if (data){
                state.genus = data.genus;
            }
        },

        randomizePartSoal: (state) => {
            if (state.partSoal >= 0) return;
            const partSoal: number = Math.floor(Math.random() * 3); // Generate random part soal (3 parts)
            state.partSoal = partSoal;
        },

        saveScore: (state, action) => {
            const score: number = action.payload;
            state.scores.push(score);
        },

        saveLatestKuisData: (state, action) => {
            const kuisData: MinimizedKuisData[] = action.payload;
            state.latestKuisData = kuisData;
        }
    },
})

export const { setGenus, setGenusFromHash, randomizePartSoal, saveScore, saveLatestKuisData } = dataSlice.actions

export default dataSlice.reducer