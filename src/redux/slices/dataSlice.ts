import { createSlice } from '@reduxjs/toolkit';

import linkQR from '../../data/linkQR';

export interface DataState {
    genus: string,
}

const initialState: DataState = {
    genus: "",
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
        }
    },
})

export const { setGenus, setGenusFromHash } = dataSlice.actions

export default dataSlice.reducer