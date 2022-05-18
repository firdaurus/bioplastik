import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
    genus: string
}

const initialState: DataState = {
    genus: "",
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
})

//TODO: Add reducers
// export const { } = dataSlice.actions

export default dataSlice.reducer