import { createSlice } from "@reduxjs/toolkit";
import {Ways, WayType} from "../types";

const slice = createSlice({
    name: 'way',
    initialState: {
        ways: [],
    },
    reducers: {
        setWay(state: Ways, action) {
            state.ways = [...state.ways, action.payload];
        },
        removeWay(state: Ways, action) {
            const { payload } = action;
            const { ways } = state;

            const index = ways.findIndex((way: WayType) => way.id === payload);
            const data = [...ways.slice(0, index), ...ways.slice(index + 1)];

            state.ways = data;
        },
        setToFavorite(state: Ways, action) {
            const { ways } = state;
            const { payload } = action;

            const favoriteIndex = ways.findIndex((way: WayType) =>
                way.id === payload);

            const data = ways.map((item: WayType, index: number) => {
                if (index !== favoriteIndex) {
                    return item;
                }

                return {
                    ...item,
                    ...{ isFavorite: true },
                };
            });

            state.ways = data;
        },
    },
});

export default slice.reducer;
export const {
    setWay,
    removeWay,
    setToFavorite,
} = slice.actions;