import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        setIsOpen(state, action) {
            state.isOpen = action.payload;
        },
    },
});

export default slice.reducer;
export const { setIsOpen } = slice.actions;