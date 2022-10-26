import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        grid: 'grid'
    },
    reducers: {
        setGrid: (state, action) => {
            state.grid = action.payload.alignment;
        }
    },
    extraReducers: {
    }
})

export const { setGrid } = globalSlice.actions;

export default globalSlice.reducer;