import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'map',
    initialState: {
        markers: [],
        distance: '',
        description: null,
    },
    reducers: {
        setMarkers(state, action) {
            state.markers = action.payload;
        },
        setDistance(state, action) {
            state.distance = action.payload;
        },
        setDescription(state, action) {
            state.description = action.payload;
        },
    },
});

export default slice.reducer;
export const {
    setMarkers,
    setDistance,
    setDescription,
} = slice.actions;